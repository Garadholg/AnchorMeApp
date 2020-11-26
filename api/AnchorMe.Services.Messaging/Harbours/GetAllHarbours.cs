using AnchorMe.Services.Messaging.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnchorMe.Services.Messaging.Harbours
{
    public class GetAllHarboursResponse
    {
        public IEnumerable<HarbourVM> data { get; set; }
        public bool Successful { get; set; }
        public string Message { get; set; }
    }
}
