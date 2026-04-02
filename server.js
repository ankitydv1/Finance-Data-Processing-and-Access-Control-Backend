
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const app = express();
app.use(express.json());

app.use(rateLimit({ windowMs: 15*60*1000, max: 100 }));

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("DB Connected"))
.catch(err=>console.log(err));

const specs = swaggerJsDoc({
  definition: {
    openapi: "3.0.0",
    info: { title: "Finance API", version: "1.0.0" }
  },
  apis: ["./routes/*.js"]
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/auth', require('./routes/authRoutes'));
app.use('/records', require('./routes/recordRoutes'));
app.use('/dashboard', require('./routes/dashboardRoutes'));

app.listen(process.env.PORT, ()=>console.log("Server running"));
