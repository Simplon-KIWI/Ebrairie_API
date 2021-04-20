import { Model, DataTypes } from 'sequelize';
import db from '../../config/database';

class RessourceDao extends Model {
  static init(sequelize) {
    return super.init(
      {
        title: DataTypes.STRING,
        page_number: DataTypes.INTEGER,
        publication_date: DataTypes.DATE,
        description: DataTypes.STRING,
        quantity: DataTypes.INTEGER,
      },
      { sequelize, modelName: 'Ressource' }
    );
  }
  static associate(models) {
    //define association here
    return this;
  }
};

RessourceDao.init(db.sequelize);

export default RessourceDao;
