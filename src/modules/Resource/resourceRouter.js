class ResourceRouter {
  constructor({ router, auth, csrfMiddleware, resourceController }) {
    this.router = router;
    this.initializeRoutes({ auth, csrfMiddleware, resourceController });
    return this.router;
  }

  initializeRoutes({ auth, csrfMiddleware, resourceController }) {
    this.router
      .route('/resources')
      .get(resourceController.getAll)

      .post(auth.authenticate, csrfMiddleware, resourceController.create);

    this.router.route('/resources/:id').get(resourceController.getOne);

    this.router
      .route('/resources/search/:value')
      .get(resourceController.search);
  }
}

export default ResourceRouter;
