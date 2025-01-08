const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error fetching users:', err); // Log the error for debugging
      return res.status(500).send('Internal Server Error'); // Send a proper error response
    }
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});