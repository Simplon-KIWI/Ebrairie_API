import ResourceEntity from "./resourceEntity";
// import ResourceEntity from "./resourceEntity";
import { Op } from "sequelize";

class ResourceRepository {
    constructor({resourceDao}) {
        this.resourceDao = resourceDao;
    }

    async findAll() {
        return await this.resourceDao.findAll();
    }

  async findOne(id) {
       return await this.resourceDao.findOne({ where: { id : id } });
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