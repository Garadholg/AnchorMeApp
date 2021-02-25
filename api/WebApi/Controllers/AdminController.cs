using AnchorMe.Services;
using AnchorMe.Services.Interfaces;
using AnchorMe.Services.Messaging.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApi.Controllers
{
    public class AdminController : ApiController
    {
        private IAdminService adminService = ObjectFactory.GetAdminService();

        [HttpPost]
        [Route("api/admin/updateInfo")]
        public IHttpActionResult UpdateAdminInfo([FromBody]UpdateAdminInfoRequest request)
        {
            UpdateAdminInfoResponse response = adminService.UpdateAdminInfo(request);

            if (!response.Successful)
            {
                return BadRequest(response.Message);
            }

            return Ok(response);
        }
    }
}
