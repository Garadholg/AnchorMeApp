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
	Latitude decimal(9,6) not null,
	Longitude decimal(9,6) not null,
	BerthsQuantity int not null,
	Picture nvarchar(max),

	CONSTRAINT FK_Harbour_City FOREIGN KEY (CityID)
		REFERENCES City(IDCity),
)
go