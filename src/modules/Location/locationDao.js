import { Model, DataTypes } from 'sequelize';
import db from '../../config/database';

class LocationDao extends Model {
  static init(sequelize) {
    return super.init(
      {
        row: DataTypes.INTEGER,
        shelf: DataTypes.INTEGER,
      },
      { sequelize, modelName: 'Location' }
    );
  }
  static associate(models) {
    this.hasMany(models.Resource, {
      foreignKey: 'location_id',
    });

    return this;
  }
}

LocationDao.init(db.sequelize);

export default LocationDao;
