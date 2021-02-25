using AnchorMe.EntityFramework.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnchorMe.EntityFramework.Repositories.Interfaces
{
    public interface IHarbourAdminRepository
    {
        HarbourAdmin GetAdminForLogin(string username, string password);
    }
}
