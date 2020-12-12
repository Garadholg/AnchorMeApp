-- creating the database
create database AnchorMe
go
use AnchorMe
go

-- adding the connection user
create user AMuser from login AMuser
exec sp_addrolemember N'db_owner', N'AMuser'
go

-- table generation
create table UserRole 
(
	IDUserRole int primary key identity,
	RoleName nvarchar(20) not null
)

create table UserData
(
	IDUserData int primary key identity,
	FirstName nvarchar(150) not null,
	LastName nvarchar(200) not null,
	DateOfBirth date not null,
	Email nvarchar(320) not null,
	Phone nvarchar(50),
	ProfilePicture nvarchar(max)
)

create table LoginCredentials
(
	IDLoginCredentials int primary key identity,
	UserDataID int not null,
	Username nvarchar(64) not null,
	Pwd nvarchar(64) not null,
	UserRoleID int not null,

	CONSTRAINT FK_LoginCredentials_UserData FOREIGN KEY (UserDataID)
		REFERENCES UserData(IDUserData),
	CONSTRAINT FK_LoginCredentials_UserRole FOREIGN KEY (UserRoleID)
		REFERENCES UserRole(IDUserRole),
)

create table Country
(
	IDCountry int primary key identity,
	CountryName nvarchar(300) not null
)

create table City
(
	IDCity int primary key identity,
	CityName nvarchar(150) not null,
	CountryID int not null,

	CONSTRAINT FK_City_Country FOREIGN KEY (CountryID)
		REFERENCES Country(IDCountry),
)

create table Harbour
(
	IDHarbour int primary key identity,
	HarbourName nvarchar(500) not null,
	CityID int not null,
	PhoneNumber nvarchar(50),
	Email nvarchar(256),
	Latitude decimal(9,6) not null,
	Longitude decimal(9,6) not null,
	BerthsQuantity int not null,
	Details nvarchar(max),
	Picture nvarchar(max),

	CONSTRAINT FK_Harbour_City FOREIGN KEY (CityID)
		REFERENCES City(IDCity),
)

create table ReservationStatus
(
	IDReservationStatus int primary key identity,
	ReservationStatus nvarchar(30) not null
)

create table HarbourReservation
(
	IDHarbourReservation int primary key identity,
	UserID int not null,
	HarbourID int not null,
	StartDate date not null,
	EndDate date not null,
	AdditionalNotes nvarchar(max),
	ReservationStatusID int not null default 1,

	CONSTRAINT FK_Reservation_User FOREIGN KEY (UserID)
		REFERENCES UserData(IDUserData),
	CONSTRAINT FK_Reservation_Harbour FOREIGN KEY (HarbourID)
		REFERENCES Harbour(IDHarbour),
	CONSTRAINT FK_Reservation_Status FOREIGN KEY (ReservationStatusID)
		REFERENCES ReservationStatus(IDReservationStatus),
)
go