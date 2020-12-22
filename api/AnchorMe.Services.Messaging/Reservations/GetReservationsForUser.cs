using AnchorMe.Services.Messaging.Base;
using AnchorMe.Services.Messaging.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnchorMe.Services.Messaging.Reservations
{
    public class GetReservationsForUserRequest : BaseRequest
    {
        public int UserID { get; set; }
    }

    public class GetReservationsForUserResponse : BaseResponse
    {
        public IEnumerable<ReservationVM> ActiveReservations { get; set; }
        public IEnumerable<ReservationVM> PastReservations { get; set; }
    }
}
