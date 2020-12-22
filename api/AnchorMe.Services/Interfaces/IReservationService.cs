using AnchorMe.Services.Messaging.Reservations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnchorMe.Services.Interfaces
{
    public interface IReservationService
    {
        MakeReservationResponse MakeReservation(MakeReservationRequest request);
        GetReservationsForUserResponse GetReservationsForUser(GetReservationsForUserRequest request);
    }
}
