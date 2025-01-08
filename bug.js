const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // This will cause an error if the database is unavailable or there is a problem
  // with the database query.
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      //The following line is missing in the original code causing the bug
      console.error('Error fetching users:', err);
      return res.status(500).send('Internal Server Error');
    }
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});