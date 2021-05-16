import ResourceEntity from "./resourceEntity";
import { Op } from "sequelize";

class ResourceRepository {
constructor({resourceDao}, resourceAuthorService) {
        this.resourceDao = resourceDao;
        this.resourceAuthorService = resourceAuthorService;
    }

    async findAll() {
        return await this.resourceDao.findAll();
    }

  async findOne(id) {
       return await this.resourceDao.findOne({ where: { id : id } });
   }

    async create(resourceEntity) {
        const author_id = resourceEntity.author_id

        // const resourceEntity.author_id = resourceAuthorEntity.author_id
        const createdResource = await this.resourceDao.create(resourceEntity);
        const resourceAuthor = {
            author_id : author_id,
            resource_id : createdResource.id
        }
        //await this.resourceAuthorService.create(resourceAuthor.resource_id, resourceAuthor.author_id)
        return createdResource;
    }

    async search(value) {
        return await this.resourceDao.findAll({
            where: {
                title : {
                    [Op.like] : `%${value}%`
                }
            }
        });
    }
}

export default ResourceRepository;