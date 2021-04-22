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
        
        this.router.route('/resources/:id')
        .get(resourceController.getOne)

        this.router.route('/resources/search/:value')
            .get(resourceController.search)
    }
}

export default ResourceRouter;