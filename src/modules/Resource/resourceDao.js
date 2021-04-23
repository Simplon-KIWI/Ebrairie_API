import { Model, DataTypes, Sequelize, INTEGER } from 'sequelize';
import db from '../../config/database';

class ResourceDao extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        title: DataTypes.STRING,
        page_number: DataTypes.INTEGER,
        publication_date: DataTypes.DATE,
        description: DataTypes.STRING,
        author: DataTypes.STRING,
        genre: DataTypes.STRING,
        category: DataTypes.STRING,
        quantity: DataTypes.INTEGER,
      },
      { sequelize, modelName: 'Resource' }
    );
  }
  static associate(models) {
    this.belongsToMany(models.User, {
      as: 'resourceBorrow',
      through: {
        model: 'Borrow',
        unique: false,
      },
      foreignKey: 'resource_id',
      constraints: false,
    });
    this.belongsTo(models.Location, {
      foreignKey: 'location_id',
    });
    return this;
  }
}

ResourceDao.init(db.sequelize);

export default ResourceDao;
