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
    
    public partial class UserData
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public UserData()
        {
            this.HarbourReservation = new HashSet<HarbourReservation>();
        }
    
        public int IDUserData { get; set; }
        public int LoginCredentialsID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public System.DateTime DateOfBirth { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string ProfilePicture { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<HarbourReservation> HarbourReservation { get; set; }
        public virtual LoginCredentials LoginCredentials { get; set; }
    }
}
