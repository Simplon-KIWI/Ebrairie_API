// import ResourceEntity from "./resourceEntity";
import { Op } from "sequelize";

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

    async search(value) {
        return await this.resourceDao.findAll({
            where: {
                title : {
                    [Op.like] : `${value}%`
                }
            }
        });
    }
}

export default ResourceRepository;