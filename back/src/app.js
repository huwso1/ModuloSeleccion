import express from 'express';
import { initialize, close } from './config/config.js';
import employeeRoutes from './routes/employeeRoutes.js';
import requirementRoutes from './routes/requirementRoutes.js';
import disciplineRoutes from './routes/disciplineRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import candidateRoutes from './routes/candidateRoutes.js'
import testRoutes from './routes/testRoutes.js';

const app = express();

app.use(express.json());
app.use('/empleados', employeeRoutes);
app.use('/requerimientos', requirementRoutes);
app.use('/disciplinas', disciplineRoutes);
app.use('/perfiles', profileRoutes);
app.use('/candidatos', candidateRoutes);
app.use('/pruebas', testRoutes);

const PORT = process.env.PORT || 3003;

async function startServer() {
  try {
    await initialize();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server', err);
    process.exit(1);
  }
}

startServer();

process.on('SIGINT', async () => {
  await close();
  process.exit(0);
});

export default app;