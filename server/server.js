const express = require('express');
const cors = require('cors');
const helment = require("helmet")

const connectDB = require('./src/config/database');
const userRoutes = require('./src/routes/userRoutes');
const goalRoutes = require('./src/routes/goalsRoutes');
const reminderRoutes = require('./src/routes/reminderRoutes');
const authRoutes = require("./src/routes/auth")
const appointmentRouter = require('./src/routes/appointmentsRoutes');
const dashboardRouter = require('./src/routes/dashboardRoutes');
const tipsRouter = require('./src/routes/tipsRoutes');


const app = express();

app.use(express.json());
app.use(cors())
app.use(helment())

app.use("/auth", authRoutes);
app.use('/users', userRoutes);
app.use('/goals', goalRoutes);
app.use('/reminders', reminderRoutes);
app.use('/appointments', appointmentRouter)
app.use('/dashboards', dashboardRouter)
app.use("/tips", tipsRouter);

app.get("/", (req, res) => {
    res.send("welcome")
})

connectDB();
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
