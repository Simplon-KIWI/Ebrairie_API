// import locationEntity from "./locationEntity";
// import { Op } from "sequelize";

class LocationRepository {
  constructor({ locationDao }) {
    this.locationDao = locationDao;
  }

  async findAll() {
    return await this.locationDao.findAll();
  }

  async getOne(id) {
    return await this.locationDao.findOne({ where: { id: id } });
  }

  async create(locationEntity) {
    return await this.locationDao.create(locationEntity);
  }

  async edit(locationEntity, id) {
    const locationFound = await this.locationDao.findByPk(id);
    if (!locationFound) {
      return locationFound;
    }
    return locationFound.update(locationEntity);
  }

  async deleteOne(id) {
    return await this.locationDao.destroy({ where: { id: id } });
  }
}

export default LocationRepository;
