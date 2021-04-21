//using Microsoft.AspNet.Identity.EntityFramework;
//using System;
//using System.Collections.Generic;
//using System.ComponentModel.DataAnnotations.Schema;
//using System.Linq;
//using System.Web;

//namespace webAPI.Models
//{
//    public class cart
//    {
//        public int Id { get; set; }
//        public string productName { get; set; }
//        public string Image { get; set; }
//        public int Quantities { get; set; }
//        public int price { get; set; }
//        public string customerID { get; set; }

//        [ForeignKey("customerID")]
//        public virtual IdentityUser customer { get; set; }



//        public int productID { get; set; }

//        [ForeignKey("productID")]
//        public virtual Product Products { get; set; }
//    }
//}
