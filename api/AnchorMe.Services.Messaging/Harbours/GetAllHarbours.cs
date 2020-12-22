using AnchorMe.Services.Messaging.Base;
using AnchorMe.Services.Messaging.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnchorMe.Services.Messaging.Harbours
{
    public class GetAllHarboursResponse : BaseResponse
    {
        public IEnumerable<HarbourVM> Harbours { get; set; }
    }
}
