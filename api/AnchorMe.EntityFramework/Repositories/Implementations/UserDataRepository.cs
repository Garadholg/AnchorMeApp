using AnchorMe.EntityFramework.EF;
using AnchorMe.EntityFramework.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnchorMe.EntityFramework.Repositories.Implementations
{
    class UserDataRepository : IUserDataRepository
    {
        private AnchorMeEntities ctx;

        public UserDataRepository()
        {
            ctx = new AnchorMeEntities();
        }

        public UserData GetUserDataForLogin(string username, string password)
        {
            var userData = ctx.UserData
                .Where(u => u.LoginCredentials.Username == username && u.LoginCredentials.Pwd == password)
                .FirstOrDefault();

            return userData;
        }
    }
}
