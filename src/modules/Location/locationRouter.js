class LocationRouter {
    constructor({router, auth, csrfMiddleware, locationController}) {
        this.router = router;
        this.initializeRoutes({auth, csrfMiddleware, locationController})
        return this.router;
    }
    
    initializeRoutes({auth, csrfMiddleware, locationController}) {
        this.router.route('/locations')
            .get(locationController.getAll)
            .post(auth.authenticate, csrfMiddleware, locationController.create);

        this.router.route('/locations/:id')
            .get(locationController.getOne)
        this.router.route('/locations/edit/:id')
            .put(auth.authenticate, csrfMiddleware, locationController.edit)

        this.router.route('/locations/delete/:id')
            .delete(auth.authenticate, csrfMiddleware, locationController.deleteOne)

        

        // this.router.route('/resources/search/:value')
        //     .get(locationController.search)
    }
}

export default LocationRouter;