using AnchorMe.EntityFramework.EF;
using AnchorMe.EntityFramework.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnchorMe.EntityFramework.Repositories.Implementations
{
    class HarbourAdminRepository : IHarbourAdminRepository
    {
        private AnchorMeEntities ctx;

        public HarbourAdminRepository()
        {
            ctx = new AnchorMeEntities();
        }

        public HarbourAdmin GetAdminForLogin(string username, string password)
        {
            HarbourAdmin admin = ctx.HarbourAdmin
                .Where(a => a.LoginCredentials.Username == username && a.LoginCredentials.Pwd == password)
                .FirstOrDefault();

            return admin;
        }
    }
}
