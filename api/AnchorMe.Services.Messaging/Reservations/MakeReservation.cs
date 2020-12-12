using AnchorMe.Services.Messaging.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnchorMe.Services.Messaging.Reservations
{
    public class MakeReservationRequest : BaseRequest
    {
        public int UserID { get; set; }
        public int HarbourID { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string AdditionalNotes { get; set; }
    }

    public class MakeReservationResponse : BaseResponse
    {

    }
}
