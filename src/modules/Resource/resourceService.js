import ResourceEntity from './resourceEntity';

class ResourceService {
    constructor({resourceRepository}) {
        this.resourceRepo = resourceRepository;
    }

    async getAll() {
        const resources = await this.resourceRepo.findAll();
        return resources.map((resource) => new ResourceEntity(resource)); 
    }

   async getOne(id) {
      const resourcesById = await this.resourceRepo.findOne(id);
        return resourcesById; 
    }

    async create(resourceData) {
        const resourceEntity = new ResourceEntity(resourceData);
        const newResource = await this.resourceRepo.create(resourceEntity);
        return new ResourceEntity(newResource);
    }

    async search (value) {
        const resultSearchResources = await this.resourceRepo.search(value);
        resultSearchResources.map((resource) => new ResourceEntity(resource)); 
        if (resultSearchResources.length === 0) {
            return `Sorry, there is no resource matching with ${value}`
        }
        return resultSearchResources;
        console.log(resources);
    }
}

export default ResourceService;