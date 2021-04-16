using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace webAPI.Models
{
    public class Product
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public int Price { get; set; }


        public int ProductDetailsID { get; set; }

        [ForeignKey("ProductDetailsID")]
        public virtual ProductDedails ProductDedails { get; set; }


    }
}