// authMiddleware.js
const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJNZXNobyIsIlVzZXJuYW1lIjoiSmF2YUluVXNlIiwiZXhwIjoxNjk2OTUxNDk1LCJpYXQiOjE2OTY5NTE0OTV9.wFZsO5A140HYSt-AfZqJ3qLYjPSJMKrhDdhQZcyFu88'); // Replace with your secret key
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid token.' });
  }
};
