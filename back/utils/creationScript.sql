/*==============================================================*/
/* DBMS name:      ORACLE Version 10g                           */
/* Created on:     24/05/2024 11:31:12 a. m.                    */
/*==============================================================*/


alter table CANDIDATO
   drop constraint FK_CANDIDAT_RELATIONS_DISCIPLI;

alter table CANDIDATO
   drop constraint FK_CANDIDAT_TIPODOCCA_TIPODOC;

alter table CARGO
   drop constraint FK_CARGO_EMPLEADOC_EMPLEADO;

alter table CARGO
   drop constraint FK_CARGO_TIPOCARGO_TIPOCARG;

alter table CONTACTOCANDIDATO
   drop constraint FK_CONTACTO_CONTACTCO_CANDIDAT;

alter table CONTACTOCANDIDATO
   drop constraint FK_CONTACTO_TYPOCONTC_TIPOCONT;

alter table CONTACTOCLIENTE
   drop constraint FK_CONTACTO_CLIENTACO_CLIENTE;

alter table CONTACTOCLIENTE
   drop constraint FK_CONTACTO_CONTACTOT_TIPOCONT;

alter table CONTACTOCLIENTE
   drop constraint FK_CONTACTO_TIPOCARGO_TIPOCARG;

alter table DETALLEFACTURA
   drop constraint FK_DETALLEF_FACTURADE_FACTURA;

alter table FACTURA
   drop constraint FK_FACTURA_CLIENTEFA_CLIENTE;

alter table FACTURA
   drop constraint FK_FACTURA_EMPLEADOF_EMPLEADO;

alter table FASECARGO
   drop constraint FK_FASECARG_FASEFASEC_FASE;

alter table FASECARGO
   drop constraint FK_FASECARG_TIPOCARGO_TIPOCARG;

alter table HV
   drop constraint FK_HV_CANDIDATO_CANDIDAT;

alter table HV
   drop constraint FK_HV_INSTITUCI_INSTITUC;

alter table HV
   drop constraint FK_HV_RELATIONS_TIPOITEM;

alter table ITEMPERFIL
   drop constraint FK_ITEMPERF_PERFILITE_PERFIL;

alter table ITEMPERFIL
   drop constraint FK_ITEMPERF_TIPOIPITE_TIPOITEM;

alter table PERFIL
   drop constraint FK_PERFIL_DISCIPLIN_DISCIPLI;

alter table PERFILFASE
   drop constraint FK_PERFILFA_FASEPERFI_FASE;

alter table PERFILFASE
   drop constraint FK_PERFILFA_PERFILPER_PERFIL;

alter table PREGUNTA
   drop constraint FK_PREGUNTA_PRUEBAPRE_PRUEBA;

alter table PREGUNTA
   drop constraint FK_PREGUNTA_TIPOPREGU_TIPOPREG;

alter table PREGUNTACANDIDATO
   drop constraint FK_PREGUNTA_PREGUNTAP_PREGUNTA;

alter table PREGUNTACANDIDATO
   drop constraint FK_PREGUNTA_PRUEBACAN_PRUEBACA;

alter table PROCESOCANDIDATO
   drop constraint FK_PROCESOC_CANDPROCE_CANDIDAT;

alter table PROCESOCANDIDATO
   drop constraint FK_PROCESOC_PROCESORE_PROCESOR;

alter table PROCESOREQUERIMIENTO
   drop constraint FK_PROCESOR_EMPLEADOP_EMPLEADO;

alter table PROCESOREQUERIMIENTO
   drop constraint FK_PROCESOR_PERFILFAS_PERFILFA;

alter table PROCESOREQUERIMIENTO
   drop constraint FK_PROCESOR_REQPROCES_REQUERIM;

alter table PRUEBA
   drop constraint FK_PRUEBA_DISCIPLIN_DISCIPLI;

alter table PRUEBA
   drop constraint FK_PRUEBA_FASEPRUEB_FASE;

alter table PRUEBA
   drop constraint FK_PRUEBA_TIPOPRUEB_TIPOPRUE;

alter table PRUEBACANDIDATO
   drop constraint FK_PRUEBACA_PROCESOCA_PROCESOC;

alter table PRUEBACANDIDATO
   drop constraint FK_PRUEBACA_PRUEBAPRU_PRUEBA;

alter table REQUERIMIENTO
   drop constraint FK_REQ_EMP_EMPLEADO1;

alter table REQUERIMIENTO
   drop constraint FK_REQ_EMP_EMPLEADO2;

alter table RESPUESTA
   drop constraint FK_RESPUEST_PREGUNTAR_PREGUNTA;

alter table RESPUESTACANDIDATO
   drop constraint FK_RESPUEST_PREGUNTAC_PREGUNTA;

drop index TIPODOCCANDIDATO_FK;

drop index RELATIONSHIP_40_FK;

drop table CANDIDATO cascade constraints;

drop index TIPOCARGOCARGO_FK;

drop index EMPLEADOCARGO_FK;

drop table CARGO cascade constraints;

drop table CLIENTE cascade constraints;

drop index TYPOCONTCONTCAN_FK;

drop index CONTACTCONTACTCANDIDATO_FK;

drop table CONTACTOCANDIDATO cascade constraints;

drop index TIPOCARGOCONTACTOCLIENTE_FK;

drop index CONTACTOTIPO_FK;

drop index CLIENTACONTRATOCLIENTE_FK;

drop table CONTACTOCLIENTE cascade constraints;

drop index FACTURADETLLAFACTURA_FK;

drop table DETALLEFACTURA cascade constraints;

drop table DISCIPLINA cascade constraints;

drop table EMPLEADO cascade constraints;

drop index CLIENTEFACTURA_FK;

drop index EMPLEADOFACTURA_FK;

drop table FACTURA cascade constraints;

drop table FASE cascade constraints;

drop index FASEFASECARGO_FK;

drop index TIPOCARGOFASECARGO_FK;

drop table FASECARGO cascade constraints;

drop index RELATIONSHIP_39_FK;

drop index INSTITUCIONHV_FK;

drop index CANDIDATOHV_FK;

drop table HV cascade constraints;

drop table INSTITUCION cascade constraints;

drop index TIPOIPITEMPERFIL_FK;

drop index PERFILITEMPERFIL_FK;

drop table ITEMPERFIL cascade constraints;

drop index DISCIPLINAPERFIL_FK;

drop table PERFIL cascade constraints;

drop index PERFILPERFILFASE_FK;

drop index FASEPERFILFASE_FK;

drop table PERFILFASE cascade constraints;

drop index TIPOPREGUNTAPREGUNTA_FK;

drop index PRUEBAPREGUNTA_FK;

drop table PREGUNTA cascade constraints;

drop index PREGUNTAPREGUNTACAND_FK;

drop index PRUEBACANDPREGUNTACAND_FK;

drop table PREGUNTACANDIDATO cascade constraints;

drop index CANDPROCESOCAND_FK;

drop index PROCESOREQPROCESOCAND_FK;

drop table PROCESOCANDIDATO cascade constraints;

drop index PERFILFASEPROCESOREQ_FK;

drop index REQPROCESOREQ_FK;

drop index EMPLE_PROCESO_REQ_FK;

drop table PROCESOREQUERIMIENTO cascade constraints;

drop index DISCIPLINAPRUEBA_FK;

drop index TIPOPRUEBAPRUEBA_FK;

drop index FASEPRUEBA_FK;

drop table PRUEBA cascade constraints;

drop index PRUEBAPRUEBACANDIDATO_FK;

drop index PROCESOCANDPRUEBACAND_FK;

drop table PRUEBACANDIDATO cascade constraints;

drop index EMPLEADOREQUERIMIENTO1_FK;

drop index EMPLEADOREQUERIMIENTO2_FK;

drop table REQUERIMIENTO cascade constraints;

drop index PREGUNTARESPUESTA_FK;

drop table RESPUESTA cascade constraints;

drop index PREGUNTACANDRESPUESTACAND_FK;

drop table RESPUESTACANDIDATO cascade constraints;

drop table TIPOCARGO cascade constraints;

drop table TIPOCONTACTO cascade constraints;

drop table TIPODOC cascade constraints;

drop table TIPOITEMPERFIL cascade constraints;

drop table TIPOPREGUNTA cascade constraints;

drop table TIPOPRUEBA cascade constraints;

/*==============================================================*/
/* Table: CANDIDATO                                             */
/*==============================================================*/
create table CANDIDATO  (
   USUARIO              VARCHAR2(30)                    not null,
   IDTIPODOC            VARCHAR2(3)                     not null,
   IDDISCIPLINA         VARCHAR2(4)                     not null,
   NOMBRE               VARCHAR2(30)                    not null,
   APELLIDO             VARCHAR2(30)                    not null,
   FECHANAC             DATE                            not null,
   NDOC                 NUMBER(15)                      not null,
   constraint PK_CANDIDATO primary key (USUARIO)
);

/*==============================================================*/
/* Index: RELATIONSHIP_40_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_40_FK on CANDIDATO (
   IDDISCIPLINA ASC
);

/*==============================================================*/
/* Index: TIPODOCCANDIDATO_FK                                   */
/*==============================================================*/
create index TIPODOCCANDIDATO_FK on CANDIDATO (
   IDTIPODOC ASC
);

/*==============================================================*/
/* Table: CARGO                                                 */
/*==============================================================*/
create table CARGO  (
   CONSECARGO           NUMBER(4,0)                     not null,
   CODEMPLEADO          VARCHAR2(5)                     not null,
   IDTIPOCARGO          VARCHAR2(3)                     not null,
   FECHAINICIOCARGO     DATE                            not null,
   FECHAFINCARGO        DATE,
   DESCCARGO            VARCHAR2(30)                    not null,
   constraint PK_CARGO primary key (CONSECARGO)
);

/*==============================================================*/
/* Index: EMPLEADOCARGO_FK                                      */
/*==============================================================*/
create index EMPLEADOCARGO_FK on CARGO (
   CODEMPLEADO ASC
);

/*==============================================================*/
/* Index: TIPOCARGOCARGO_FK                                     */
/*==============================================================*/
create index TIPOCARGOCARGO_FK on CARGO (
   IDTIPOCARGO ASC
);

/*==============================================================*/
/* Table: CLIENTE                                               */
/*==============================================================*/
create table CLIENTE  (
   NIT                  NUMBER(12,0)                    not null,
   RAZONSOCIAL          VARCHAR2(40)                    not null,
   URL                  VARCHAR2(30),
   constraint PK_CLIENTE primary key (NIT)
);

/*==============================================================*/
/* Table: CONTACTOCANDIDATO                                     */
/*==============================================================*/
create table CONTACTOCANDIDATO  (
   CONSECONTACANDI      NUMBER(4)                       not null,
   USUARIO              VARCHAR2(30)                    not null,
   IDTIPOCONTACTO       VARCHAR2(3)                     not null,
   constraint PK_CONTACTOCANDIDATO primary key (CONSECONTACANDI)
);

/*==============================================================*/
/* Index: CONTACTCONTACTCANDIDATO_FK                            */
/*==============================================================*/
create index CONTACTCONTACTCANDIDATO_FK on CONTACTOCANDIDATO (
   USUARIO ASC
);

/*==============================================================*/
/* Index: TYPOCONTCONTCAN_FK                                    */
/*==============================================================*/
create index TYPOCONTCONTCAN_FK on CONTACTOCANDIDATO (
   IDTIPOCONTACTO ASC
);

/*==============================================================*/
/* Table: CONTACTOCLIENTE                                       */
/*==============================================================*/
create table CONTACTOCLIENTE  (
   NIT                  NUMBER(12,0)                    not null,
   CONSECONTACLIENTE    NUMBER(3,0)                     not null,
   IDTIPOCONTACTO       VARCHAR2(3)                     not null,
   IDTIPOCARGO          VARCHAR2(3)                     not null,
   NOMBREAPELLIDOCLIEN  VARCHAR2(30)                    not null,
   ACTIVOCONTACLIENTE   SMALLINT                        not null,
   constraint PK_CONTACTOCLIENTE primary key (NIT, CONSECONTACLIENTE)
);

/*==============================================================*/
/* Index: CLIENTACONTRATOCLIENTE_FK                             */
/*==============================================================*/
create index CLIENTACONTRATOCLIENTE_FK on CONTACTOCLIENTE (
   NIT ASC
);

/*==============================================================*/
/* Index: CONTACTOTIPO_FK                                       */
/*==============================================================*/
create index CONTACTOTIPO_FK on CONTACTOCLIENTE (
   IDTIPOCONTACTO ASC
);

/*==============================================================*/
/* Index: TIPOCARGOCONTACTOCLIENTE_FK                           */
/*==============================================================*/
create index TIPOCARGOCONTACTOCLIENTE_FK on CONTACTOCLIENTE (
   IDTIPOCARGO ASC
);

/*==============================================================*/
/* Table: DETALLEFACTURA                                        */
/*==============================================================*/
create table DETALLEFACTURA  (
   NFACTURA             VARCHAR2(6)                     not null,
   ITEM                 NUMBER(4,0)                     not null,
   constraint PK_DETALLEFACTURA primary key (NFACTURA, ITEM)
);

/*==============================================================*/
/* Index: FACTURADETLLAFACTURA_FK                               */
/*==============================================================*/
create index FACTURADETLLAFACTURA_FK on DETALLEFACTURA (
   NFACTURA ASC
);

/*==============================================================*/
/* Table: DISCIPLINA                                            */
/*==============================================================*/
create table DISCIPLINA  (
   IDDISCIPLINA         VARCHAR2(4)                     not null,
   DESCDISCIPLINA       VARCHAR2(30)                    not null,
   constraint PK_DISCIPLINA primary key (IDDISCIPLINA)
);

/*==============================================================*/
/* Table: EMPLEADO                                              */
/*==============================================================*/
create table EMPLEADO  (
   CODEMPLEADO          VARCHAR2(5)                     not null,
   NOMEMPLEADO          VARCHAR2(30)                    not null,
   APELLEMPLEADO        VARCHAR2(30)                    not null,
   FECHANAC             DATE                            not null,
   FECHAINGRE           DATE                            not null,
   FECHAEGRESO          DATE,
   CORREO               VARCHAR2(30)                    not null,
   constraint PK_EMPLEADO primary key (CODEMPLEADO)
);

/*==============================================================*/
/* Table: FACTURA                                               */
/*==============================================================*/
create table FACTURA  (
   NFACTURA             VARCHAR2(6)                     not null,
   CODEMPLEADO          VARCHAR2(5)                     not null,
   NIT                  NUMBER(12,0)                    not null,
   FECHAFACTURA         DATE                            not null,
   constraint PK_FACTURA primary key (NFACTURA)
);

/*==============================================================*/
/* Index: EMPLEADOFACTURA_FK                                    */
/*==============================================================*/
create index EMPLEADOFACTURA_FK on FACTURA (
   CODEMPLEADO ASC
);

/*==============================================================*/
/* Index: CLIENTEFACTURA_FK                                     */
/*==============================================================*/
create index CLIENTEFACTURA_FK on FACTURA (
   NIT ASC
);

/*==============================================================*/
/* Table: FASE                                                  */
/*==============================================================*/
create table FASE  (
   IDFASE               VARCHAR2(4)                     not null,
   DESFASE              VARCHAR2(25)                    not null,
   constraint PK_FASE primary key (IDFASE)
);

/*==============================================================*/
/* Table: FASECARGO                                             */
/*==============================================================*/
create table FASECARGO  (
   CONSEFASECARGO       NUMBER(4,0)                     not null,
   IDTIPOCARGO          VARCHAR2(3),
   IDFASE               VARCHAR2(4),
   constraint PK_FASECARGO primary key (CONSEFASECARGO)
);

/*==============================================================*/
/* Index: TIPOCARGOFASECARGO_FK                                 */
/*==============================================================*/
create index TIPOCARGOFASECARGO_FK on FASECARGO (
   IDTIPOCARGO ASC
);

/*==============================================================*/
/* Index: FASEFASECARGO_FK                                      */
/*==============================================================*/
create index FASEFASECARGO_FK on FASECARGO (
   IDFASE ASC
);

/*==============================================================*/
/* Table: HV                                                    */
/*==============================================================*/
create table HV  (
   CONSEHV              NUMBER(3,0)                     not null,
   USUARIO              VARCHAR2(30)                    not null,
   CODINSTITUCION       NUMBER(5,0)                     not null,
   IDTIPOITEMPERFIL     VARCHAR2(4),
   FECHAINIACT          DATE                            not null,
   FECHAFINACT          DATE,
   DESCACTIVIDAD        VARCHAR2(50)                    not null,
   FUNCIONACTIVIDAD     VARCHAR2(50),
   constraint PK_HV primary key (CONSEHV)
);

/*==============================================================*/
/* Index: CANDIDATOHV_FK                                        */
/*==============================================================*/
create index CANDIDATOHV_FK on HV (
   USUARIO ASC
);

/*==============================================================*/
/* Index: INSTITUCIONHV_FK                                      */
/*==============================================================*/
create index INSTITUCIONHV_FK on HV (
   CODINSTITUCION ASC
);

/*==============================================================*/
/* Index: RELATIONSHIP_39_FK                                    */
/*==============================================================*/
create index RELATIONSHIP_39_FK on HV (
   IDTIPOITEMPERFIL ASC
);

/*==============================================================*/
/* Table: INSTITUCION                                           */
/*==============================================================*/
create table INSTITUCION  (
   CODINSTITUCION       NUMBER(5,0)                     not null,
   NOMINSTITUCION       VARCHAR2(40)                    not null,
   constraint PK_INSTITUCION primary key (CODINSTITUCION)
);

/*==============================================================*/
/* Table: ITEMPERFIL                                            */
/*==============================================================*/
create table ITEMPERFIL  (
   IDITEM               NUMBER(4,0)                     not null,
   IDPERFIL             VARCHAR2(4)                     not null,
   IDTIPOITEMPERFIL     VARCHAR2(4)                     not null,
   DESCITEM             VARCHAR2(30)                    not null,
   constraint PK_ITEMPERFIL primary key (IDITEM)
);

/*==============================================================*/
/* Index: PERFILITEMPERFIL_FK                                   */
/*==============================================================*/
create index PERFILITEMPERFIL_FK on ITEMPERFIL (
   IDPERFIL ASC
);

/*==============================================================*/
/* Index: TIPOIPITEMPERFIL_FK                                   */
/*==============================================================*/
create index TIPOIPITEMPERFIL_FK on ITEMPERFIL (
   IDTIPOITEMPERFIL ASC
);

/*==============================================================*/
/* Table: PERFIL                                                */
/*==============================================================*/
create table PERFIL  (
   IDPERFIL             VARCHAR2(4)                     not null,
   IDDISCIPLINA         VARCHAR2(4),
   DESPERFIL            VARCHAR2(50)                    not null,
   constraint PK_PERFIL primary key (IDPERFIL)
);

/*==============================================================*/
/* Index: DISCIPLINAPERFIL_FK                                   */
/*==============================================================*/
create index DISCIPLINAPERFIL_FK on PERFIL (
   IDDISCIPLINA ASC
);

/*==============================================================*/
/* Table: PERFILFASE                                            */
/*==============================================================*/
create table PERFILFASE  (
   IDPERFIL             VARCHAR2(4)                     not null,
   IDFASE               VARCHAR2(4)                     not null,
   constraint PK_PERFILFASE primary key (IDPERFIL, IDFASE)
);

/*==============================================================*/
/* Index: FASEPERFILFASE_FK                                     */
/*==============================================================*/
create index FASEPERFILFASE_FK on PERFILFASE (
   IDFASE ASC
);

/*==============================================================*/
/* Index: PERFILPERFILFASE_FK                                   */
/*==============================================================*/
create index PERFILPERFILFASE_FK on PERFILFASE (
   IDPERFIL ASC
);

/*==============================================================*/
/* Table: PREGUNTA                                              */
/*==============================================================*/
create table PREGUNTA  (
   IDPRUEBA             VARCHAR2(5)                     not null,
   CONSEPREGUNTA        NUMBER(5,0)                     not null,
   IDTIPOPREGUNTA       VARCHAR2(4)                     not null,
   DESCPREGUNTA         VARCHAR2(100)                   not null,
   constraint PK_PREGUNTA primary key (IDPRUEBA, CONSEPREGUNTA)
);

/*==============================================================*/
/* Index: PRUEBAPREGUNTA_FK                                     */
/*==============================================================*/
create index PRUEBAPREGUNTA_FK on PREGUNTA (
   IDPRUEBA ASC
);

/*==============================================================*/
/* Index: TIPOPREGUNTAPREGUNTA_FK                               */
/*==============================================================*/
create index TIPOPREGUNTAPREGUNTA_FK on PREGUNTA (
   IDTIPOPREGUNTA ASC
);

/*==============================================================*/
/* Table: PREGUNTACANDIDATO                                     */
/*==============================================================*/
create table PREGUNTACANDIDATO  (
   IDPRUEBA             VARCHAR2(5)                     not null,
   CONSEPREGUNTA        NUMBER(5,0)                     not null,
   CONSEPRUEBACANDI     NUMBER(5,0)                     not null,
   constraint PK_PREGUNTACANDIDATO primary key (IDPRUEBA, CONSEPREGUNTA, CONSEPRUEBACANDI)
);

/*==============================================================*/
/* Index: PRUEBACANDPREGUNTACAND_FK                             */
/*==============================================================*/
create index PRUEBACANDPREGUNTACAND_FK on PREGUNTACANDIDATO (
   CONSEPRUEBACANDI ASC
);

/*==============================================================*/
/* Index: PREGUNTAPREGUNTACAND_FK                               */
/*==============================================================*/
create index PREGUNTAPREGUNTACAND_FK on PREGUNTACANDIDATO (
   IDPRUEBA ASC,
   CONSEPREGUNTA ASC
);

/*==============================================================*/
/* Table: PROCESOCANDIDATO                                      */
/*==============================================================*/
create table PROCESOCANDIDATO  (
   USUARIO              VARCHAR2(30)                    not null,
   IDPERFIL             VARCHAR2(4)                     not null,
   IDFASE               VARCHAR2(4)                     not null,
   CONSECREQUE          NUMBER(5,0)                     not null,
   CONSPROCESO          NUMBER(5,0)                     not null,
   FECHAPRESENTACION    DATE                            not null,
   ANALISIS             VARCHAR2(50),
   OBSERVACION          VARCHAR2(50),
   constraint PK_PROCESOCANDIDATO primary key (USUARIO, IDPERFIL, IDFASE, CONSECREQUE, CONSPROCESO)
);

/*==============================================================*/
/* Index: PROCESOREQPROCESOCAND_FK                              */
/*==============================================================*/
create index PROCESOREQPROCESOCAND_FK on PROCESOCANDIDATO (
   IDPERFIL ASC,
   IDFASE ASC,
   CONSECREQUE ASC,
   CONSPROCESO ASC
);

/*==============================================================*/
/* Index: CANDPROCESOCAND_FK                                    */
/*==============================================================*/
create index CANDPROCESOCAND_FK on PROCESOCANDIDATO (
   USUARIO ASC
);

/*==============================================================*/
/* Table: PROCESOREQUERIMIENTO                                  */
/*==============================================================*/
create table PROCESOREQUERIMIENTO  (
   IDPERFIL             VARCHAR2(4)                     not null,
   IDFASE               VARCHAR2(4)                     not null,
   CONSECREQUE          NUMBER(5,0)                     not null,
   CONSPROCESO          NUMBER(5,0)                     not null,
   CODEMPLEADO          VARCHAR2(5),
   FECHAINICIO          DATE,
   FECHAFIN             DATE,
   CONVOCATORIA         VARCHAR2(200),
   INVITACION           VARCHAR2(200),
   constraint PK_PROCESOREQUERIMIENTO primary key (IDPERFIL, IDFASE, CONSECREQUE, CONSPROCESO)
);

/*==============================================================*/
/* Index: EMPLE_PROCESO_REQ_FK                                  */
/*==============================================================*/
create index EMPLE_PROCESO_REQ_FK on PROCESOREQUERIMIENTO (
   CODEMPLEADO ASC
);

/*==============================================================*/
/* Index: REQPROCESOREQ_FK                                      */
/*==============================================================*/
create index REQPROCESOREQ_FK on PROCESOREQUERIMIENTO (
   CONSECREQUE ASC
);

/*==============================================================*/
/* Index: PERFILFASEPROCESOREQ_FK                               */
/*==============================================================*/
create index PERFILFASEPROCESOREQ_FK on PROCESOREQUERIMIENTO (
   IDPERFIL ASC,
   IDFASE ASC
);

/*==============================================================*/
/* Table: PRUEBA                                                */
/*==============================================================*/
create table PRUEBA  (
   IDPRUEBA             VARCHAR2(5)                     not null,
   IDFASE               VARCHAR2(4)                     not null,
   IDTIPOPRUEBA         VARCHAR2(2)                     not null,
   IDDISCIPLINA         VARCHAR2(4),
   DESCPRUEBA           VARCHAR2(50)                    not null,
   PRUEBAACTIVA         VARCHAR2(1)                        not null,
   FECHACREADA          DATE,
   constraint PK_PRUEBA primary key (IDPRUEBA)
);

/*==============================================================*/
/* Index: FASEPRUEBA_FK                                         */
/*==============================================================*/
create index FASEPRUEBA_FK on PRUEBA (
   IDFASE ASC
);

/*==============================================================*/
/* Index: TIPOPRUEBAPRUEBA_FK                                   */
/*==============================================================*/
create index TIPOPRUEBAPRUEBA_FK on PRUEBA (
   IDTIPOPRUEBA ASC
);

/*==============================================================*/
/* Index: DISCIPLINAPRUEBA_FK                                   */
/*==============================================================*/
create index DISCIPLINAPRUEBA_FK on PRUEBA (
   IDDISCIPLINA ASC
);

/*==============================================================*/
/* Table: PRUEBACANDIDATO                                       */
/*==============================================================*/
create table PRUEBACANDIDATO  (
   CONSEPRUEBACANDI     NUMBER(5,0)                     not null,
   USUARIO              VARCHAR2(30)                    not null,
   IDPERFIL             VARCHAR2(4)                     not null,
   IDFASE               VARCHAR2(4)                     not null,
   CONSECREQUE          NUMBER(5,0)                     not null,
   CONSPROCESO          NUMBER(5,0)                     not null,
   IDPRUEBA             VARCHAR2(5),
   FECHAPRES            DATE                            not null,
   CALIFICACION         NUMBER(3,1),
   constraint PK_PRUEBACANDIDATO primary key (CONSEPRUEBACANDI)
);

/*==============================================================*/
/* Index: PROCESOCANDPRUEBACAND_FK                              */
/*==============================================================*/
create index PROCESOCANDPRUEBACAND_FK on PRUEBACANDIDATO (
   USUARIO ASC,
   IDPERFIL ASC,
   IDFASE ASC,
   CONSECREQUE ASC,
   CONSPROCESO ASC
);

/*==============================================================*/
/* Index: PRUEBAPRUEBACANDIDATO_FK                              */
/*==============================================================*/
create index PRUEBAPRUEBACANDIDATO_FK on PRUEBACANDIDATO (
   IDPRUEBA ASC
);

/*==============================================================*/
/* Table: REQUERIMIENTO                                         */
/*==============================================================*/
create table REQUERIMIENTO  (
   CONSECREQUE          NUMBER(5,0)                     not null,
   CODEMPLEADO1         VARCHAR2(5)                     not null,
   CODEMPLEADO2         VARCHAR2(5),
   FECHAREQUE           DATE                            not null,
   SALARIOMAX           NUMBER(6,0)                     not null,
   SALARIOMIN           NUMBER(6,0),
   DESFUNCION           VARCHAR2(500)                    not null,
   DESCARRERAS          VARCHAR2(500)                    not null,
   NVACANTES            NUMBER(2,0)                     not null,
   constraint PK_REQUERIMIENTO primary key (CONSECREQUE)
);

/*==============================================================*/
/* Index: EMPLEADOREQUERIMIENTO2_FK                             */
/*==============================================================*/
create index EMPLEADOREQUERIMIENTO2_FK on REQUERIMIENTO (
   CODEMPLEADO1 ASC
);

/*==============================================================*/
/* Index: EMPLEADOREQUERIMIENTO1_FK                             */
/*==============================================================*/
create index EMPLEADOREQUERIMIENTO1_FK on REQUERIMIENTO (
   CODEMPLEADO2 ASC
);

/*==============================================================*/
/* Table: RESPUESTA                                             */
/*==============================================================*/
create table RESPUESTA  (
   IDPRUEBA             VARCHAR2(5)                     not null,
   CONSEPREGUNTA        NUMBER(5,0)                     not null,
   CONSECRESPUESTA      NUMBER(3,0)                     not null,
   RESPUESTA            VARCHAR2(30)                    not null,
   constraint PK_RESPUESTA primary key (IDPRUEBA, CONSEPREGUNTA, CONSECRESPUESTA)
);

/*==============================================================*/
/* Index: PREGUNTARESPUESTA_FK                                  */
/*==============================================================*/
create index PREGUNTARESPUESTA_FK on RESPUESTA (
   IDPRUEBA ASC,
   CONSEPREGUNTA ASC
);

/*==============================================================*/
/* Table: RESPUESTACANDIDATO                                    */
/*==============================================================*/
create table RESPUESTACANDIDATO  (
   CONSECRESCANDI       NUMBER(4,0)                     not null,
   IDPRUEBA             VARCHAR2(5),
   CONSEPREGUNTA        NUMBER(5,0),
   CONSEPRUEBACANDI     NUMBER(5,0),
   RESCANDI             VARCHAR2(40)                    not null,
   constraint PK_RESPUESTACANDIDATO primary key (CONSECRESCANDI)
);

/*==============================================================*/
/* Index: PREGUNTACANDRESPUESTACAND_FK                          */
/*==============================================================*/
create index PREGUNTACANDRESPUESTACAND_FK on RESPUESTACANDIDATO (
   IDPRUEBA ASC,
   CONSEPREGUNTA ASC,
   CONSEPRUEBACANDI ASC
);

/*==============================================================*/
/* Table: TIPOCARGO                                             */
/*==============================================================*/
create table TIPOCARGO  (
   IDTIPOCARGO          VARCHAR2(3)                     not null,
   DESCTIPOCARGO        VARCHAR2(30)                    not null,
   constraint PK_TIPOCARGO primary key (IDTIPOCARGO)
);

/*==============================================================*/
/* Table: TIPOCONTACTO                                          */
/*==============================================================*/
create table TIPOCONTACTO  (
   IDTIPOCONTACTO       VARCHAR2(3)                     not null,
   DESCTIPOCONTACTO     VARCHAR2(20)                    not null,
   constraint PK_TIPOCONTACTO primary key (IDTIPOCONTACTO)
);

/*==============================================================*/
/* Table: TIPODOC                                               */
/*==============================================================*/
create table TIPODOC  (
   IDTIPODOC            VARCHAR2(3)                     not null,
   DESCTIPODOC          VARCHAR2(20)                    not null,
   constraint PK_TIPODOC primary key (IDTIPODOC)
);

/*==============================================================*/
/* Table: TIPOITEMPERFIL                                        */
/*==============================================================*/
create table TIPOITEMPERFIL  (
   IDTIPOITEMPERFIL     VARCHAR2(4)                     not null,
   DESCTIPOITEMPERFIL   VARCHAR2(30)                    not null,
   constraint PK_TIPOITEMPERFIL primary key (IDTIPOITEMPERFIL)
);

/*==============================================================*/
/* Table: TIPOPREGUNTA                                          */
/*==============================================================*/
create table TIPOPREGUNTA  (
   IDTIPOPREGUNTA       VARCHAR2(4)                     not null,
   DESCTIPOPREGUNTA     VARCHAR2(30)                    not null,
   constraint PK_TIPOPREGUNTA primary key (IDTIPOPREGUNTA)
);

/*==============================================================*/
/* Table: TIPOPRUEBA                                            */
/*==============================================================*/
create table TIPOPRUEBA  (
   IDTIPOPRUEBA         VARCHAR2(2)                     not null,
   DESCTIPOPRUEBA       VARCHAR2(40)                    not null,
   constraint PK_TIPOPRUEBA primary key (IDTIPOPRUEBA)
);

alter table CANDIDATO
   add constraint FK_CANDIDAT_RELATIONS_DISCIPLI foreign key (IDDISCIPLINA)
      references DISCIPLINA (IDDISCIPLINA);

alter table CANDIDATO
   add constraint FK_CANDIDAT_TIPODOCCA_TIPODOC foreign key (IDTIPODOC)
      references TIPODOC (IDTIPODOC);

alter table CARGO
   add constraint FK_CARGO_EMPLEADOC_EMPLEADO foreign key (CODEMPLEADO)
      references EMPLEADO (CODEMPLEADO);

alter table CARGO
   add constraint FK_CARGO_TIPOCARGO_TIPOCARG foreign key (IDTIPOCARGO)
      references TIPOCARGO (IDTIPOCARGO);

alter table CONTACTOCANDIDATO
   add constraint FK_CONTACTO_CONTACTCO_CANDIDAT foreign key (USUARIO)
      references CANDIDATO (USUARIO);

alter table CONTACTOCANDIDATO
   add constraint FK_CONTACTO_TYPOCONTC_TIPOCONT foreign key (IDTIPOCONTACTO)
      references TIPOCONTACTO (IDTIPOCONTACTO);

alter table CONTACTOCLIENTE
   add constraint FK_CONTACTO_CLIENTACO_CLIENTE foreign key (NIT)
      references CLIENTE (NIT);

alter table CONTACTOCLIENTE
   add constraint FK_CONTACTO_CONTACTOT_TIPOCONT foreign key (IDTIPOCONTACTO)
      references TIPOCONTACTO (IDTIPOCONTACTO);

alter table CONTACTOCLIENTE
   add constraint FK_CONTACTO_TIPOCARGO_TIPOCARG foreign key (IDTIPOCARGO)
      references TIPOCARGO (IDTIPOCARGO);

alter table DETALLEFACTURA
   add constraint FK_DETALLEF_FACTURADE_FACTURA foreign key (NFACTURA)
      references FACTURA (NFACTURA);

alter table FACTURA
   add constraint FK_FACTURA_CLIENTEFA_CLIENTE foreign key (NIT)
      references CLIENTE (NIT);

alter table FACTURA
   add constraint FK_FACTURA_EMPLEADOF_EMPLEADO foreign key (CODEMPLEADO)
      references EMPLEADO (CODEMPLEADO);

alter table FASECARGO
   add constraint FK_FASECARG_FASEFASEC_FASE foreign key (IDFASE)
      references FASE (IDFASE);

alter table FASECARGO
   add constraint FK_FASECARG_TIPOCARGO_TIPOCARG foreign key (IDTIPOCARGO)
      references TIPOCARGO (IDTIPOCARGO);

alter table HV
   add constraint FK_HV_CANDIDATO_CANDIDAT foreign key (USUARIO)
      references CANDIDATO (USUARIO);

alter table HV
   add constraint FK_HV_INSTITUCI_INSTITUC foreign key (CODINSTITUCION)
      references INSTITUCION (CODINSTITUCION);

alter table HV
   add constraint FK_HV_RELATIONS_TIPOITEM foreign key (IDTIPOITEMPERFIL)
      references TIPOITEMPERFIL (IDTIPOITEMPERFIL);

alter table ITEMPERFIL
   add constraint FK_ITEMPERF_PERFILITE_PERFIL foreign key (IDPERFIL)
      references PERFIL (IDPERFIL);

alter table ITEMPERFIL
   add constraint FK_ITEMPERF_TIPOIPITE_TIPOITEM foreign key (IDTIPOITEMPERFIL)
      references TIPOITEMPERFIL (IDTIPOITEMPERFIL);

alter table PERFIL
   add constraint FK_PERFIL_DISCIPLIN_DISCIPLI foreign key (IDDISCIPLINA)
      references DISCIPLINA (IDDISCIPLINA);

alter table PERFILFASE
   add constraint FK_PERFILFA_FASEPERFI_FASE foreign key (IDFASE)
      references FASE (IDFASE);

alter table PERFILFASE
   add constraint FK_PERFILFA_PERFILPER_PERFIL foreign key (IDPERFIL)
      references PERFIL (IDPERFIL);

alter table PREGUNTA
   add constraint FK_PREGUNTA_PRUEBAPRE_PRUEBA foreign key (IDPRUEBA)
      references PRUEBA (IDPRUEBA);

alter table PREGUNTA
   add constraint FK_PREGUNTA_TIPOPREGU_TIPOPREG foreign key (IDTIPOPREGUNTA)
      references TIPOPREGUNTA (IDTIPOPREGUNTA);

alter table PREGUNTACANDIDATO
   add constraint FK_PREGUNTA_PREGUNTAP_PREGUNTA foreign key (IDPRUEBA, CONSEPREGUNTA)
      references PREGUNTA (IDPRUEBA, CONSEPREGUNTA);

alter table PREGUNTACANDIDATO
   add constraint FK_PREGUNTA_PRUEBACAN_PRUEBACA foreign key (CONSEPRUEBACANDI)
      references PRUEBACANDIDATO (CONSEPRUEBACANDI);

alter table PROCESOCANDIDATO
   add constraint FK_PROCESOC_CANDPROCE_CANDIDAT foreign key (USUARIO)
      references CANDIDATO (USUARIO);

alter table PROCESOCANDIDATO
   add constraint FK_PROCESOC_PROCESORE_PROCESOR foreign key (IDPERFIL, IDFASE, CONSECREQUE, CONSPROCESO)
      references PROCESOREQUERIMIENTO (IDPERFIL, IDFASE, CONSECREQUE, CONSPROCESO);

alter table PROCESOREQUERIMIENTO
   add constraint FK_PROCESOR_EMPLEADOP_EMPLEADO foreign key (CODEMPLEADO)
      references EMPLEADO (CODEMPLEADO);

alter table PROCESOREQUERIMIENTO
   add constraint FK_PROCESOR_PERFILFAS_PERFILFA foreign key (IDPERFIL, IDFASE)
      references PERFILFASE (IDPERFIL, IDFASE);

alter table PROCESOREQUERIMIENTO
   add constraint FK_PROCESOR_REQPROCES_REQUERIM foreign key (CONSECREQUE)
      references REQUERIMIENTO (CONSECREQUE);

alter table PRUEBA
   add constraint FK_PRUEBA_DISCIPLIN_DISCIPLI foreign key (IDDISCIPLINA)
      references DISCIPLINA (IDDISCIPLINA);

alter table PRUEBA
   add constraint FK_PRUEBA_FASEPRUEB_FASE foreign key (IDFASE)
      references FASE (IDFASE);

alter table PRUEBA
   add constraint FK_PRUEBA_TIPOPRUEB_TIPOPRUE foreign key (IDTIPOPRUEBA)
      references TIPOPRUEBA (IDTIPOPRUEBA);

alter table PRUEBACANDIDATO
   add constraint FK_PRUEBACA_PROCESOCA_PROCESOC foreign key (USUARIO, IDPERFIL, IDFASE, CONSECREQUE, CONSPROCESO)
      references PROCESOCANDIDATO (USUARIO, IDPERFIL, IDFASE, CONSECREQUE, CONSPROCESO);

alter table PRUEBACANDIDATO
   add constraint FK_PRUEBACA_PRUEBAPRU_PRUEBA foreign key (IDPRUEBA)
      references PRUEBA (IDPRUEBA);

alter table REQUERIMIENTO
   add constraint FK_REQ_EMP_EMPLEADO1 foreign key (CODEMPLEADO2)
      references EMPLEADO (CODEMPLEADO);

alter table REQUERIMIENTO
   add constraint FK_REQ_EMP_EMPLEADO2 foreign key (CODEMPLEADO1)
      references EMPLEADO (CODEMPLEADO);

alter table RESPUESTA
   add constraint FK_RESPUEST_PREGUNTAR_PREGUNTA foreign key (IDPRUEBA, CONSEPREGUNTA)
      references PREGUNTA (IDPRUEBA, CONSEPREGUNTA);

alter table RESPUESTACANDIDATO
   add constraint FK_RESPUEST_PREGUNTAC_PREGUNTA foreign key (IDPRUEBA, CONSEPREGUNTA, CONSEPRUEBACANDI)
      references PREGUNTACANDIDATO (IDPRUEBA, CONSEPREGUNTA, CONSEPRUEBACANDI);


--SECUENCIA PRA REQUERIMIENTOS
CREATE SEQUENCE REQUERIMIENTO_SEQ
START WITH 20
INCREMENT BY 1
NOCACHE
NOCYCLE;

--SECUENCIA PARA PRUEBACANDIDATO
CREATE SEQUENCE PRUEBA_CANDIDATO_SEQ
START WITH 10
INCREMENT BY 1
NOMAXVALUE;

--SECUENCIA PARA EMPLEADOS
CREATE SEQUENCE EMPLEADO_SEQ
START WITH 100
INCREMENT BY 1
NOCACHE
NOCYCLE;

--SECUENCIA PARA Cargo
CREATE SEQUENCE CARGO_SEQ
START WITH 100
INCREMENT BY 1
NOCACHE
NOCYCLE;