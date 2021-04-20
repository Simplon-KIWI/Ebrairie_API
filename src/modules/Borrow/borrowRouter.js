class BorrowRouter {
    constructor({router, borrowController}) {
        this.router = router;
        this.initializeRoutes({borrowController})
        return this.router;
    }

    initializeRoutes({borrowController}) {
        this.router.route('/borrow')
            .get(borrowController.getAll)
            .post(borrowController.create);
    }
}

export default BorrowRouter;