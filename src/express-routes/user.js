// routes/users.js
const express = require('express');
const router = express.Router();
const pool = require('../db');

// GET all users from PostgreSQL
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// POST a new user into PostgreSQL
// router.post('/', async (req, res) => {
//   try {
//     const { name, email } = req.body;
//     const newUser = await pool.query(
//       'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
//       [name, email]
//     );
//     res.json(newUser.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

module.exports = router;