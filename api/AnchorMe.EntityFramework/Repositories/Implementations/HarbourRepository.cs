using AnchorMe.EntityFramework.EF;
using AnchorMe.EntityFramework.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnchorMe.EntityFramework.Repositories.Implementations
{
    public class HarbourRepository : IHarbourRepository
    {
        private AnchorMeEntities ctx;
        
        public HarbourRepository()
        {
            ctx = new AnchorMeEntities();
        }

        public IEnumerable<Harbour> GetAllHarbours()
        {
            var harbours = ctx.Harbour.ToList();

            return harbours;
        }
    }
}
