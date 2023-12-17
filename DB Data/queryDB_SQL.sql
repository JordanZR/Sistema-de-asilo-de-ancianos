CREATE DATABASE AsiloAncianos
USE AsiloAncianos

SELECT * FROM Usuarios
DELETE FROM Usuarios WHERE DUI = "04857841-3"

-- Creación de la tabla Usuarios
CREATE TABLE Usuarios (
    DUI VARCHAR(10) PRIMARY KEY,
    Rol VARCHAR(20), -- Puede ser 'Director', 'Doctor' o 'Paciente'
    PrimerNombre VARCHAR(50),
    PrimerApellido VARCHAR(50),
    FechaNacimiento VARCHAR(20),
    Usuario VARCHAR(50) UNIQUE,
    Contraseña VARCHAR(50),
    JVPM VARCHAR(20)
);

select * from Usuarios

-- Creación de la tabla Citas
CREATE TABLE Citas (
    CitaID INT PRIMARY KEY,
    PacienteID VARCHAR(10), -- Clave foránea del DUI en la tabla Usuarios
    JVPMCita VARCHAR(20),   -- Clave foránea del JVPM en la tabla Usuarios
    FechaCita DATE,
    Detalles TEXT,
    FOREIGN KEY (PacienteID) REFERENCES Usuarios (DUI)
);

