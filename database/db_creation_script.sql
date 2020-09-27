create database AnchorMe_DB
go
use AnchorMe_DB
go

create table LoginCredentials
(
	IDLoginCredentials int primary key identity,
	Username nvarchar(64) not null,
	Password nvarchar(max) not null
)
go