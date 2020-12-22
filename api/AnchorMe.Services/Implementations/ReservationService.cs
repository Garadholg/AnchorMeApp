using AnchorMe.EntityFramework.EF;
using AnchorMe.EntityFramework.Repositories;
using AnchorMe.EntityFramework.Repositories.Interfaces;
using AnchorMe.Services.Interfaces;
using AnchorMe.Services.Messaging.Reservations;
using AnchorMe.Services.Messaging.ViewModels;
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

        public GetReservationsForUserResponse GetReservationsForUser(GetReservationsForUserRequest request)
        {
            GetReservationsForUserResponse response = new GetReservationsForUserResponse();

            try
            {
                IEnumerable<HarbourReservation> reservations = harbourReservationRepository.GetAllReservationsForUser(request.UserID);

                ICollection<ReservationVM> activeReservations = new List<ReservationVM>();
                ICollection<ReservationVM> pastReservations = new List<ReservationVM>();

                foreach (HarbourReservation hr in reservations)
                {
                    if (hr.EndDate.Date >= DateTime.Now.Date &&
                        (hr.ReservationStatusID == 1 || hr.ReservationStatusID == 2 || hr.ReservationStatusID == 3))
                    {
                        activeReservations.Add(new ReservationVM(hr));
                    } 
                    else
                    {
                        pastReservations.Add(new ReservationVM(hr));
                    }
                }

                response.ActiveReservations = activeReservations;
                response.PastReservations = pastReservations;
                
            }
            catch (Exception ex)
            {
                response.Successful = false;
                response.Message = ex.Message;
            }

            return response;
        }
    }
}
