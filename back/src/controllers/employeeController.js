import * as employeeService from '../services/employeeService.js';

export const getAllGeneralAnalyst = async (req, res) => {
  try {
    const analysts = await employeeService.getAllGeneralAnalyst();
    res.json(analysts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// export const getUserById = async (req, res) => {
//   try {
//     const user = await userService.getUserById(req.params.id);
//     if (user) {
//       res.json(user);
//     } else {
//       res.status(404).json({ error: 'User not found' });
//     }
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// export const createUser = async (req, res) => {
//   try {
//     const user = await userService.createUser(req.body);
//     res.status(201).json(user);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
