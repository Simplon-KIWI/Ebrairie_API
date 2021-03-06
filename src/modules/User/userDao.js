import { Model, DataTypes, Sequelize } from 'sequelize';
import db from '../../config/database';

class UserDao extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        lastname: { type: DataTypes.STRING, allowNull: false },
        firstname: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false },
        role: {
          type: DataTypes.ENUM('reader', 'admin'),
          defaultValue: 'reader',
          allowNull: false,
        },
      },
      { sequelize, modelName: 'User' }
    );
  }
  static associate(models) {

    this.belongsToMany(models.Resource, { 
      as: "userBorrow",
      through: {
        model: 'Borrow',
        unique: false,
      },
      foreignKey:  'user_id',
      constraints: false,
   });

    return this;
  }
}

UserDao.init(db.sequelize);

export default UserDao;
