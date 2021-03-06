﻿using AnchorMe.EntityFramework.Repositories.Implementations;
using AnchorMe.EntityFramework.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnchorMe.EntityFramework.Repositories
{
    public static class RepositoryFactory
    {
        public static IUserDataRepository GetUserDataRepository() => new UserDataRepository();
        public static IHarbourRepository GetHarbourRepository() => new HarbourRepository();
        public static IHarbourReservationRepository GetHarbourReservationRepository() => new HarbourReservationRepository();
        public static IHarbourAdminRepository GetHarbourAdminRepository() => new HarbourAdminRepository();
        public static IRatingRepository GetRatingRepository() => new RatingRepository();
    }
}
