class ResourceController {
    constructor({resourceService}) {
        this.resourceService = resourceService;
    }

    getAll = async ({res}) => {
        try {
            let resources = await this.resourceService.getAll();
            // res.send('hello moto');
            res.status(200).json(resources);
        } catch (err) {
            console.error(err);
            res.status(400).json(err.message);
        }
    }

    create = async (req, res) => {
        try {
            const resource = await this.resourceService.create({...req.body});
            res.status(201).json(resource);
        } catch (err) {
            console.error(err);
            res.status(400).json(err.message);
        }
    }

    search = async (req, res) => {
        try {
            const searchedResources = await this.resourceService.search(req.params.value)
            res.status(201).json(searchedResources);
            res.send
        } catch (err) {
            console.error(err);
            res.status(400).json(err.message);
        }
    }

}

export default ResourceController;