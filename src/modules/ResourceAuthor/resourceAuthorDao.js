import { Model, DataTypes, Sequelize } from 'sequelize';
import db from '../../config/database';

class ResourceAuthorDao extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
      },
      { sequelize, modelName: 'ResourceAuthor' }
    );
  }
  static associate() {
    //define association here
    return this;
  }
  
};

ResourceAuthorDao.init(db.sequelize);

export default ResourceAuthorDao;
