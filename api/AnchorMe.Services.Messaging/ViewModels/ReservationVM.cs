using AnchorMe.EntityFramework.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnchorMe.Services.Messaging.ViewModels
{
    public class ReservationVM
    {
        public int ReservationID { get; set; }
        public int UserID { get; set; }
        public int HarbourID { get; set; }
        public string HarbourName { get; set; }
        public string HarbourLocation { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Status { get; set; }
        public double Rating { get; set; }

        public ReservationVM(HarbourReservation reservation)
        {
            ReservationID = reservation.IDHarbourReservation;
            UserID = reservation.UserData.IDUserData;
            HarbourID = reservation.Harbour.IDHarbour;
            HarbourName = reservation.Harbour.HarbourName;
            HarbourLocation = reservation.Harbour.City.CityName + ", " + reservation.Harbour.City.Country.CountryName;
            StartDate = reservation.StartDate;
            EndDate = reservation.EndDate;
            Status = reservation.ReservationStatus.ReservationStatus1;
            Rating = reservation.Rating.RatingValue;
        }
    }
}
