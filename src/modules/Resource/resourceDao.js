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
        quantity: DataTypes.INTEGER,
      },
      { sequelize, modelName: 'Resource' }
    );
  }
  static associate(models) {
    this.belongsToMany(models.User, { 
      as: 'resourceBorrow',
      through: 'Borrow',
   //  foreignKey : 'resource_id',
    });
    return this;
  }
}

ResourceDao.init(db.sequelize);

export default ResourceDao;
