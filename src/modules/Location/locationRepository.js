// import locationEntity from "./locationEntity";
// import { Op } from "sequelize";

class LocationRepository {
    constructor({locationDao}) {
        this.locationDao = locationDao;
    }

    async findAll() {
        return await this.locationDao.findAll();
    }

    async getOne(id) {
        return await this.locationDao.findOne({ where : { id : id }});
    }

    async create(locationEntity) {
        return await this.locationDao.create(locationEntity);
    }

    async edit(locationEntity, id) {
        return await this.locationDao.update(locationEntity, {
            where: {
                id : id
            }
        });
    }

    async deleteOne(id) {
        return await this.locationDao.destroy({ where : { id : id }});
    }
}

export default LocationRepository;