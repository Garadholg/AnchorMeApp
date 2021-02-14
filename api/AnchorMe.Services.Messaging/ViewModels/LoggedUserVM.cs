using AnchorMe.EntityFramework.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnchorMe.Services.Messaging.ViewModels
{
    public class LoggedUserVM
    {
        private const string ROLE_USER = "user";
        private const string ROLE_ADMIN = "admin";

        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string ProfilePicture { get; set; }

        public string Username { get; set; }
        public string Role { get; set; }
        public double Rating { get; set; }

        public HarbourVM adminHarbour { get; set; }

        public LoggedUserVM(UserData user)
        {
            ID = user.IDUserData;
            FirstName = user.FirstName;
            LastName = user.LastName;
            Email = user.Email;
            Phone = user.Phone;
            ProfilePicture = ProfilePicture;
            Username = user.LoginCredentials.Username;
            Role = ROLE_USER;
        }

        
    }
}
