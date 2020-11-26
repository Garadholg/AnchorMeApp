using AnchorMe.Services.Messaging.Harbours;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnchorMe.Services.Interfaces
{
    public interface IHarbourService
    {
        GetAllHarboursResponse GetAllHarbours();
    }
}
