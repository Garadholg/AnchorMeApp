use AnchorMe
go

insert into Country
values ('Croatia')
go

insert into City
values ('Pula', 1),
	   ('Medulin', 1),
	   ('Pomer', 1),
	   ('Rovinj', 1),
	   ('Zadar', 1),
	   ('Split', 1),
	   ('Dubrovnik', 1)
go

insert into Harbour
values ('Lu�ica "Delfin"', 1, '+911111111', 'delfin.pula@mail.hr', 44.844893, 13.842204, 32, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ante ex. Integer cursus sem id volutpat eleifend. Sed placerat libero sed aliquam euismod. Nunc quis leo eros. Vestibulum tincidunt placerat dolor eget molestie. Etiam sodales lacus sapien, sed pretium lacus eleifend sed. Curabitur ullamcorper dui eu ornare egestas. Cras cursus sapien in purus tempor pretium. Curabitur et faucibus augue, in consectetur libero.', null, 4.2),
	   ('Luka "Bunarina"', 1, '+922222222', 'bunarina@mail.hr', 44.840066, 13.838192, 65, 'Vestibulum auctor est eu dui scelerisque sagittis. Cras quis interdum arcu, scelerisque pellentesque neque. Aliquam aliquam iaculis enim, eu tincidunt dolor tempus vitae. Pellentesque sed dolor nisl. Praesent sit amet odio malesuada, efficitur massa et, volutpat urna.', null, 4.7),
	   ('Marina Veruda', 1, null, 'marina.veruda@mail.hr', 44.838998, 13.842915, 124, 'Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse odio sem, pellentesque id ultrices volutpat, facilisis a nunc. Integer vehicula euismod felis, vel pulvinar justo rutrum at.', null, 4.5),
	   ('Privezi�te "Puntica"', 2, '+94444444', 'puntica.medulin@mail.hr', 44.814478, 13.929125, 28, '-', null, 3.3),
	   ('ACI Marina Pomer', 3, '+955555555', 'aci.pomer@mail.hr', 44.821714, 13.901718, 56, 'Duis in fringilla neque, at semper tellus. Vestibulum quis eros auctor, tincidunt ex eget, viverra lacus. Etiam suscipit felis felis, a congue est dapibus id. Ut commodo, ligula in consequat ultricies, nisl risus elementum nisl, sed volutpat nisi purus at metus.', null, 4.1),
	   ('ACI Marina Rovinj', 4, null, 'aci.rovinj@mail.hr', 45.075538, 13.636087, 80, '-', null, 3.9),
	   ('Zadar Pitter Yachting', 5, '+977777777', 'zadar.pitter@mail.hr', 44.119648, 15.229551, 124, '-', null, 0),
	   ('ACI Marina Dubrovnik', 7, '+988888888', 'aci.dubrovnik@mail.hr', 42.671067, 18.125734, 96, 'Integer rutrum hendrerit ex, ac congue augue mollis sed. Pellentesque tempor tincidunt massa, quis porttitor orci iaculis ut. Vivamus a sagittis augue. Sed malesuada quam sed ipsum consectetur imperdiet. Proin interdum tortor non orci pellentesque, nec sollicitudin urna convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia facilisis erat sagittis convallis.', null, 1.7)
go

insert into LoginCredentials
values ('admin', 'admin'),
	   ('user', 'test123'),
	   ('amaurov', '12345')
go

insert into UserData 
values (2, 'Pero', 'Peric', '19000101', 'user@mail.com', null, null),
	   (3, 'Anton', 'Maurovic', '19940119', 'amaurov@racunarstvo.hr', '0911111111', null)
go

insert into HarbourAdmin
values (1, 2)

insert into ReservationStatus
values ('Pending'),
	   ('Accepted'),
	   ('Active'),
	   ('Completed'),
	   ('Declined'),
	   ('Cancelled')
go

insert into HarbourReservation
values (2, 1, '20201230', '20210228', 'Testni reservation koji je aktivan', 3, null),
	   (2, 4, '20201212', '20210221', 'Testni reservation koji zavrsava danas', 3, null),
	   (2, 3, '20201110', '20201214', 'Past reservation that went fine', 4, null),
	   (2, 1, '20201022', '20201028', 'Past reservation declined', 5, null),
	   (2, 4, '20210102', '20210227', 'Current reservation declined', 5, null),
	   (2, 6, '20210227', '20210305', 'Pending reservation', 1, null)
go
