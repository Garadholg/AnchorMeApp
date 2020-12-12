using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnchorMe.Services.Messaging.Base
{
    public class BaseRequest
    {

    }

    public class BaseResponse
    {
        public bool Successful { get; set; }
        public string Message { get; set; }

        public BaseResponse()
        {
            Successful = true;
        }
    }
}
