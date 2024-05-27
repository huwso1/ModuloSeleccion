--Insert tipo contacto
insert into TipoContacto(idTipoContacto, descTipoContacto) values('DIR', 'Direccion');
insert into TipoContacto(idTipoContacto, descTipoContacto) values('OFI', 'Direccion Oficina');
insert into TipoContacto(idTipoContacto, descTipoContacto) values('TEL', 'Telefono Fijo');
insert into TipoContacto(idTipoContacto, descTipoContacto) values('TEO', 'Telefono Oficina');
insert into TipoContacto(idTipoContacto, descTipoContacto) values('CEL', 'Celular');
insert into TipoContacto(idTipoContacto, descTipoContacto) values('LIK', 'Linkedin');
insert into TipoContacto(idTipoContacto, descTipoContacto) values('WHA', 'WathsApp');
--Insert TipoCargo
INSERT INTO TipoCargo(idTipoCargo, descTipoCargo) VALUES('1', 'Analista Cliente');
INSERT INTO TipoCargo(idTipoCargo, descTipoCargo) VALUES('2', 'Analista General');
INSERT INTO TipoCargo(idTipoCargo, descTipoCargo) VALUES('3', 'Analista Sicol�gico');
INSERT INTO TipoCargo(idTipoCargo, descTipoCargo) VALUES('4', 'Analista Conocimiento');
INSERT INTO TipoCargo(idTipoCargo, descTipoCargo) VALUES('5', 'Analista Tecnol�gico');
--Insert TipoItemPerfil
INSERT INTO TipoItemPerfil(idTipoItemPerfil, descTipoItemPerfil) VALUES('1', 'Estudios T�cnicos');
INSERT INTO TipoItemPerfil(idTipoItemPerfil, descTipoItemPerfil) VALUES('2', 'Estudios Tecnol�gico');
INSERT INTO TipoItemPerfil(idTipoItemPerfil, descTipoItemPerfil) VALUES('3', 'Estudios Pregrado');
INSERT INTO TipoItemPerfil(idTipoItemPerfil, descTipoItemPerfil) VALUES('4', 'Estudios Postgrados');
INSERT INTO TipoItemPerfil(idTipoItemPerfil, descTipoItemPerfil) VALUES('5', 'Estudios Doctorales');
INSERT INTO TipoItemPerfil(idTipoItemPerfil, descTipoItemPerfil) VALUES('6', 'Estudios No Formales');
INSERT INTO TipoItemPerfil(idTipoItemPerfil, descTipoItemPerfil) VALUES('7', 'Pr�cticas Empresariales');
INSERT INTO TipoItemPerfil(idTipoItemPerfil, descTipoItemPerfil) VALUES('8', 'Idiomas');
INSERT INTO TipoItemPerfil(idTipoItemPerfil, descTipoItemPerfil) VALUES('9', 'Voluntariado');
INSERT INTO TipoItemPerfil(idTipoItemPerfil, descTipoItemPerfil) VALUES('10', 'Empleado');
INSERT INTO TipoItemPerfil(idTipoItemPerfil, descTipoItemPerfil) VALUES('11', 'Contratista');
INSERT INTO TipoItemPerfil(idTipoItemPerfil, descTipoItemPerfil) VALUES('12', 'Publicaci�n No indexada');
INSERT INTO TipoItemPerfil(idTipoItemPerfil, descTipoItemPerfil) VALUES('13', 'Publicaci�n Indexada');
--Disciplina
INSERT INTO Disciplina(idDisciplina, descDisciplina) VALUES ('1', 'Computaci�n');
INSERT INTO Disciplina(idDisciplina, descDisciplina) VALUES ('2', 'Administraci�n');
INSERT INTO Disciplina(idDisciplina, descDisciplina) VALUES ('3', 'Qu�mica');
INSERT INTO Disciplina(idDisciplina, descDisciplina) VALUES ('4', 'Biolog�a');
INSERT INTO Disciplina(idDisciplina, descDisciplina) VALUES ('5', 'Odontolog�a');
INSERT INTO Disciplina(idDisciplina, descDisciplina) VALUES ('6', 'Medicina');
INSERT INTO Disciplina(idDisciplina, descDisciplina) VALUES ('7', 'Sociolog�a');
--Perfil
INSERT INTO PERFIL(idPerfil, desperfil,IDDISCIPLINA) VALUES ('DS', 'Directivo Superior','1');
INSERT INTO PERFIL(idPerfil, desperfil,IDDISCIPLINA) VALUES ('DM', 'Directivo Medio','1');
INSERT INTO PERFIL(idPerfil, desperfil,IDDISCIPLINA) VALUES ('DB', 'Directivo Base','1');
INSERT INTO PERFIL(idPerfil, desperfil,IDDISCIPLINA) VALUES ('PS', 'Profesional Senior','1');
INSERT INTO PERFIL(idPerfil, desperfil,IDDISCIPLINA) VALUES ('PSS', 'Profesional Semi senior','1');
INSERT INTO PERFIL(idPerfil, desperfil,IDDISCIPLINA) VALUES ('PJ', 'Profesional Junior','1');
INSERT INTO PERFIL(idPerfil, desperfil,IDDISCIPLINA) VALUES ('TE', 'Tecn�logo con Experiencia','1');
INSERT INTO PERFIL(idPerfil, desperfil,IDDISCIPLINA) VALUES ('T', 'Tecn�logo','1');
INSERT INTO PERFIL(idPerfil, desperfil,IDDISCIPLINA) VALUES ('TCE', 'T�cnico con Experiencia','1');
INSERT INTO PERFIL(idPerfil, desperfil,IDDISCIPLINA) VALUES ('TC', 'T�cnico','1');
INSERT INTO PERFIL(idPerfil, desperfil,IDDISCIPLINA) VALUES ('B', 'Bachiller','1');
--Fase
INSERT INTO Fase(idFase, desFase) VALUES ('1', 'Registrar Requerimiento');
INSERT INTO Fase(idFase, desFase) VALUES ('2', 'Asignar Perfil');
INSERT INTO Fase(idFase, desFase) VALUES ('3', 'Publicar Convocatoria');
INSERT INTO Fase(idFase, desFase) VALUES ('4', 'Mandar Invitaci�n');
INSERT INTO Fase(idFase, desFase) VALUES ('5', 'Preselecci�n');
INSERT INTO Fase(idFase, desFase) VALUES ('6', 'Realizar Prueba');
INSERT INTO Fase(idFase, desFase) VALUES ('7', 'Entrevista');
INSERT INTO Fase(idFase, desFase) VALUES ('8', 'Fase Final');
--TipoPrueba
INSERT INTO TipoPrueba(idTipoPrueba, descTipoPrueba) VALUES ('1', 'Prueba Conocimiento I');
INSERT INTO TipoPrueba(idTipoPrueba, descTipoPrueba) VALUES ('2', 'Prueba Conocimiento II');
INSERT INTO TipoPrueba(idTipoPrueba, descTipoPrueba) VALUES ('3', 'Prueba Especializada');
INSERT INTO TipoPrueba(idTipoPrueba, descTipoPrueba) VALUES ('4', 'Prueba Sicol�gica');
INSERT INTO TipoPrueba(idTipoPrueba, descTipoPrueba) VALUES ('5', 'Prueba Grupal');
INSERT INTO TipoPrueba(idTipoPrueba, descTipoPrueba) VALUES ('6', 'Prueba Tecnol�gica I');
INSERT INTO TipoPrueba(idTipoPrueba, descTipoPrueba) VALUES ('7', 'Prueba Tecnol�gica II');
INSERT INTO TipoPrueba(idTipoPrueba, descTipoPrueba) VALUES ('8', 'Prueba Tecnol�gica Especializada');
INSERT INTO TipoPrueba(idTipoPrueba, descTipoPrueba) VALUES ('9', 'Prueba Ingles');
INSERT INTO TipoPrueba(idTipoPrueba, descTipoPrueba) VALUES ('10', 'Prueba Seguridad');
--TipoPregunta
INSERT INTO TipoPregunta(idTipoPregunta, descTipoPregunta) VALUES ('ABR', 'Abierta');
INSERT INTO TipoPregunta(idTipoPregunta, descTipoPregunta) VALUES ('MUL', 'Selecci�n M�ltiple');
INSERT INTO TipoPregunta(idTipoPregunta, descTipoPregunta) VALUES ('UNI', 'Selecci�n �nica');
INSERT INTO TipoPregunta(idTipoPregunta, descTipoPregunta) VALUES ('FV', 'Falso/Verdadero');
INSERT INTO TipoPregunta(idTipoPregunta, descTipoPregunta) VALUES ('COM', 'Completar');
INSERT INTO TipoPregunta(idTipoPregunta, descTipoPregunta) VALUES ('UBI', 'Ubicar');
INSERT INTO TipoPregunta(idTipoPregunta, descTipoPregunta) VALUES ('EMP', 'Emparejar');
--FaseCargo
INSERT INTO FaseCargo(conseFaseCargo,idFase,idTipoCargo) values(1,'1','1');
INSERT INTO FaseCargo(conseFaseCargo,idFase,idTipoCargo) values(2,'2','2');
INSERT INTO FaseCargo(conseFaseCargo,idFase,idTipoCargo) values(3,'3','2');
INSERT INTO FaseCargo(conseFaseCargo,idFase,idTipoCargo) values(4,'4','2');
INSERT INTO FaseCargo(conseFaseCargo,idFase,idTipoCargo) values(5,'5','2');
INSERT INTO FaseCargo(conseFaseCargo,idFase,idTipoCargo) values(6,'8','2');
INSERT INTO FaseCargo(conseFaseCargo,idFase,idTipoCargo) values(7,'6','4');
INSERT INTO FaseCargo(conseFaseCargo,idFase,idTipoCargo) values(8,'6','5');
INSERT INTO FaseCargo(conseFaseCargo,idFase,idTipoCargo) values(9,'6','3');
INSERT INTO FaseCargo(conseFaseCargo,idFase,idTipoCargo) values(10,'7','3');
--Prueba
INSERT INTO Prueba(idPrueba,descPrueba,PruebaActiva,idFase,idTipoPrueba,idDisciplina) values('1','Prueba conocimiento II Gestion de proyectos','F','6','2','2');
INSERT INTO Prueba(idPrueba,descPrueba,PruebaActiva,idFase,idTipoPrueba,idDisciplina) values('2','Prueba conocimiento I Bases de datos','F','6','1','1');
INSERT INTO Prueba(idPrueba,descPrueba,PruebaActiva,idFase,idTipoPrueba,idDisciplina) values('3','Prueba Tecnologica II Excel Analista','F','6','7','1');
--PerfilFase
INSERT INTO PerfilFase(idPerfil,idFase) values('DS','1');
INSERT INTO PerfilFase(idPerfil,idFase) values('DS','2');
INSERT INTO PerfilFase(idPerfil,idFase) values('DS','3');
INSERT INTO PerfilFase(idPerfil,idFase) values('DS','4');
INSERT INTO PerfilFase(idPerfil,idFase) values('DS','5');
INSERT INTO PerfilFase(idPerfil,idFase) values('DS','6');
INSERT INTO PerfilFase(idPerfil,idFase) values('DS','7');
INSERT INTO PerfilFase(idPerfil,idFase) values('DS','8');
INSERT INTO PerfilFase(idPerfil,idFase) values('PS','1');
INSERT INTO PerfilFase(idPerfil,idFase) values('PS','2');
INSERT INTO PerfilFase(idPerfil,idFase) values('PS','3');
INSERT INTO PerfilFase(idPerfil,idFase) values('PS','4');
INSERT INTO PerfilFase(idPerfil,idFase) values('PS','5');
INSERT INTO PerfilFase(idPerfil,idFase) values('PS','6');
INSERT INTO PerfilFase(idPerfil,idFase) values('PS','7');
INSERT INTO PerfilFase(idPerfil,idFase) values('PS','8');
INSERT INTO PerfilFase(idPerfil,idFase) values('TE','1');
INSERT INTO PerfilFase(idPerfil,idFase) values('TE','2');
INSERT INTO PerfilFase(idPerfil,idFase) values('TE','3');
INSERT INTO PerfilFase(idPerfil,idFase) values('TE','4');
INSERT INTO PerfilFase(idPerfil,idFase) values('TE','5');
INSERT INTO PerfilFase(idPerfil,idFase) values('TE','6');
INSERT INTO PerfilFase(idPerfil,idFase) values('TE','7');
INSERT INTO PerfilFase(idPerfil,idFase) values('TE','8');
INSERT INTO PerfilFase(idPerfil,idFase) values('TC','1');
INSERT INTO PerfilFase(idPerfil,idFase) values('TC','2');
INSERT INTO PerfilFase(idPerfil,idFase) values('TC','3');
INSERT INTO PerfilFase(idPerfil,idFase) values('TC','4');
INSERT INTO PerfilFase(idPerfil,idFase) values('TC','5');
INSERT INTO PerfilFase(idPerfil,idFase) values('TC','6');
INSERT INTO PerfilFase(idPerfil,idFase) values('TC','7');
INSERT INTO PerfilFase(idPerfil,idFase) values('TC','8');
--Pregunta
INSERT INTO Pregunta(consePregunta,descPregunta,idPrueba,idTipoPregunta) values(1,'Prueba Conocimiento I Base de Datos Pregunta 1 Tipo Pregunta Abierta','2','ABR');
INSERT INTO Pregunta(consePregunta,descPregunta,idPrueba,idTipoPregunta) values(2,'Prueba Conocimiento I Base de Datos Pregunta 2 Tipo Pregunta F/V','2','FV');
INSERT INTO Pregunta(consePregunta,descPregunta,idPrueba,idTipoPregunta) values(3,'Prueba Conocimeinto I Base de Datos Pregunta 3 Tipo Pregunta Seleccion multiple','2','UNI');
--Respuesta
INSERT INTO Respuesta(consecRespuesta,respuesta,consePregunta,idPrueba) values(1,'Respuesta 1',1,'2');
INSERT INTO Respuesta(consecRespuesta,respuesta,consePregunta,idPrueba) values(2,'F',2,'2');
INSERT INTO Respuesta(consecRespuesta,respuesta,consePregunta,idPrueba) values(3,'UNICA 3',3,'2');
--ItemPerfil
INSERT INTO ItemPerfil(idItem,idTipoItemPerfil,idPerfil,descitem) values(1,'3','DS','PRUEBAS');
INSERT INTO ItemPerfil(idItem,idTipoItemPerfil,idPerfil,descitem) values(2,'4','DS','PRUEBAS');
INSERT INTO ItemPerfil(idItem,idTipoItemPerfil,idPerfil,descitem) values(3,'8','DS','PRUEBAS');
INSERT INTO ItemPerfil(idItem,idTipoItemPerfil,idPerfil,descitem) values(4,'10','DS','PRUEBAS');
INSERT INTO ItemPerfil(idItem,idTipoItemPerfil,idPerfil,descitem) values(5,'11','DS','PRUEBAS');
INSERT INTO ItemPerfil(idItem,idTipoItemPerfil,idPerfil,descitem) values(6,'3','PS','PRUEBAS');
INSERT INTO ItemPerfil(idItem,idTipoItemPerfil,idPerfil,descitem) values(7,'4','PS','PRUEBAS');
INSERT INTO ItemPerfil(idItem,idTipoItemPerfil,idPerfil,descitem) values(8,'8','PS','PRUEBAS');
INSERT INTO ItemPerfil(idItem,idTipoItemPerfil,idPerfil,descitem) values(9,'10','PS','PRUEBAS');
INSERT INTO ItemPerfil(idItem,idTipoItemPerfil,idPerfil,descitem) values(10,'11','PS','PRUEBAS');
INSERT INTO ItemPerfil(idItem,idTipoItemPerfil,idPerfil,descitem) values(11,'6','PS','PRUEBAS');
--Insertar 10 Empleados con cargos: Analista Cliente,Analista General,Analista Sicologico,Analista Conocimiento, y Analista Tecnologico(2 de cada cargo)
INSERT INTO Empleado(codEmpleado, nomEmpleado, apellEmpleado, fechaNac, FechaIngre, correo) VALUES ('00002', 'Mar�a', 'Gonz�lez', TO_DATE('1985-09-15', 'YYYY-MM-DD'), TO_DATE('2022-03-10', 'YYYY-MM-DD'), 'maria.gonzalez@example.com');
INSERT INTO Empleado(codEmpleado, nomEmpleado, apellEmpleado, fechaNac, FechaIngre, correo) VALUES ('00003', 'Carlos', 'Rodr�guez', TO_DATE('1990-07-20', 'YYYY-MM-DD'), TO_DATE('2023-01-05', 'YYYY-MM-DD'), 'carlos.rodriguez@example.com');
INSERT INTO Empleado(codEmpleado, nomEmpleado, apellEmpleado, fechaNac, FechaIngre, correo) VALUES ('00004', 'Ana', 'L�pez', TO_DATE('1988-03-12', 'YYYY-MM-DD'), TO_DATE('2021-11-28', 'YYYY-MM-DD'), 'ana.lopez@example.com');
INSERT INTO Empleado(codEmpleado, nomEmpleado, apellEmpleado, fechaNac, FechaIngre, correo) VALUES ('00005', 'Pedro', 'Mart�nez', TO_DATE('1995-06-08', 'YYYY-MM-DD'), TO_DATE('2024-02-15', 'YYYY-MM-DD'), 'pedro.martinez@example.com');
INSERT INTO Empleado(codEmpleado, nomEmpleado, apellEmpleado, fechaNac, FechaIngre, correo) VALUES ('00006', 'Laura', 'Fern�ndez', TO_DATE('1983-11-30', 'YYYY-MM-DD'), TO_DATE('2020-09-22', 'YYYY-MM-DD'), 'laura.fernandez@example.com');
INSERT INTO Empleado(codEmpleado, nomEmpleado, apellEmpleado, fechaNac, FechaIngre, correo) VALUES ('00007', 'Javier', 'G�mez', TO_DATE('1992-04-18', 'YYYY-MM-DD'), TO_DATE('2025-05-10', 'YYYY-MM-DD'), 'javier.gomez@example.com');
INSERT INTO Empleado(codEmpleado, nomEmpleado, apellEmpleado, fechaNac, FechaIngre, correo) VALUES ('00008', 'Sof�a', 'Hern�ndez', TO_DATE('1987-08-25', 'YYYY-MM-DD'), TO_DATE('2023-12-03', 'YYYY-MM-DD'), 'thecakeisalie@example.com');
INSERT INTO Empleado(codEmpleado, nomEmpleado, apellEmpleado, fechaNac, FechaIngre, correo) VALUES ('00009', 'Diego', 'Ram�rez', TO_DATE('1998-02-05', 'YYYY-MM-DD'), TO_DATE('2022-07-18', 'YYYY-MM-DD'), 'diego.ramirez@example.com');
INSERT INTO Empleado(codEmpleado, nomEmpleado, apellEmpleado, fechaNac, FechaIngre, correo) VALUES ('00010', 'Valentina', 'P�rez', TO_DATE('1993-12-01', 'YYYY-MM-DD'), TO_DATE('2021-04-05', 'YYYY-MM-DD'), 'valentina.perez@example.com');
INSERT INTO Empleado(codEmpleado, nomEmpleado, apellEmpleado, fechaNac, FechaIngre, correo) VALUES ('00011', 'Andr�s', 'Torres', TO_DATE('1989-10-10', 'YYYY-MM-DD'), TO_DATE('2024-08-20', 'YYYY-MM-DD'), 'andres.torres@example.com');
--Insercion de los empleados en la tabla cargo
INSERT INTO CARGO(ConseCargo,codEmpleado,idTipoCargo,FechainicioCargo,descCargo) values(1,'00002','1',TO_DATE('2024-08-20', 'YYYY-MM-DD'),'Analista Cliente 1');
INSERT INTO CARGO(ConseCargo,codEmpleado,idTipoCargo,FechainicioCargo,descCargo) values(2,'00003','1',TO_DATE('2024-08-20', 'YYYY-MM-DD'),'Analista Cliente 2');
INSERT INTO CARGO(ConseCargo,codEmpleado,idTipoCargo,FechainicioCargo,descCargo) values(3,'00004','2',TO_DATE('2024-08-20', 'YYYY-MM-DD'),'Analista General 1');
INSERT INTO CARGO(ConseCargo,codEmpleado,idTipoCargo,FechainicioCargo,descCargo) values(4,'00005','2',TO_DATE('2024-08-20', 'YYYY-MM-DD'),'Analista General 2');
INSERT INTO CARGO(ConseCargo,codEmpleado,idTipoCargo,FechainicioCargo,descCargo) values(5,'00006','3',TO_DATE('2024-08-20', 'YYYY-MM-DD'),'Analista Sicologico 1');
INSERT INTO CARGO(ConseCargo,codEmpleado,idTipoCargo,FechainicioCargo,descCargo) values(6,'00007','3',TO_DATE('2024-08-20', 'YYYY-MM-DD'),'Analista Sicologico 2');
INSERT INTO CARGO(ConseCargo,codEmpleado,idTipoCargo,FechainicioCargo,descCargo) values(7,'00008','4',TO_DATE('2024-08-20', 'YYYY-MM-DD'),'Analista Conocimiento 1');
INSERT INTO CARGO(ConseCargo,codEmpleado,idTipoCargo,FechainicioCargo,descCargo) values(8,'00009','4',TO_DATE('2024-08-20', 'YYYY-MM-DD'),'Analista Conocimiento 2');
INSERT INTO CARGO(ConseCargo,codEmpleado,idTipoCargo,FechainicioCargo,descCargo) values(9,'00010','5',TO_DATE('2024-08-20', 'YYYY-MM-DD'),'Analista Tecnologico 1');
INSERT INTO CARGO(ConseCargo,codEmpleado,idTipoCargo,FechainicioCargo,descCargo) values(10,'00011','5',TO_DATE('2024-08-20', 'YYYY-MM-DD'),'Analista Tecnologico 2');
--Incluir 3 Requerimientos con disciplina computacion y con perfil profesional senior y directivo superior
    --Se crea el perfil de directivo superior con computacion
INSERT INTO PERFIL(idPerfil, desperfil,idDisciplina) VALUES ('DSC', 'Directivo Superior Computacion','1');
    --Se relaciona el perfil con las fases correspondientes
    INSERT INTO PerfilFase(idPerfil,idFase) values('DSC','1');
    INSERT INTO PerfilFase(idPerfil,idFase) values('DSC','2');
    INSERT INTO PerfilFase(idPerfil,idFase) values('DSC','3');
    INSERT INTO PerfilFase(idPerfil,idFase) values('DSC','4');
    INSERT INTO PerfilFase(idPerfil,idFase) values('DSC','5');
    INSERT INTO PerfilFase(idPerfil,idFase) values('DSC','6');
    INSERT INTO PerfilFase(idPerfil,idFase) values('DSC','7');
    INSERT INTO PerfilFase(idPerfil,idFase) values('DSC','8');
    --Se crea el requerimiento
    INSERT INTO REQUERIMIENTO(consecReque,fechaReque,salarioMax,desFuncion,desCarreras,nVacantes,codEmpleado1,codEmpleado2)
    values(1,TO_DATE('2024-05-12', 'YYYY-MM-DD'),1500,'Directivo superior computacion','PRUEBAS',3,'00002','00004');
   INSERT INTO REQUERIMIENTO(consecReque,fechaReque,salarioMax,desFuncion,desCarreras,nVacantes,codEmpleado1,codEmpleado2)   
    values(2,TO_DATE('2024-05-12', 'YYYY-MM-DD'),1500,'Directivo superior computacion','PRUEBAS',3,'00002','00004');
     INSERT INTO REQUERIMIENTO(consecReque,fechaReque,salarioMax,desFuncion,desCarreras,nvacantes,codEmpleado1,codEmpleado2) 
    values(3,TO_DATE('2024-05-12', 'YYYY-MM-DD'),1500,'Directivo superior computacion','PRUEBAS',3,'00002','00004');
    INSERT INTO REQUERIMIENTO(consecReque,fechaReque,salarioMax,desFuncion,desCarreras,nvacantes,codEmpleado1,codEmpleado2)  
    values(4,TO_DATE('2024-05-12', 'YYYY-MM-DD'),1500,'Profesional senior computacion','PRUEBAS',3,'00002','00004');
    INSERT INTO REQUERIMIENTO(consecReque,fechaReque,salarioMax,desFuncion,desCarreras,nvacantes,codEmpleado1,codEmpleado2)  
    values(5,TO_DATE('2024-05-12', 'YYYY-MM-DD'),1500,'Profesional senior computacion','PRUEBAS',3,'00002','00004');
    INSERT INTO REQUERIMIENTO(consecReque,fechaReque,salarioMax,desFuncion,desCarreras,nVacantes,codEmpleado1,codEmpleado2)  
    values(6,TO_DATE('2024-05-12', 'YYYY-MM-DD'),1500,'Profesional senior computacion','PRUEBAS',3,'00002','00004');
    --SE RELACIONA  EL PROCESO DEL REQUERIMIENTO CON LA FASE CORRESPONDIENTE
    INSERT INTO PROCESOREQUERIMIENTO(ConsProceso,consecReque,idPerfil,idFase,codEmpleado) VALUES(1,1,'DS','1','00004');
    INSERT INTO PROCESOREQUMIENTO(ConsProceso,consecReque,idPerfil,idFase,codEmpleado) VALUES(2,1,'DSC','2','00002');
    INSERT INTO PROCESOREQUMIENTO(ConsProceso,consecReque,idPerfil,idFase,codEmpleado) VALUES(3,1,'DSC','3','00002');
    INSERT INTO PROCESOREQUMIENTO(ConsProceso,consecReque,idPerfil,idFase,codEmpleado) VALUES(4,1,'DSC','4','00002');
    INSERT INTO PROCESOREQUMIENTO(ConsProceso,consecReque,idPerfil,idFase,codEmpleado) VALUES(5,1,'DSC','5','00002');
    INSERT INTO PROCESOREQUMIENTO(ConsProceso,consecReque,idPerfil,idFase,codEmpleado) VALUES(6,1,'DSC','6','00002');
    INSERT INTO PROCESOREQUMIENTO(ConsProceso,consecReque,idPerfil,idFase,codEmpleado) VALUES(7,1,'DSC','7','00002');
    INSERT INTO PROCESOREQUMIENTO(ConsProceso,consecReque,idPerfil,idFase,codEmpleado) VALUES(8,1,'DSC','8','00002');
    INSERT INTO PROCESOREQUMIENTO(ConsProceso,consecReque,idPerfil,idFase,codEmpleado) VALUES(9,2,'DSC','1','00002');
    INSERT INTO PROCESOREQUMIENTO(ConsProceso, consecReque, idPerfil, idFase, codEmpleado) VALUES (10, 2, 'DSC', '2', '00002');
    INSERT INTO PROCESOREQUMIENTO(ConsProceso, consecReque, idPerfil, idFase, codEmpleado) VALUES (11, 2, 'DSC', '3', '00002');
    INSERT INTO PROCESOREQUMIENTO(ConsProceso, consecReque, idPerfil, idFase, codEmpleado) VALUES (12, 2, 'DSC', '4', '00002');
    INSERT INTO PROCESOREQUMIENTO(ConsProceso, consecReque, idPerfil, idFase, codEmpleado) VALUES (13, 2, 'DSC', '5', '00002');
    INSERT INTO PROCESOREQUMIENTO(ConsProceso, consecReque, idPerfil, idFase, codEmpleado) VALUES (14, 2, 'DSC', '6', '00002');
    INSERT INTO PROCESOREQUMIENTO(ConsProceso, consecReque, idPerfil, idFase, codEmpleado) VALUES (15, 2, 'DSC', '7', '00002');
    INSERT INTO PROCESOREQUMIENTO(ConsProceso, consecReque, idPerfil, idFase, codEmpleado) VALUES (16, 2, 'DSC', '8', '00002');
    INSERT INTO PROCESOREQUMIENTO(ConsProceso, consecReque, idPerfil, idFase, codEmpleado) VALUES (17, 3, 'DSC', '1', '00002');
    INSERT INTO PROCESOREQUMIENTO(ConsProceso, consecReque, idPerfil, idFase, codEmpleado) VALUES (18, 3, 'DSC', '2', '00002');
    INSERT INTO PROCESOREQUMIENTO(ConsProceso, consecReque, idPerfil, idFase, codEmpleado) VALUES (19, 3, 'DSC', '3', '00002');
    INSERT INTO PROCESOREQUMIENTO(ConsProceso, consecReque, idPerfil, idFase, codEmpleado) VALUES (20, 3, 'DSC', '4', '00002');
    INSERT INTO PROCESOREQUMIENTO(ConsProceso, consecReque, idPerfil, idFase, codEmpleado) VALUES (21, 3, 'DSC', '5', '00002');
    INSERT INTO PROCESOREQUMIENTO(ConsProceso, consecReque, idPerfil, idFase, codEmpleado) VALUES (22, 3, 'DSC', '6', '00002');
    INSERT INTO PROCESOREQUMIENTO(ConsProceso, consecReque, idPerfil, idFase, codEmpleado) VALUES (23, 3, 'DSC', '7', '00002');
    INSERT INTO PROCESOREQUMIENTO(ConsProceso, consecReque, idPerfil, idFase, codEmpleado) VALUES (24, 3, 'DSC', '8', '00002');
    --Se crea el perfil de Profesional senior de computacion
    INSERT INTO PERFIL(idPerfil, desperfil,idDisciplina) VALUES ('PSC', 'Profesional senior de Computacion','1');
    --Se relaciona el perfil con las fases correspondientes
    INSERT INTO PerfilFase(idPerfil,idFase) values('PSC','1');
    INSERT INTO PerfilFase(idPerfil,idFase) values('PSC','2');
    INSERT INTO PerfilFase(idPerfil,idFase) values('PSC','3');
    INSERT INTO PerfilFase(idPerfil,idFase) values('PSC','4');
    INSERT INTO PerfilFase(idPerfil,idFase) values('PSC','5');
    INSERT INTO PerfilFase(idPerfil,idFase) values('PSC','6');
    INSERT INTO PerfilFase(idPerfil,idFase) values('PSC','7');
    INSERT INTO PerfilFase(idPerfil,idFase) values('PSC','8');
        --SE RELACIONA  EL PROCESO DEL REQUERIMIENTO CON LA FASE CORRESPONDIENTE
    INSERT INTO PROCESOREQUERIMIENTO(ConsProceso,consecReque,idPerfil,idFase,codEmpleado) VALUES(25,4,'PSC','1','00002');
    INSERT INTO PROCESOREQUERIMIENTO(ConsProceso,consecReque,idPerfil,idFase,codEmpleado) VALUES(26,4,'PSC','2','00002');
    INSERT INTO PROCESOREQUERIMIENTO(ConsProceso,consecReque,idPerfil,idFase,codEmpleado) VALUES(27,4,'PSC','3','00002');
   INSERT INTO PROCESOREQUERIMIENTO(ConsProceso,consecReque,idPerfil,idFase,codEmpleado) VALUES(28,4,'PSC','4','00002');
   INSERT INTO PROCESOREQUERIMIENTO(ConsProceso,consecReque,idPerfil,idFase,codEmpleado) VALUES(29,4,'PSC','5','00002');
   INSERT INTO PROCESOREQUERIMIENTO(ConsProceso,consecReque,idPerfil,idFase,codEmpleado) VALUES(30,4,'PSC','6','00002');
    INSERT INTO PROCESOREQUERIMIENTO(ConsProceso,consecReque,idPerfil,idFase,codEmpleado) VALUES(31,4,'PSC','7','00002');
    INSERT INTO PROCESOREQUERIMIENTO(ConsProceso,consecReque,idPerfil,idFase,codEmpleado) VALUES(32,4,'PSC','8','00002');
    INSERT INTO PROCESOREQUERIMIENTO(ConsProceso,consecReque,idPerfil,idFase,codEmpleado) VALUES(33,5,'PSC','1','00002');
    INSERT INTO PROCESOREQUERIMIENTO(ConsProceso,consecReque,idPerfil,idFase,codEmpleado) VALUES(34,5,'PSC','2','00002');
    INSERT INTO PROCESOREQUERIMIENTO(ConsProceso,consecReque,idPerfil,idFase,codEmpleado) VALUES(35,5,'PSC','3','00002');
    INSERT INTO PROCESOREQUERIMIENTO(ConsProceso,consecReque,idPerfil,idFase,codEmpleado) VALUES(36,5,'PSC','4','00002');
    INSERT INTO PROCESOREQUERIMIENTO(ConsProceso,consecReque,idPerfil,idFase,codEmpleado) VALUES(37,5,'PSC','5','00002');
    INSERT INTO PROCESOREQUERIMIENTO(ConsProceso,consecReque,idPerfil,idFase,codEmpleado) VALUES(38,5,'PSC','6','00002');
    INSERT INTO PROCESOREQUERIMIENTO(ConsProceso,consecReque,idPerfil,idFase,codEmpleado) VALUES(39,5,'PSC','7','00002');
    INSERT INTO PROCESOREQUERIMIENTO(ConsProceso,consecReque,idPerfil,idFase,codEmpleado) VALUES(40,5,'PSC','8','00002');
    INSERT INTO PROCESOREQUERIMIENTO(ConsProceso,consecReque,idPerfil,idFase,codEmpleado) VALUES(41,6,'PSC','1','00002');
    INSERT INTO PROCESOREQUERIMIENTO(ConsProceso,consecReque,idPerfil,idFase,codEmpleado) VALUES(42,6,'PSC','2','00002');
    INSERT INTO PROCESOREQUERIMIENTO(ConsProceso,consecReque,idPerfil,idFase,codEmpleado) VALUES(43,6,'PSC','3','00002');
    INSERT INTO PROCESOREQUERIMIENTO(ConsProceso,consecReque,idPerfil,idFase,codEmpleado) VALUES(44,6,'PSC','4','00002');
    INSERT INTO PROCESOREQUERIMIENTO(ConsProceso,consecReque,idPerfil,idFase,codEmpleado) VALUES(45,6,'PSC','5','00002');
    INSERT INTO PROCESOREQUERIMIENTO(ConsProceso,consecReque,idPerfil,idFase,codEmpleado) VALUES(46,6,'PSC','6','00002');
    INSERT INTO PROCESOREQUERIMIENTO(ConsProceso,consecReque,idPerfil,idFase,codEmpleado) VALUES(47,6,'PSC','7','00002');
    INSERT INTO PROCESOREQUERIMIENTO(ConsProceso,consecReque,idPerfil,idFase,codEmpleado) VALUES(48,6,'PSC','8','00002');
    --Insercion de tipo docs
    insert into tipodoc(idtipodoc,desctipodoc) values('CC','Cedula de ciudadania');
	--Insercion de una institucion
	INSERT INTO INSTITUCION(codInstitucion,nominstitucion) values(1,'Universidad de la Rioja');
	--Insertar 10 candidatos, 6 con carreras relacionadas con computaci�n y estudios postgrado y 4 con otros
	
	 INSERT INTO CANDIDATO(usuario,nombre,apellido,fechaNac,nDoc,idTipodoc,IDDISCIPLINA) values('germi12','german','garmendia',TO_DATE('1985-09-15', 'YYYY-MM-DD'),'2159120112','CC','1');
	INSERT INTO HV(conseHV,fechainiAct,fechaFinAct,descactividad,funcionactividad,idtipoitemperfil,codinstitucion,usuario) values(1,TO_DATE('2014-09-12', 'YYYY-MM-DD'),TO_DATE('2010-09-12', 'YYYY-MM-DD'),'Postgrado en ingenieria de software','Estudiante','4',1,'germi12');
	INSERT INTO CANDIDATO(usuario,nombre,apellido,fechaNac,nDoc,idTipodoc,IDDISCIPLINA)
	VALUES ('user1', 'Juan', 'Perez', TO_DATE('1990-05-20', 'YYYY-MM-DD'), '1234567890', 'CC','1');
	INSERT INTO HV(conseHV,fechainiAct,fechaFinAct,descactividad,funcionactividad,idtipoitemperfil,codinstitucion,usuario)
	VALUES (2, TO_DATE('2015-01-10', 'YYYY-MM-DD'), TO_DATE('2012-12-31', 'YYYY-MM-DD'), 'Ingenier�a de software', 'Desarrollador', '4', 1, 'user1');
	INSERT INTO CANDIDATO(usuario,nombre,apellido,fechaNac,nDoc,idTipodoc,IDDISCIPLINA)
	VALUES ('user2', 'Maria', 'Gomez', TO_DATE('1988-03-12', 'YYYY-MM-DD'), '9876543210', 'CC','1');
	INSERT INTO HV(conseHV,fechainiAct,fechaFinAct,descactividad,funcionactividad,idtipoitemperfil,codinstitucion,usuario)
	VALUES (3, TO_DATE('2016-02-20', 'YYYY-MM-DD'), TO_DATE('2013-11-15', 'YYYY-MM-DD'), 'Desarrollo web', 'Front-end', '4', 1, 'user2');
	INSERT INTO CANDIDATO(usuario,nombre,apellido,fechaNac,nDoc,idTipodoc,IDDISCIPLINA)
	VALUES ('user3', 'Andrea', 'Lopez', TO_DATE('1992-08-05', 'YYYY-MM-DD'), '5432109876', 'CC','1');
	INSERT INTO HV(conseHV,fechainiAct,fechaFinAct,descactividad,funcionactividad,idtipoitemperfil,codinstitucion,usuario)
	VALUES (4, TO_DATE('2017-03-18', 'YYYY-MM-DD'), TO_DATE('2014-09-30', 'YYYY-MM-DD'), 'Data Science', 'Analista', '4', 1, 'user3');
	 INSERT INTO CANDIDATO(usuario,nombre,apellido,fechaNac,nDoc,idTipodoc,IDDISCIPLINA)
	VALUES ('user4', 'Carlos', 'Rodriguez', TO_DATE('1987-11-25', 'YYYY-MM-DD'), '7654321098', 'CC','1');
	INSERT INTO HV(conseHV,fechainiAct,fechaFinAct,descactividad,funcionactividad,idtipoitemperfil,codinstitucion,usuario)
	VALUES (5, TO_DATE('2018-06-10', 'YYYY-MM-DD'), TO_DATE('2015-12-20', 'YYYY-MM-DD'), 'Machine Learning', 'Investigador', '4', 1, 'user4');
	INSERT INTO CANDIDATO(usuario,nombre,apellido,fechaNac,nDoc,idTipodoc,IDDISCIPLINA)
	VALUES ('user5', 'Laura', 'Martinez', TO_DATE('1993-04-18', 'YYYY-MM-DD'), '9876543210', 'CC','1');
	INSERT INTO HV(conseHV,fechainiAct,fechaFinAct,descactividad,funcionactividad,idtipoitemperfil,codinstitucion,usuario)
	VALUES (6, TO_DATE('2019-08-05', 'YYYY-MM-DD'), TO_DATE('2016-12-15', 'YYYY-MM-DD'), 'Desarrollo m�vil', 'Android', '4', 1, 'user5');
	INSERT INTO CANDIDATO(usuario,nombre,apellido,fechaNac,nDoc,idTipodoc,IDDISCIPLINA)
	VALUES ('user6', 'Pedro', 'Ramirez', TO_DATE('1989-11-02', 'YYYY-MM-DD'), '5432109876', 'CC','1');
	INSERT INTO HV(conseHV,fechainiAct,fechaFinAct,descactividad,funcionactividad,idtipoitemperfil,codinstitucion,usuario)
	VALUES (7, TO_DATE('2020-03-20', 'YYYY-MM-DD'), TO_DATE('2017-09-10', 'YYYY-MM-DD'), 'Base de datos', 'DBA', '4', 1, 'user6');
	INSERT INTO CANDIDATO(usuario,nombre,apellido,fechaNac,nDoc,idTipodoc,IDDISCIPLINA)
	VALUES ('user7', 'Ana', 'Garcia', TO_DATE('1991-07-30', 'YYYY-MM-DD'), '7654321098', 'CC','1');
	INSERT INTO HV(conseHV,fechainiAct,fechaFinAct,descactividad,funcionactividad,idtipoitemperfil,codinstitucion,usuario)
	VALUES (8, TO_DATE('2021-01-15', 'YYYY-MM-DD'), TO_DATE('2018-06-25', 'YYYY-MM-DD'), 'Seguridad inform�tica', 'Analista', '4', 1, 'user7');
	INSERT INTO CANDIDATO(usuario,nombre,apellido,fechaNac,nDoc,idTipodoc,IDDISCIPLINA)
	VALUES ('user8', 'Diego', 'Lopez', TO_DATE('1994-03-08', 'YYYY-MM-DD'), '1234567890', 'CC','1');
	INSERT INTO HV(conseHV,fechainiAct,fechaFinAct,descactividad,funcionactividad,idtipoitemperfil,codinstitucion,usuario)
	VALUES (9, TO_DATE('2022-05-10', 'YYYY-MM-DD'), TO_DATE('2019-11-30', 'YYYY-MM-DD'), 'Cloud Computing', 'Arquitecto', '4', 1, 'user8');
	INSERT INTO CANDIDATO(usuario,nombre,apellido,fechaNac,nDoc,idTipodoc,IDDISCIPLINA)
	VALUES ('user9', 'Sofia', 'Fernandez', TO_DATE('1995-09-22', 'YYYY-MM-DD'), '9876543210', 'CC','1');
	INSERT INTO HV(conseHV,fechainiAct,fechaFinAct,descactividad,funcionactividad,idtipoitemperfil,codinstitucion,usuario)
	VALUES (10, TO_DATE('2023-02-28', 'YYYY-MM-DD'), TO_DATE('2020-07-15', 'YYYY-MM-DD'), 'Inteligencia artificial', 'Investigador', '4', 1, 'user9');


    


--RESPUESTAS CORRECTAS
INSERT INTO PREGUNTACANDIDATO(idPrueba, consePregunta, consePruebaCandi) VALUES (2, 1, 11);
INSERT INTO PREGUNTACANDIDATO(idPrueba, consePregunta, consePruebaCandi) VALUES (2, 2, 11);
INSERT INTO PREGUNTACANDIDATO(idPrueba, consePregunta, consePruebaCandi) VALUES (2, 3, 11);

INSERT INTO RESPUESTACANDIDATO(consecResCandi, idPrueba, consePregunta, consePruebaCandi, resCandi)
        VALUES(1, 2 , 1, 11, 'Respuesta 1');
INSERT INTO RESPUESTACANDIDATO(consecResCandi, idPrueba, consePregunta, consePruebaCandi, resCandi)
        VALUES(2, 2 , 2, 11, 'F');
INSERT INTO RESPUESTACANDIDATO(consecResCandi, idPrueba, consePregunta, consePruebaCandi, resCandi)
        VALUES(3, 2 , 3, 11, 'UNICA 3');



--2 REPSUESTAS CORRECTAS
INSERT INTO PREGUNTACANDIDATO(idPrueba, consePregunta, consePruebaCandi) VALUES (2, 1, 31);
INSERT INTO PREGUNTACANDIDATO(idPrueba, consePregunta, consePruebaCandi) VALUES (2, 2, 31);
INSERT INTO PREGUNTACANDIDATO(idPrueba, consePregunta, consePruebaCandi) VALUES (2, 3, 31);

INSERT INTO RESPUESTACANDIDATO(consecResCandi, idPrueba, consePregunta, consePruebaCandi, resCandi)
        VALUES(7, 2 , 1, 31, 'Respuesta 1');
INSERT INTO RESPUESTACANDIDATO(consecResCandi, idPrueba, consePregunta, consePruebaCandi, resCandi)
        VALUES(8, 2 , 2, 31, 'F');
INSERT INTO RESPUESTACANDIDATO(consecResCandi, idPrueba, consePregunta, consePruebaCandi, resCandi)
        VALUES(9, 2 , 3, 31, 'UNICA 3 MAL');



--1 REPSUESTA CORRECTA
INSERT INTO PREGUNTACANDIDATO(idPrueba, consePregunta, consePruebaCandi) VALUES (2, 1, 32);
INSERT INTO PREGUNTACANDIDATO(idPrueba, consePregunta, consePruebaCandi) VALUES (2, 2, 32);
INSERT INTO PREGUNTACANDIDATO(idPrueba, consePregunta, consePruebaCandi) VALUES (2, 3, 32);

INSERT INTO RESPUESTACANDIDATO(consecResCandi, idPrueba, consePregunta, consePruebaCandi, resCandi)
        VALUES(10, 2 , 1, 32, 'Respuesta 1 MAL');
INSERT INTO RESPUESTACANDIDATO(consecResCandi, idPrueba, consePregunta, consePruebaCandi, resCandi)
        VALUES(11, 2 , 2, 32, 'F');
INSERT INTO RESPUESTACANDIDATO(consecResCandi, idPrueba, consePregunta, consePruebaCandi, resCandi)
        VALUES(12, 2 , 3, 32, 'UNICA 3 MAL');
