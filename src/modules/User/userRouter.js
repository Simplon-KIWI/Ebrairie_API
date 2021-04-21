class UserRouter {
  constructor({ router, auth, userController, csrfMiddleware }) {
    this.router = router;
    this.initializeRoutes({ auth, userController, csrfMiddleware });
    return this.router;
  }

  initializeRoutes({ auth, userController }) {
    this.router
      .route('/users')
      .get(auth.authenticate, userController.getAll)
      .post(userController.register);

    this.router.route('/admin/register').post(userController.registerAdmin);
    
    this.router.route('/admin/authenticate').post(userController.loginAdmin);
  }
}

export default UserRouter;
