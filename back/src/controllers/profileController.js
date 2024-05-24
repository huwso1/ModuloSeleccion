import { getAllProfiles } from '../services/profileService.js';

export const getAllProfilesController = async (req, res) => {
  try {
    const profiles = await getAllProfiles();
    res.json(profiles);
  } catch (error) {
    console.error('Error getting profiles:', error);
    res.status(500).json({ error: 'Hubo un problema al obtener los perfiles' });
  }
};