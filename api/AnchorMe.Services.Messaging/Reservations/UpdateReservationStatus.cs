using AnchorMe.Services.Messaging.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnchorMe.Services.Messaging.Reservations
{
    public class UpdateReservationStatusRequest : BaseRequest
    {
        public int ReservationID { get; set; }
        public int StatusID { get; set; }
    }

    public class UpdateReservationStatusResponse : BaseResponse
    {

    }
}
