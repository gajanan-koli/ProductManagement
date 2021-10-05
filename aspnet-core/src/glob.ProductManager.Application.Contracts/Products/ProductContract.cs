using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace glob.ProductManager.Products
{
    public class ProductContract
    {
        [Required]
        [StringLength(255)]
        public string ProductName { get; set; }
        [Required]
        [StringLength(15)]
        public string Color { get; set; }
        [Required]
        [StringLength(500)]
        public string ProductDescription { get; set; }
        [Required]
        public int QuantityInStock { get; set; }
        [Required]
        public double Price { get; set; }
        [Required]
        public Guid CategoryId { get; set; }
        [Required]
        public Guid BrandId { get; set; }
    }
}
