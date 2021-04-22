import LocationEntity from './locationEntity';

class LocationService {
    constructor({locationRepository}) {
        this.locationRepo = locationRepository;
    }

    async getAll() {
        const locations = await this.locationRepo.findAll();
        return locations.map((location) => new locationEntity(location)); 
    }

    async getOne(id) {
        const location = await this.locationRepo.getOne(id);
        return new LocationEntity(location)
    }
//
    async create(locationData) {
        const locationEntity = new LocationEntity(locationData);
        const newLocation = await this.locationRepo.create(locationEntity);
        return new LocationEntity(newLocation);
    }

    async edit(locationData, id) {
        const locationEntity = new LocationEntity(locationData);
        const editedLocation = await this.locationRepo.edit(locationEntity, id);
        return new LocationEntity(editedLocation);
    }

    async deleteOne(id) {
        const location = await this.locationRepo.deleteOne(id);
        return new LocationEntity(location)
    }
}

export default LocationService;