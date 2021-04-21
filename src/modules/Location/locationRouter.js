class LocationRouter {
    constructor({router, locationController}) {
        this.router = router;
        this.initializeRoutes({locationController})
        return this.router;
    }
    
    initializeRoutes({locationController}) {
        this.router.route('/locations')
            .get(locationController.getAll)
            .post(locationController.create);

        this.router.route('/locations/:id')
            .get(locationController.getOne)
        this.router.route('/locations/edit/:id')
            .put(locationController.edit)

        this.router.route('/locations/delete/:id')
            .delete(locationController.deleteOne)

        

        // this.router.route('/resources/search/:value')
        //     .get(locationController.search)
    }
}

export default LocationRouter;