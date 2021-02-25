using AnchorMe.EntityFramework.Repositories;
using AnchorMe.EntityFramework.Repositories.Interfaces;
using AnchorMe.Services.Interfaces;
using AnchorMe.Services.Messaging.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnchorMe.Services.Implementations
{
    public class AdminService : IAdminService
    {
        private IHarbourAdminRepository harbourAdminRepository;

        public AdminService()
        {
            harbourAdminRepository = RepositoryFactory.GetHarbourAdminRepository();
        }

        public UpdateAdminInfoResponse UpdateAdminInfo(UpdateAdminInfoRequest request)
        {
            UpdateAdminInfoResponse response = new UpdateAdminInfoResponse();

            try
            {
                harbourAdminRepository.UpdateAdminInfo(request.HarbourID, request.Details, request.QtyChange);
            }
            catch (Exception ex)
            {
                response.Successful = false;
                response.Message = ex.Message;
            }

            return response;
        }
    }
}
