class UserRouter {
  constructor({ router, auth, userController }) {
    this.router = router;
    this.initializeRoutes({ auth, userController });
    return this.router;
  }

  initializeRoutes({ auth, userController }) {
    this.router
      .route('/users')
      .get(auth.authenticate, userController.getAll)
      .post(userController.register);

    this.router.route('/admin/register').post(userController.registerAdmin);

    this.router.route('/admin/authenticate').post(userController.loginAdmin);

    this.router.route('/admin/me').get(auth.authenticate, userController.me);
  }
}

export default UserRouter;
