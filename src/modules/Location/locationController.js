class LocationController {
    constructor({locationService}) {
        this.locationService = locationService;
    }

    getAll = async ({res}) => {
        try {
            let locations = await this.locationService.getAll();
            // res.send('hello moto');
            res.status(200).json(locations);
        } catch (err) {
            console.error(err);
            res.status(400).json(err.message);
        }
    }

    getOne = async (req, res) => {
        try {
            let locations = await this.locationService.getOne(req.params.id);
            // res.send('hello moto');
            res.status(200).json(locations);
        } catch (err) {
            console.error(err);
            res.status(400).json(err.message);
        }
    }

    create = async (req, res) => {
        try {
            const location = await this.locationService.create({...req.body});
            res.status(201).json(location);
        } catch (err) {
            console.error(err);
            res.status(400).json(err.message);
        }
    }

    
    edit = async (req, res) => {
        try {
            const resource = await this.locationService.edit({...req.body}, req.params.id);
            res.status(201).json(resource);
        } catch (err) {
            console.error(err);
            res.status(400).json(err.message);
        }
    }

    deleteOne = async (req, res) => {
        try {
            let locations = await this.locationService.deleteOne(req.params.id);
            // res.send('hello moto');
            res.status(200).json(locations);
        } catch (err) {
            console.error(err);
            res.status(400).json(err.message);
        }
    }
}

export default LocationController;