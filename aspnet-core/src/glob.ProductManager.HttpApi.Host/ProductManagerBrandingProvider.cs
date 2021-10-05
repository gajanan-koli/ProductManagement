using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace glob.ProductManager
{
    [Dependency(ReplaceServices = true)]
    public class ProductManagerBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "ProductManager";
    }
}
