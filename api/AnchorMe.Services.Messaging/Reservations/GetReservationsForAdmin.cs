using AnchorMe.Services.Messaging.Base;
using AnchorMe.Services.Messaging.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnchorMe.Services.Messaging.Reservations
{
    public class GetReservationsForAdminRequest : BaseRequest
    {
        public int AdminID { get; set; }
    }

    public class GetReservationsForAdminResponse : BaseResponse
    {
        public IEnumerable<AdminReservationVM> PendingReservations { get; set; }
        public IEnumerable<AdminReservationVM> AcceptedReservations { get; set; }
        public IEnumerable<AdminReservationVM> ActiveReservations { get; set; }
        public IEnumerable<AdminReservationVM> CompletedReservations { get; set; }
        public IEnumerable<AdminReservationVM> UnfinishedReservations { get; set; }
    }
}
