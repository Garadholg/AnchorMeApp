using AnchorMe.EntityFramework.EF;
using AnchorMe.EntityFramework.Repositories;
using AnchorMe.EntityFramework.Repositories.Interfaces;
using AnchorMe.Services.Interfaces;
using AnchorMe.Services.Messaging.Harbours;
using AnchorMe.Services.Messaging.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnchorMe.Services.Implementations
{
    public class HarbourService : IHarbourService
    {
        private IHarbourRepository harbourRepository;

        public HarbourService()
        {
            harbourRepository = RepositoryFactory.GetHarbourRepository();
        }

        public GetAllHarboursResponse GetAllHarbours()
        {
            GetAllHarboursResponse response = new GetAllHarboursResponse();

            try
            {
                IEnumerable<Harbour> harbours = harbourRepository.GetAllHarbours();

                ICollection<HarbourVM> harbourVMList = new List<HarbourVM>();
                foreach (Harbour h in harbours)
                {
                    harbourVMList.Add(new HarbourVM(h));
                }

                response.Harbours = harbourVMList;
            }
            catch (Exception ex)
            {
                response.Successful = false;
                response.Message = "harbours_fetch_unsuccessful";
            }

            return response;
        }
    }
}
