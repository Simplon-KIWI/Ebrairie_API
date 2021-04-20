// import ResourceEntity from "./resourceEntity";

class ResourceRepository {
    constructor({resourceDao}) {
        this.resourceDao = resourceDao;
    }

    async findAll() {
        return await this.resourceDao.findAll();
    }

    async create(resourceEntity) {
        return await this.resourceDao.create(resourceEntity);
    }
}

export default ResourceRepository;