using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using webAPI.Models;

namespace webAPI.Controller
{
    [Authorize]
    public class cartsController : ApiController
    {
        private context db = new context();

        // GET: api/carts
        public IQueryable<cart> Getcart()
        {
            return db.cart;
        }

        // GET: api/carts/5
        [ResponseType(typeof(cart))]
        public IHttpActionResult Getcart(int id)
        {
            cart cart = db.cart.Find(id);
            if (cart == null)
            {
                return NotFound();
            }

            return Ok(cart);
        }

        // PUT: api/carts/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putcart(int id, cart cart)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != cart.Id)
            {
                return BadRequest();
            }

            db.Entry(cart).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!cartExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/carts
        [ResponseType(typeof(cart))]
        public IHttpActionResult Postcart(cart cart)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.cart.Add(cart);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = cart.Id }, cart);
        }

        // DELETE: api/carts/5
        [ResponseType(typeof(cart))]
        public IHttpActionResult Deletecart(int id)
        {
            cart cart = db.cart.Find(id);
            if (cart == null)
            {
                return NotFound();
            }

            db.cart.Remove(cart);
            db.SaveChanges();

            return Ok(cart);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool cartExists(int id)
        {
            return db.cart.Count(e => e.Id == id) > 0;
        }
    }
}