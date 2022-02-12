const express = require('express');
const morgan = require ('morgan');
const app = express();

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

app.use(morgan('dev'));
app.use(express.json()); // middleware

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
    });

// Routers

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// Server
const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});