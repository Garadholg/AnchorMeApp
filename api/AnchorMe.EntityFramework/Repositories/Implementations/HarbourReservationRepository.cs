using AnchorMe.EntityFramework.EF;
using AnchorMe.EntityFramework.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnchorMe.EntityFramework.Repositories.Implementations
{
    public class HarbourReservationRepository : IHarbourReservationRepository
    {
        private AnchorMeEntities ctx;

        public HarbourReservationRepository()
        {
            ctx = new AnchorMeEntities();
        }

        public void CreateHarbourReservation(int userID, int harbourID, DateTime startDate, DateTime endDate, string additionalNotes)
        {
            HarbourReservation reservation = new HarbourReservation
            {
                UserID = userID,
                HarbourID = harbourID,
                StartDate = startDate,
                EndDate = endDate,
                AdditionalNotes = additionalNotes,
                ReservationStatusID = 1
            };

            ctx.HarbourReservation.Add(reservation);
            ctx.SaveChanges();
        }

        public IEnumerable<HarbourReservation> GetAllReservationsForUser(int userID)
        {
            var reservations = ctx.HarbourReservation
                                .Where(r => r.UserID == userID)
                                .ToList();

            return reservations;
        }

        public IEnumerable<HarbourReservation> GetAllReservationsForAdmin(int adminID)
        {
            var adminHarbourID = ctx.HarbourAdmin
                .Where(a => a.IDHarbourAdmin == adminID)
                .FirstOrDefault()
                .HarbourID;

            var reservations = ctx.HarbourReservation
                                .Where(r => r.HarbourID == adminHarbourID)
                                .ToList();

            return reservations;
        }
    }
}
