using AnchorMe.Services.Messaging.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnchorMe.Services.Messaging.Admin
{
    public class UpdateAdminInfoRequest : BaseRequest
    {
        public int HarbourID { get; set; }
        public string Details { get; set; }
        public int QtyChange { get; set; }
    }

    public class UpdateAdminInfoResponse : BaseResponse
    {
    }
}
