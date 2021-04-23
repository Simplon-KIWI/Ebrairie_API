import ResourceEntity from "../Resource/resourceEntity.js";
// import ResourceEntity from "./resourceEntity";
import { Op } from "sequelize";

class ResourceAuthorRepository {
    constructor({resourceAuthorDao}) {
        this.resourceDao = resourceDao;
        this.resourceAuthorDao = resourceAuthorDao;
        this.resourceAuthorService = resourceAuthorService;
    }

    async findAll() {
        return await this.resourceDao.findAll();
    }

    async create(resourceAuthorEntity) {
        return createdResource = await this.resourceAuthorDao.create(resourceAuthorEntity);
    }
}

export default ResourceAuthorRepository;