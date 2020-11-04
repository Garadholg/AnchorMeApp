using AnchorMe.EntityFramework.Repositories.Implementations;
using AnchorMe.EntityFramework.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnchorMe.EntityFramework.Repositories
{
    public static class RepositoryFactory
    {
        public static IUserDataRepository GetUserDataRepository() => new UserDataRepository();
    }
}
