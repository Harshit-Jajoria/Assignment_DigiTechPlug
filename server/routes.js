import express from 'express';
import { getUsers } from './controllers.js';


const router = express.Router();

/* READ */
router.get('/data', getUsers);

// router.post('/add-user',register)




export default router;