
-- Creación de la tabla Usuarios
CREATE TABLE Usuarios (
    DUI VARCHAR(10) PRIMARY KEY,
    Rol VARCHAR(20), -- Puede ser 'Director', 'Doctor' o 'Paciente'
    PrimerNombre VARCHAR(50),
    PrimerApellido VARCHAR(50),
    FechaNacimiento DATE,
    Usuario VARCHAR(50),
    Contraseña VARCHAR(50),
    JVPM VARCHAR(20)
);

-- Creación de la tabla Citas
CREATE TABLE Citas (
    CitaID INT PRIMARY KEY,
    PacienteID VARCHAR(10), -- Clave foránea del DUI en la tabla Usuarios
    JVPMCita VARCHAR(20),   -- Clave foránea del JVPM en la tabla Usuarios
    FechaCita DATE,
    Detalles TEXT,
    FOREIGN KEY (PacienteID) REFERENCES Usuarios (DUI)
);