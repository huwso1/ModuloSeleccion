# Instrucciones para Ejecutar el Proyecto

## 1. Configuración de la Base de Datos Oracle

### 1.1. Instalación de Oracle Database
1. Descargar Oracle Database desde el sitio oficial de Oracle.
2. Seguir las instrucciones de instalación proporcionadas por Oracle para el sistema operativo.

### 1.2. Creación de la Base de Datos y Tablas
1. Conectar a Oracle Database utilizando una herramienta como SQL*Plus o Oracle SQL Developer.
2. Ejecutar el archivo `creacionBD.sql` encontrado dentro de la carpeta utils en ./back para crear las tablas y secuencias:
   ```sql
   @ruta/al/archivo/creacionBD.sql

3. Ejecutar el archivo inserts.sql encontrado dentro de la carpeta utils en ./back para insertar datos iniciales
    ```sql
   @ruta/al/archivo/inserts.sql


## 2. Configuración del Backend
### 2.1. Instalar Dependencias del Backend
1. Navegar a la carpeta del backend:
    ```bash
    cd back

2. Instalar las dependencias necesarias
    ```bash
    npm install

### 2.2 Configuración de Credenciales de la Base de Datos
1. Crear un archivo .env en la carpeta del backend con las credenciales de conexión ala base de datos:
    ```
    USER=TU_USUARIO
    PASSWORD=TU_CONTRASEÑA
    CONNECTION_STRING=TU_STRING_DE_CONEXION

### 2.3 Iniciar el Servidor del Backend
1. Ejecutar el servidor:
    ```bash
    npm start


## 3. Configuración del Frontend
### 3.1 Instalar Dependencias del Frontend
1. Navegar a la carpeta del frontend
    ```bash
    cd cd front/modulo_basesdedatos

2. Instalar las dependencias necesarias:
    ```bash
    npm install

### 3.2 Iniciar la Aplicación React
1. Ejecutar la aplicación React
    ```bash
    npm start