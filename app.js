const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const userRoutes = require('./routes/userRoutes');
const equipmentRoutes = require('./routes/equipmentRoutes');
const borrowRoutes = require('./routes/borrowRoutes');

app.use('/api/users', userRoutes);
app.use('/api/equipment', equipmentRoutes);
app.use('/api/borrow', borrowRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});
