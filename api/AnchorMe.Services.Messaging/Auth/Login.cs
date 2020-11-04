using AnchorMe.EntityFramework.EF;
using AnchorMe.Services.Messaging.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnchorMe.Services.Messaging.Login
{
    public class LoginRequest
    {
        public string Username { get; set; }

        public string Password { get; set; }

    }

    public class LoginResponse
    {
        public LoggedUserVM LoggedUser { get; set; }

        public bool Successful { get; set; }

        public string Message { get; set; }

    }
}
