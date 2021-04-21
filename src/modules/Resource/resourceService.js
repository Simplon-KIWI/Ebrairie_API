import ResourceEntity from './resourceEntity';

class ResourceService {
    constructor({resourceRepository}) {
        this.resourceRepo = resourceRepository;
    }

    async getAll() {
        const resources = await this.resourceRepo.findAll();
        return resources.map((resource) => new ResourceEntity(resource)); 
    }

 //   async getOne(id) {
 //       const resourcesById = await this.resourceRepo.findOne(id);
 //       console.log(resourceById);
 //       return resourcesById; 
 //   }

    async create(resourceData) {
        const resourceEntity = new ResourceEntity(resourceData);
        const newResource = await this.resourceRepo.create(resourceEntity);
        return new ResourceEntity(newResource);
    }

}

export default ResourceService;