const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080; // Practice using different ports

app.get('/', (req, res) => {
  res.json({
    message: "Node.js Practice App is running!",
    status: "Healthy",
    timestamp: new Date()
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
