using AnchorMe.EntityFramework.Repositories;
using AnchorMe.EntityFramework.Repositories.Interfaces;
using AnchorMe.Services.Interfaces;
using AnchorMe.Services.Messaging.Reservations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnchorMe.Services.Implementations
{
    public class ReservationService : IReservationService
    {
        private IHarbourReservationRepository harbourReservationRepository;

        public ReservationService()
        {
            harbourReservationRepository = RepositoryFactory.GetHarbourReservationRepository();
        }
        public MakeReservationResponse MakeReservation(MakeReservationRequest request)
        {
            MakeReservationResponse response = new MakeReservationResponse();

            try
            {
                harbourReservationRepository.CreateHarbourReservation(request.UserID, request.HarbourID, request.StartDate, request.EndDate, request.AdditionalNotes);
            }
            catch (Exception ex)
            {
                response.Successful = false;
                response.Message = ex.ToString();
            }

            return response;
        }
    }
}
