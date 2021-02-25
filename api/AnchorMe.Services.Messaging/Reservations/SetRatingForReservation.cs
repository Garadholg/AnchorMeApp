using AnchorMe.Services.Messaging.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnchorMe.Services.Messaging.Reservations
{
    public class SetRatingForReservationRequest : BaseRequest
    {
        public int ReservationID { get; set; }
        public int Rating { get; set; }
        public string Comment { get; set; }
    }

    public class SetRatingForReservationResponse : BaseResponse
    {
    }
}
