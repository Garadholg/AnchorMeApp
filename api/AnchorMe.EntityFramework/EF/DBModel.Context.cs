﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class AnchorMeEntities : DbContext
    {
        public AnchorMeEntities()
            : base("name=AnchorMeEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<LoginCredentials> LoginCredentials { get; set; }
        public virtual DbSet<UserData> UserData { get; set; }
        public virtual DbSet<UserRole> UserRole { get; set; }
        public virtual DbSet<City> City { get; set; }
        public virtual DbSet<Country> Country { get; set; }
        public virtual DbSet<Harbour> Harbour { get; set; }
        public virtual DbSet<HarbourReservation> HarbourReservation { get; set; }
        public virtual DbSet<ReservationStatus> ReservationStatus { get; set; }
    }
}
