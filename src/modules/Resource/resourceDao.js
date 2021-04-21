import { Model, DataTypes } from 'sequelize';
import db from '../../config/database';

class ResourceDao extends Model {
  static init(sequelize) {
    return super.init(
      {
        title: DataTypes.STRING,
        page_number: DataTypes.INTEGER,
        publication_date: DataTypes.DATE,
        description: DataTypes.STRING,
        quantity: DataTypes.INTEGER,
      },
      { sequelize, modelName: 'Resource' }
    );
  }
  static associate(models) {
    //define association here
    this.hasOne(models.Location, { foreignKey : 'location_id'})
    return this;
  }
  
};

ResourceDao.init(db.sequelize);

export default ResourceDao;
