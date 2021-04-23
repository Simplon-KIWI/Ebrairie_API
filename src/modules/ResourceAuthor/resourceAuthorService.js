import ResourceAuthorEntity from './resourceAuthorEntity';

class ResourceAuthorService {
    constructor({resourceAuthorRepository}) {
        this.resourceAuthorRepo = resourceAuthorRepository;
    }

    async getAll() {
        const resourcesAuthor = await this.resourceAuthorRepo.findAll();
        return resourcesAuthor.map((resource) => new ResourceAuthorEntity(resource)); 
    }

//    async getOne(id) {
//       const resourcesById = await this.resourceAuthorRepo.findOne(id);
//         return resourcesById;
//     }

    async create(resource_id, author_id) {
        const resourceAuthorEntity = new ResourceAuthorEntity({resource_id, author_id});
        const newResourceAuthor = await this.resourceAuthorRepo.create(resourceAuthorEntity);
        return new ResourceAuthorEntity(newResourceAuthor);
    }

    // async search (value) {
    //     const resultSearchResources = await this.resourceAuthorRepo.search(value);
    //     resultSearchResources.map((resource) => new ResourceAuthorEntity(resource)); 
    //     if (resultSearchResources.length === 0) {
    //         return `Sorry, there is no resource matching with ${value}`
    //     }
    //     return resultSearchResources;
    //     console.log(resources);
    // }
}

export default ResourceAuthorService;