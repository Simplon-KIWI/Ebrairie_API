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
      console.log('timus', req.body)
      const user = await this.userService.register({ ...req.body });
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      res.status(400).json(err.message);
    }
  };
}

export default UserController;
