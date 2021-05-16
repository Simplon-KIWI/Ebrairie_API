import { Model, DataTypes } from 'sequelize';
import db from '../../config/database';

class BorrowDao extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        resource_quantity: DataTypes.INTEGER,
        transaction: DataTypes.STRING,
      },
      { sequelize, modelName: 'Borrow' }
    );
  }
  static associate(models) {
    this.belongsTo(models.Resource, {
      foreignKey: 'resource_quantity',
      unique: false,
    })
    this.belongsTo(models.Resource, {
      foreignKey: 'resource_id',
    })
    return this;
  }
  
};

BorrowDao.init(db.sequelize);

export default BorrowDao;
