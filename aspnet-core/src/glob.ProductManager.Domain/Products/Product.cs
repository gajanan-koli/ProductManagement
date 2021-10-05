using glob.ProductManager.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Auditing;

namespace glob.ProductManager.Products
{
    public class Product : AuditedAggregateRoot<Guid>
    {
        public string ProductName { get; set; }
        public string Color { get; set; }
        public string ProductDescription { get; set; }
        public int QuantityInStock { get; set; }
        public double Price { get; set; }

        //relationship
        public Guid CategoryId { get; set; }
        public Category Category { get; set; }
        public Guid BrandId { get; set; }
        public Brand Brand { get; set; }
    }
}
