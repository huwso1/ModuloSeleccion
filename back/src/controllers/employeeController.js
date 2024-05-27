import * as employeeService from '../services/employeeService.js';

export const getAllGeneralAnalyst = async (req, res) => {
  try {
    const analysts = await employeeService.getAllGeneralAnalyst();
    res.json(analysts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createEmployeeController = async (req, res) => {
  try {
    const employeeData = req.body;
    const newEmployee = await employeeService.createEmployee(employeeData);

    // Enviar una respuesta exitosa con el nuevo ID de empleado
    res.status(201).json(newEmployee);
  } catch (error) {
    // Manejar cualquier error que pueda ocurrir durante la creación del empleado
    console.error('Error creando empleado:', error);
    res.status(500).json({ error: 'Hubo un problema al crear el empleado' });
  }
};


export const employeeLoginController = async (req, res) => {
  try {
    const { usuario, contraseña } = req.body;

    // Verificar si todos los campos requeridos están presentes en el cuerpo de la solicitud
    if (!usuario) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Llamar a la función employeeLogin para verificar las credenciales del empleado
    const employeeData = await employeeService.employeeLogin({ usuario, contraseña });

    // Si no se encontró un empleado con el correo proporcionado, devolver un error 400
    if (!employeeData) {
      return res.status(400).json({ error: 'No se encontró un empleado con el correo proporcionado' });
    }

    // Enviar una respuesta exitosa con los datos del empleado
    res.status(200).json(employeeData);
  } catch (error) {
    // Manejar cualquier error que pueda ocurrir durante el inicio de sesión
    console.error('Error en el inicio de sesión del empleado:', error);
    res.status(500).json({ error: 'Hubo un problema al iniciar sesión' });
  }
};