using glob.ProductManager.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace glob.ProductManager.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class ProductManagerController : AbpController
    {
        protected ProductManagerController()
        {
            LocalizationResource = typeof(ProductManagerResource);
        }
    }
}