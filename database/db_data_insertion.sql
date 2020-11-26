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
values ('Luèica "Delfin"', 1, 44.844893, 13.842204, 32, null),
	   ('Luka "Bunarina"', 1, 44.840066, 13.838192, 65, null),
	   ('Marina Veruda', 1, 44.838998, 13.842915, 124, null),
	   ('Privezište "Puntica"', 2, 44.814478, 13.929125, 28, null),
	   ('ACI Marina Pomer', 3, 44.821714, 13.901718, 56, null),
	   ('ACI Marina Rovinj', 4, 45.075538, 13.636087, 80, null),
	   ('Zadar Pitter Yachting', 5, 44.119648, 15.229551, 124, null),
	   ('ACI Marina Dubrovnik', 7, 42.671067, 18.125734, 96, null)
go