using AnchorMe.Services.Auth;
using AnchorMe.Services.Interfaces;
using AnchorMe.Services.Messaging.Login;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApi.Controllers
{
    public class LoginController : ApiController
    {
        private IAuthService authService = new AuthService();

        [HttpPost]
        [Route("api/login")]
        public IHttpActionResult Login([FromBody]LoginRequest request)
        {
            LoginResponse response = authService.LoginUser(request);

            if (!response.Successful)
            {
                return BadRequest(response.Message);
            }

            return Ok(response);
        }
    }
}
