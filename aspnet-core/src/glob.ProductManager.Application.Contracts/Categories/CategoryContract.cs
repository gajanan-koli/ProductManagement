using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace glob.ProductManager.Categories
{
    public class CategoryContract
    {
        [Required]
        [StringLength(50)]
        public string CategoryName { get; set; }
    }
}
