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