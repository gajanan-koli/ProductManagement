using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace glob.ProductManager.Products
{
    public class ProductDto : AuditedEntityDto<Guid>
    {
        public string ProductName { get; set; }
        public string Color { get; set; }
        public string ProductDescription { get; set; }
        public int QuantityInStock { get; set; }
        public double Price { get; set; }
        public Guid CategoryId { get; set; }
        public Guid BrandId { get; set; }
    }
}
