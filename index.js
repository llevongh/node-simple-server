const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.post('/msg', (req, res) => {
  console.log(req.body);
  res.status(200).send("message received.");
})

app.get('/ping', (req, res) => {
  res.status(200).send("pong");
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})