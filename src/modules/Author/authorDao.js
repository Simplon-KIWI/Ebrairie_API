import { Model, DataTypes } from 'sequelize';
import db from '../../config/database';

class AuthorDao extends Model {
static init(sequelize) {
    return super.init(
{
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    description: DataTypes.STRING,
},

{sequelize, modelName: "Author"}
    );
}

static associate(models) {

this.belongsToMany(models.Resource, {
as: "authorResource",
through: {
model: "ResourceAuthor",
unique: false,
},
foreignKey: 'author_id',
});

return this;
}
}

AuthorDao.init(db.sequelize);
export default AuthorDao;