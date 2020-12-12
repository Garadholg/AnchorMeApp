using AnchorMe.Services.Implementations;
using AnchorMe.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnchorMe.Services
{
    public static class ObjectFactory
    {
        public static IAuthService GetAuthService() => new AuthService();
        public static IHarbourService GetHarbourService() => new HarbourService();
        public static IReservationService GetReservationService() => new ReservationService();
    }
}
