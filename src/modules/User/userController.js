class UserController {
  constructor({ userService, jwtService }) {
    this.userService = userService;
    this.jwt = jwtService;
  }

  getAll = async ({ res }) => {
    try {
      let users = await this.userService.getAll();
      res.status(200).json(users);
    } catch (err) {
      console.err(err);
      res.status(400).json(err.message);
    }
  };

  register = async (req, res) => {
    try {
      const user = await this.userService.register({ ...req.body });
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      res.status(400).json(err.message);
    }
  };

  registerAdmin = async (req, res) => {
    try {
      const user = await this.userService.registerAdmin({ ...req.body });
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      res.status(400).json(err.message);
    }
  };

  loginAdmin = async (req, res) => {
    try {
      const user = await this.userService.loginAdmin({ ...req.body });
      const token = await this.jwt.generateToken({ id: user.id });
      res.cookie('auth-cookie', token, { expires: false, httpOnly: true });
      res.status(200).json(user);
    } catch (err) {
      console.error(err);
      res.status(400).json(err.message);
    }
  };

  me = async (req, res, next) => {
    try {
      console.log('req me :', req.currentUserId);
      const user = await this.userService.me(req.currentUserId);
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  };
}

export default UserController;
