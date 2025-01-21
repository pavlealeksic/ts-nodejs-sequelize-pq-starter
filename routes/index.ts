import { Router } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();

// Read all files in the routes directory
const routeFiles = fs.readdirSync(__dirname)
  .filter(file => 
    file !== 'index.ts' && // Exclude this index file
    file !== 'index.js' && // Exclude compiled index file
    (file.endsWith('.ts') || file.endsWith('.js')) // Include only .ts and .js files
  );

// Dynamically import and use all route files
routeFiles.forEach(async (file) => {
  const routeName = file.split('.')[0]; // Remove file extension
  const route = require(path.join(__dirname, file));
  router.use(`/${routeName}`, route.default || route);
});

export default router; 