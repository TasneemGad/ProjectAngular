using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace webAPI.Models
{
    public class context: IdentityDbContext
    {
        public context() : base("CS")
        {

        }
        public virtual DbSet<cart> cart { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<payment> Payments { get; set; }

    public System.Data.Entity.DbSet<webAPI.Models.ProductDedails> ProductDedails { get; set; }
  }
}
