const pool = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (username, password) => {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'SELECT * FROM admin WHERE username = $1',
      [username]
    );

    if (result.rows.length === 0) {
      throw new Error('User not found');
    }

    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
     const password = "admin";

// Hashing twice gives different results:
const hash1 = await bcrypt.hash(password, 10);

console.log(hash1); // true
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return { token, user: { id: user.id, username: user.username } };
  } finally {
    client.release();
  }
};
