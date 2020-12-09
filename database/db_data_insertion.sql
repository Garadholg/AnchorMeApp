use AnchorMe
go

insert into UserRole
values ('admin'),
	   ('user')
go

insert into UserData 
values ('Admin', 'Admin', '00010101', 'admin@mail.com', '000000000', null),
	   ('User', 'User', '19000101', 'user@mail.com', null, null),
	   ('Anton', 'Maurovic', '19940119', 'amaurov@racunarstvo.hr', '0911111111', null)
go

insert into LoginCredentials
values (1, 'admin', 'admin', 1),
	   (2, 'user', 'test123', 2),
	   (3, 'amaurov', '12345', 2)
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
values ('Luèica "Delfin"', 1, '+911111111', 'delfin.pula@mail.hr', 44.844893, 13.842204, 32, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ante ex. Integer cursus sem id volutpat eleifend. Sed placerat libero sed aliquam euismod. Nunc quis leo eros. Vestibulum tincidunt placerat dolor eget molestie. Etiam sodales lacus sapien, sed pretium lacus eleifend sed. Curabitur ullamcorper dui eu ornare egestas. Cras cursus sapien in purus tempor pretium. Curabitur et faucibus augue, in consectetur libero.', null),
	   ('Luka "Bunarina"', 1, '+922222222', 'bunarina@mail.hr', 44.840066, 13.838192, 65, 'Vestibulum auctor est eu dui scelerisque sagittis. Cras quis interdum arcu, scelerisque pellentesque neque. Aliquam aliquam iaculis enim, eu tincidunt dolor tempus vitae. Pellentesque sed dolor nisl. Praesent sit amet odio malesuada, efficitur massa et, volutpat urna.', null),
	   ('Marina Veruda', 1, null, 'marina.veruda@mail.hr', 44.838998, 13.842915, 124, 'Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse odio sem, pellentesque id ultrices volutpat, facilisis a nunc. Integer vehicula euismod felis, vel pulvinar justo rutrum at.', null),
	   ('Privezište "Puntica"', 2, '+94444444', 'puntica.medulin@mail.hr', 44.814478, 13.929125, 28, '-', null),
	   ('ACI Marina Pomer', 3, '+955555555', 'aci.pomer@mail.hr', 44.821714, 13.901718, 56, 'Duis in fringilla neque, at semper tellus. Vestibulum quis eros auctor, tincidunt ex eget, viverra lacus. Etiam suscipit felis felis, a congue est dapibus id. Ut commodo, ligula in consequat ultricies, nisl risus elementum nisl, sed volutpat nisi purus at metus.', null),
	   ('ACI Marina Rovinj', 4, null, 'aci.rovinj@mail.hr', 45.075538, 13.636087, 80, '-', null),
	   ('Zadar Pitter Yachting', 5, '+977777777', 'zadar.pitter@mail.hr', 44.119648, 15.229551, 124, '-', null),
	   ('ACI Marina Dubrovnik', 7, '+988888888', 'aci.dubrovnik@mail.hr', 42.671067, 18.125734, 96, 'Integer rutrum hendrerit ex, ac congue augue mollis sed. Pellentesque tempor tincidunt massa, quis porttitor orci iaculis ut. Vivamus a sagittis augue. Sed malesuada quam sed ipsum consectetur imperdiet. Proin interdum tortor non orci pellentesque, nec sollicitudin urna convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia facilisis erat sagittis convallis.', null)
go