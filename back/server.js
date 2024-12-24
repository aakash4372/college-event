// Load environment variables from .env
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

const ADMIN_EMAIL = 'college@outlook.com';
const ADMIN_PASSWORD_HASH = bcrypt.hashSync('a', 10); 

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to the event registration backend!');
});
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

const registerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  degree: {
    type: String,
    enum: ['MBA', 'MCA'],
    required: true,
  },
  college: { type: String, required: true },
  category: {
    type: String,
    enum: ['best manager', 'business quiz', 'ad-zap', 'finman', 'ipl', 'connection'],
    required: true,
  },
});

const Register = mongoose.model('Register', registerSchema);

app.post('/register', async (req, res) => {
  try {
    const { name, phone, email, degree, college, category } = req.body;
    const newUser = new Register({ name, phone, email, degree, college, category });
    await newUser.save();
    res.status(200).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error registering user', error: err });
  }
});



app.get('/users', async (req, res) => {
  try {
    const { degree, category } = req.query;
    const filters = {};
    if (degree) filters.degree = degree;
    if (category) filters.category = category;

    const users = await Register.find(filters);
    res.status(200).json({ users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching users', error: err });
  }
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN_EMAIL && bcrypt.compareSync(password, ADMIN_PASSWORD_HASH)) {
    res.status(200).json({ message: 'Admin login successful' });
  } else {
    res.status(400).json({ message: 'Invalid credentials' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
