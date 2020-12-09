﻿using AnchorMe.EntityFramework.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnchorMe.Services.Messaging.ViewModels
{
    public class HarbourVM
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public int BerthsQuantity { get; set; }
        public string Details { get; set; }
        public string Picture { get; set; }

        public HarbourVM(Harbour harbour)
        {
            ID = harbour.IDHarbour;
            Name = harbour.HarbourName;
            City = harbour.City.CityName;
            Country = harbour.City.Country.CountryName;
            PhoneNumber = harbour.PhoneNumber;
            Email = harbour.Email;
            Latitude = decimal.ToDouble(harbour.Latitude);
            Longitude = decimal.ToDouble(harbour.Longitude);
            BerthsQuantity = harbour.BerthsQuantity;
            Details = harbour.Details;
            Picture = harbour.Picture;
        }
    }
}
