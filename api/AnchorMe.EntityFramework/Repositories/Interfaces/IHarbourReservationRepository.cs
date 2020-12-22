using AnchorMe.EntityFramework.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnchorMe.EntityFramework.Repositories.Interfaces
{
    public interface IHarbourReservationRepository
    {
        void CreateHarbourReservation(int userID, int harbourID, DateTime startDate, DateTime endDate, string additionalNotes);

        IEnumerable<HarbourReservation> GetAllReservationsForUser(int userID);
    }
}
