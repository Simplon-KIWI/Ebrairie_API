class BorrowRouter {
    constructor({router, auth, csrfMiddleware, borrowController}) {
        this.router = router;
        this.initializeRoutes({auth, csrfMiddleware, borrowController})
        return this.router;
    }

    initializeRoutes({auth, csrfMiddleware, borrowController}) {
        this.router.route('/borrow')
            .get(borrowController.getAll)
            .post(auth.authenticate, csrfMiddleware, borrowController.create);
        this.router.route('/borrows/:borrowId')
            .get(borrowController.getBorrowById);
            // .patch(borrowController.returnResource);
    }
}

export default BorrowRouter;