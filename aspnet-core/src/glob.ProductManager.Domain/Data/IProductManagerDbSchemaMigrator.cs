using System.Threading.Tasks;

namespace glob.ProductManager.Data
{
    public interface IProductManagerDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
