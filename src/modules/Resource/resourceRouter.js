class ResourceRouter {
    constructor({router, resourceController}) {
        this.router = router;
        this.initializeRoutes({resourceController})
        return this.router;
    }

    initializeRoutes({resourceController}) {
        this.router.route('/resources')
            .get(resourceController.getAll)
            .post(resourceController.create);
    }
}

export default ResourceRouter;