require('dotenv').config(); // Load environment variables FIRST

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI; // Now it will have a value


const doctorRoutes = require("./routes/doctorRoutes");
const nurseRoutes = require("./routes/nurseRoutes");
const receptionistRoutes = require("./routes/receptionistRoutes");
const patientRoutes = require("./routes/patientRoutes");


if (!DB_URI) {
  console.error("DB_URI is undefined. Check your .env file!");
  process.exit(1);
}

// Middleware
app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/nurses", nurseRoutes);
app.use("/api/receptionists", receptionistRoutes);
app.use("/api/patients", patientRoutes);


// Simple route
app.get('/', (req, res) => {
    res.send('Server is running...');
});


mongoose
//   .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .connect(DB_URI)

  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
