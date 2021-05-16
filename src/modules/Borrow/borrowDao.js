import { Model, DataTypes, Sequelize } from 'sequelize';
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
        transaction: DataTypes.STRING,
      },
      { sequelize, modelName: 'Borrow' }
    );
  }
  static associate() {
    //define association here
    return this;
  }
  
};

BorrowDao.init(db.sequelize);

export default BorrowDao;
