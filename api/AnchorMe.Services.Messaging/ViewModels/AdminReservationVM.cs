using AnchorMe.EntityFramework.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnchorMe.Services.Messaging.ViewModels
{
    public class AdminReservationVM
    {
        public int ReservationID { get; set; }
        public int HarbourID { get; set; }
        public int UserID { get; set; }
        public string UserUsername { get; set; }
        public string UserFullName { get; set; }
        public string UserEmail { get; set; }
        public string UserPhone { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Status { get; set; }

        public AdminReservationVM(HarbourReservation reservation)
        {
            ReservationID = reservation.IDHarbourReservation;
            HarbourID = reservation.Harbour.IDHarbour;
            UserID = reservation.UserData.IDUserData;
            UserUsername = reservation.UserData.LoginCredentials.Username;
            UserFullName = reservation.UserData.FirstName + " " + reservation.UserData.LastName;
            UserEmail = reservation.UserData.Email;
            UserPhone = reservation.UserData.Phone;
            StartDate = reservation.StartDate;
            EndDate = reservation.EndDate;
            Status = reservation.ReservationStatus.ReservationStatus1;
        }
    }
}
