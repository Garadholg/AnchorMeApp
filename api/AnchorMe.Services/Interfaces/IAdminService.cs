using AnchorMe.Services.Messaging.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnchorMe.Services.Interfaces
{
    public interface IAdminService
    {
        UpdateAdminInfoResponse UpdateAdminInfo(UpdateAdminInfoRequest request);
    }
}
