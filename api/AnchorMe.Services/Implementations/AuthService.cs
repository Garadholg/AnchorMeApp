using AnchorMe.EntityFramework.EF;
using AnchorMe.EntityFramework.Repositories;
using AnchorMe.EntityFramework.Repositories.Interfaces;
using AnchorMe.Services.Interfaces;
using AnchorMe.Services.Messaging.Login;
using AnchorMe.Services.Messaging.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnchorMe.Services.Implementations
{
    public class AuthService : IAuthService
    {
        private IUserDataRepository userDataRepository;

        public AuthService()
        {
            userDataRepository = RepositoryFactory.GetUserDataRepository();
        }

        public LoginResponse LoginUser(LoginRequest request)
        {
            LoginResponse response = new LoginResponse();

            try
            {
                UserData userData = userDataRepository.GetUserDataForLogin(request.Username, request.Password);

                response.LoggedUser = new LoggedUserVM(userData);
                response.Successful = true;
            }
            catch (Exception ex)
            {
                response.Successful = false;
                response.Message = "login_unsuccessful";
            }

            return response;
        }
    }
}
