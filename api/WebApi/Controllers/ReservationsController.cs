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

        [HttpPost]
        [Route("api/reservations/getForUser")]
        public IHttpActionResult GetReservationsForUser([FromBody]GetReservationsForUserRequest request)
        {
            GetReservationsForUserResponse response = reservationService.GetReservationsForUser(request);

            if (!response.Successful)
            {
                return BadRequest(response.Message);
            }

            return Ok(response);
        }

        [HttpPost]
        [Route("api/reservations/getForAdmin")]
        public IHttpActionResult GetReservationsForAdmin([FromBody]GetReservationsForAdminRequest request)
        {
            GetReservationsForAdminResponse response = reservationService.GetReservationsForAdmin(request);

            if (!response.Successful)
            {
                return BadRequest(response.Message);
            }

            return Ok(response);
        }

        [HttpPost]
        [Route("api/reservations/setRating")]
        public IHttpActionResult SetRatingForReservation([FromBody]SetRatingForReservationRequest request)
        {
            SetRatingForReservationResponse response = reservationService.SetRatingForReservation(request);

            if (!response.Successful)
            {
                return BadRequest(response.Message);
            }

            return Ok(response);
        }

        [HttpPost]
        [Route("api/reservations/updateStatus")]
        public IHttpActionResult UpdateReservationStatus([FromBody]UpdateReservationStatusRequest request)
        {
            UpdateReservationStatusResponse response = reservationService.UpdateReservationStatus(request);

            if (!response.Successful)
            {
                return BadRequest(response.Message);
            }

            return Ok(response);
        }
    }
}
