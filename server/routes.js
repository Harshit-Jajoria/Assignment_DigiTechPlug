import express from 'express';
import { getUsers,addData } from './controllers.js';


const router = express.Router();

/* READ */
router.get('/data', getUsers);

 router.post('/add-data',addData)




export default router;