const express = require('express');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const goalRoutes = require('./routes/goalsRoutes');
const reminderRoutes = require('./routes/reminderRoutes');
const authRoutes = require("./routes/auth")
var cors = require('cors');
const appointmentRouter = require('./routes/appointmentsRoutes');
const dashboardRouter = require('./routes/dashboardRoutes');

const app = express();
app.use(express.json());
app.use(cors())

app.use("/auth", authRoutes);
app.use('/users', userRoutes);
app.use('/goals', goalRoutes);
app.use('/reminders', reminderRoutes);
app.use('/appointments', appointmentRouter)
app.use('/dashboards', dashboardRouter)

app.get("/", (req, res) => {
    res.send("welcome")
})

connectDB();
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
