//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace AnchorMe.EntityFramework.EF
{
    using System;
    using System.Collections.Generic;
    
    public partial class Harbour
    {
        public int IDHarbour { get; set; }
        public string HarbourName { get; set; }
        public int CityID { get; set; }
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
        public int BerthsQuantity { get; set; }
        public string Picture { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Details { get; set; }
    
        public virtual City City { get; set; }
    }
}
