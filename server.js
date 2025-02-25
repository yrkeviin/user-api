require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const usersRoutes = require('./src/routes/usersRoutes');
const postsRoutes = require('./src/routes/postsRoutes');

app.use(cors());
app.use(express.json());
app.use("/api/users", postsRoutes);
app.use("/api", usersRoutes);

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send(200);
});

app.listen(PORT, () => {
    console.log(`On na porta ${PORT} bb!`);
});