class AuthorRouter {
    constructor({ router, auth, csrfMiddleware, authorController }) {
      this.router = router;
      this.initializeRoutes({ auth, csrfMiddleware, authorController });
      return this.router;
    }
  
    initializeRoutes({ auth, csrfMiddleware, authorController }) {
      this.router
        .route('/authors')
        .get(authorController.getAll)
  
        .post(auth.authenticate, csrfMiddleware, authorController.create);
  
      this.router.route('/authors/:id').get(authorController.getOne);
  
      this.router
        .route('/authors/search/:value')
        .get(authorController.search);
    }
  }
  
  export default AuthorRouter;
  