class UserRepository {
  constructor({ userDao, bcrypt, uuidv4 }) {
    this.userDao = userDao;
    this.uuidv4 = uuidv4;
    this.bcrypt = bcrypt;
  }

  async findAll() {
    return await this.userDao.findAll();
  }

  async create(userEntity) {
    userEntity.id = this.uuidv4();
    const salt = this.bcrypt.genSaltSync(10);
    userEntity.password = this.bcrypt.hashSync(userEntity.password, salt);
    return await this.userDao.create(userEntity);
  }

  async findByEmail(userEntity) {
    return await this.userDao.findOne({ where: { email: userEntity.email } });
  }

  compareHash = async (password, hash) =>
    await this.bcrypt.compareSync(password, hash);
}

export default UserRepository;
