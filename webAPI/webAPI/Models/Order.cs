//using Microsoft.AspNet.Identity.EntityFramework;
//using System;
//using System.Collections.Generic;
//using System.ComponentModel.DataAnnotations.Schema;
//using System.Linq;
//using System.Web;

//namespace webAPI.Models
//{
//    public class Order
//    {
//        public int ID { get; set; }
//        public string productName { get; set; }
//        public string Image { get; set; }
//        public int Quantities { get; set; }
//        public int price { get; set; }
//        public string Name { get; set; }
//        public string address { get; set; }
//        public string mobilePhone { get; set; }
//        public string Data { get; set; }

//        public string customerID { get; set; }

//        [ForeignKey("customerID")]
//        public virtual IdentityUser customer { get; set; }


//        public int ProductID { get; set; }

//        [ForeignKey("ProductID")]
//        public virtual Product Products { get; set; }
//    }
//}
