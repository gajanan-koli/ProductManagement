using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace glob.ProductManager.Brands
{
    public class BrandContract
    {
        [Required]
        [StringLength(50)]
        public string BrandName { get; set; }
    }
}
