class ResourceRouter {
    constructor({router, resourceController}) {
        this.router = router;
        this.initializeRoutes({resourceController})
        return this.router;
    }

    initializeRoutes({resourceController}) {
        this.router.route('/resources')
            .get(resourceController.getAll)
            .get(resourceController.getOne)
            .post(resourceController.create);
    }
}

export default ResourceRouter;