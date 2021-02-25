using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnchorMe.EntityFramework.Repositories.Interfaces
{
    public interface IRatingRepository
    {
        void CreateRating(int reservationID, int ratingValue, string comment);
    }
}
