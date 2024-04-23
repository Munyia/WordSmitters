import jwt from 'jsonwebtoken';
import User from '../model/userModel.js';

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
        console.log(token)
      //decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded)
      req.user = await User.findById(decoded.id.id);
      next();
    } catch (error) {
      res.status(401).send("Not authorized, token failed");
    }
  }

  if (!token) {
    return res.status(401).send("Not authorized, no token");
  }
}

export { protect };
