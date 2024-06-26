import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    secure:true, 
    // process.env.NODE_ENV !== 'development', // Use secure cookies in production
    sameSite: 'none', // Prevent CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    credentials: true // Include the cookie in cross-origin requests
  });
};

export default generateToken;