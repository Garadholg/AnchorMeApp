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
        private IRatingRepository ratingRepository;

        public ReservationService()
        {
            harbourReservationRepository = RepositoryFactory.GetHarbourReservationRepository();
            ratingRepository = RepositoryFactory.GetRatingRepository();
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
                response.Message = ex.Message;
            }

            return response;
        }

        public GetReservationsForUserResponse GetReservationsForUser(GetReservationsForUserRequest request)
        {
            GetReservationsForUserResponse response = new GetReservationsForUserResponse();

            try
            {
                IEnumerable<HarbourReservation> reservations = harbourReservationRepository.GetAllReservationsForUser(request.UserID);

                ICollection<UserReservationVM> activeReservations = new List<UserReservationVM>();
                ICollection<UserReservationVM> pastReservations = new List<UserReservationVM>();

                foreach (HarbourReservation hr in reservations)
                {
                    if (hr.EndDate.Date >= DateTime.Now.Date &&
                        (hr.ReservationStatusID == 1 || hr.ReservationStatusID == 2 || hr.ReservationStatusID == 3))
                    {
                        activeReservations.Add(new UserReservationVM(hr));
                    } 
                    else
                    {
                        pastReservations.Add(new UserReservationVM(hr));
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

        public GetReservationsForAdminResponse GetReservationsForAdmin(GetReservationsForAdminRequest request)
        {
            GetReservationsForAdminResponse response = new GetReservationsForAdminResponse();

            try
            {
                IEnumerable<HarbourReservation> reservations = harbourReservationRepository.GetAllReservationsForAdmin(request.AdminID);

                ICollection<AdminReservationVM> pendingReservations = new List<AdminReservationVM>();
                ICollection<AdminReservationVM> acceptedReservations = new List<AdminReservationVM>();
                ICollection<AdminReservationVM> activeReservations = new List<AdminReservationVM>();
                ICollection<AdminReservationVM> completedReservations = new List<AdminReservationVM>();
                ICollection<AdminReservationVM> unfinishedReservations = new List<AdminReservationVM>();

                foreach (HarbourReservation hr in reservations)
                {
                    switch (hr.ReservationStatusID)
                    {
                        case 1:
                            pendingReservations.Add(new AdminReservationVM(hr));
                            break;
                        case 2:
                            acceptedReservations.Add(new AdminReservationVM(hr));
                            break;
                        case 3:
                            activeReservations.Add(new AdminReservationVM(hr));
                            break;
                        case 4:
                            completedReservations.Add(new AdminReservationVM(hr));
                            break;
                        case 5:
                        case 6:
                            unfinishedReservations.Add(new AdminReservationVM(hr));
                            break;
                    }
                }

                response.PendingReservations = pendingReservations;
                response.AcceptedReservations = acceptedReservations;
                response.ActiveReservations = activeReservations;
                response.CompletedReservations = completedReservations;
                response.UnfinishedReservations = unfinishedReservations;

            }
            catch (Exception ex)
            {
                response.Successful = false;
                response.Message = ex.Message;
            }

            return response;
        }

        public SetRatingForReservationResponse SetRatingForReservation(SetRatingForReservationRequest request)
        {
            SetRatingForReservationResponse response = new SetRatingForReservationResponse();

            try
            {
                ratingRepository.CreateRating(request.ReservationID, request.Rating, request.Comment);
            }
            catch (Exception ex)
            {
                response.Successful = false;
                response.Message = ex.Message;
            }

            return response;
        }

        public UpdateReservationStatusResponse UpdateReservationStatus(UpdateReservationStatusRequest request)
        {
            UpdateReservationStatusResponse response = new UpdateReservationStatusResponse();

            try
            {
                harbourReservationRepository.UpdateReservationStatus(request.ReservationID, request.StatusID);
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
