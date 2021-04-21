class AuthMiddleware {
  constructor({ jwtService }) {
    this.jwt = jwtService;
  }

  authenticate = async (req, res, next) => {
    try {
      const token = req.cookies['auth-cookie'];

      if (!token) {
        return res.status(401).json('Access denied. No credentials sent!');
      }

      // Verify Token
      const decoded = await this.jwt.decodeToken(token);

      // if the user has permissions
      req.currentUserId = decoded.id;
      next();
    } catch (err) {
      return res.status(401).json('Authentication failed : \n' + err);
    }
  };
}

export default AuthMiddleware;
