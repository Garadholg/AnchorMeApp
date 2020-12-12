using AnchorMe.Services;
using AnchorMe.Services.Implementations;
using AnchorMe.Services.Interfaces;
using AnchorMe.Services.Messaging.Reservations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApi.Controllers
{
    public class ReservationsController : ApiController
    {
        private IReservationService reservationService = ObjectFactory.GetReservationService();

        [HttpPost]
        [Route("api/reservations/create")]
        public IHttpActionResult MakeReservation([FromBody]MakeReservationRequest request)
        {
            MakeReservationResponse response = reservationService.MakeReservation(request);

            if (!response.Successful)
            {
                return BadRequest(response.Message);
            }

            return Ok(response);
        }
    }
}
