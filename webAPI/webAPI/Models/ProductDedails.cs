<<<<<<< HEAD
using Newtonsoft.Json;
=======
>>>>>>> dd7a7fa89fe4259342208520ec3ac71869b91b7b
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace webAPI.Models
{
    public class ProductDedails
    {
   // [ForeignKey("Product")]
    public int ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public int Price { get; set; }
    //[ForeignKey("Product")]
    //public int ProductId { get; set; }
    [JsonIgnore]
    public virtual Product Product { get; set; }


    //public int ProductID { get; set; }
    //[ForeignKey("ProductID")]
    public virtual Product Product { get; set; }

<<<<<<< HEAD
=======

>>>>>>> dd7a7fa89fe4259342208520ec3ac71869b91b7b
  }
}
