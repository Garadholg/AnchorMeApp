using AnchorMe.EntityFramework.EF;
using AnchorMe.EntityFramework.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnchorMe.EntityFramework.Repositories.Implementations
{
    public class RatingRepository : IRatingRepository
    {
        private AnchorMeEntities ctx;

        public RatingRepository()
        {
            ctx = new AnchorMeEntities();
        }

        public void CreateRating(int reservationID, int ratingValue, string comment)
        {
            Rating rating = new Rating
            {
                RatingValue = ratingValue,
                Comment = comment
            };

            ctx.Rating.Add(rating);

            // linking reservation to rating
            HarbourReservation reservation = ctx.HarbourReservation
                .Where(r => r.IDHarbourReservation == reservationID)
                .FirstOrDefault();
            reservation.RatingID = rating.IDRating;

            ctx.SaveChanges();

            // updating harbour rating
            Harbour harbour = ctx.Harbour
                .Where(h => h.IDHarbour == reservation.Harbour.IDHarbour)
                .FirstOrDefault();

            List<Rating> ratings = ctx.HarbourReservation
                .Where(hr => hr.Harbour.IDHarbour == harbour.IDHarbour)
                .Select(hr => hr.Rating)
                .ToList();

            double newRating = ratings.Count() > 0 ? ratings.Average(r => r.RatingValue) : 0;
            harbour.Rating = (decimal)newRating;

            ctx.SaveChanges();
        }
    }
}
