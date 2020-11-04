using AnchorMe.Services.Messaging.Login;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnchorMe.Services.Interfaces
{
    interface IAuthService
    {
        LoginResponse LoginUser(LoginRequest request);
    }
}
