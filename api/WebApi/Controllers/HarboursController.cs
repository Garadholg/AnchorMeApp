using AnchorMe.Services.Implementations;
using AnchorMe.Services.Interfaces;
using AnchorMe.Services.Messaging.Harbours;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApi.Controllers
{
    public class HarboursController : ApiController
    {
        private IHarbourService harbourService = new HarbourService();

        [HttpGet]
        [Route("api/harbours/all")]
        public IHttpActionResult GetAllHarbours()
        {
            GetAllHarboursResponse response = harbourService.GetAllHarbours();

            if (!response.Successful)
            {
                return BadRequest(response.Message);
            }

            return Ok(response);
        }
    }
}
