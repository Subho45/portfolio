const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const contactRoute = require('./routes/contact');

app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoute);

const PORT = process.env.PORT || 5432;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
