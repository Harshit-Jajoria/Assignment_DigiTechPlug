import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes.js';


// Configuration
const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));

//Routes
app.use('/', userRoutes);

// Mongoose setup
mongoose.set('strictQuery', false);
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port number ${port} `);
});

app.get('/', function (req, res) {
  res.send(`Backend is running on port number ${port}`);
});
const uri='mongodb+srv://comder6674:j55rDpeuf5bmhAwd@cluster0.odxsnuk.mongodb.net/'

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log(`conneted to db`);   
  })
  .catch((error) => console.log(`${error} -->  did not connect`));