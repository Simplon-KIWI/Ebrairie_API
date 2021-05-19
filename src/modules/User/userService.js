import UserEntity from './userEntity';

class UserService {
  constructor({ userRepository }) {
    this.userRepo = userRepository;
  }

  async getAll() {
    const users = await this.userRepo.findAll();
    return users.map((user) => new UserEntity(user));
  }

  async register(userData) {
    const userEntity = new UserEntity(userData);
    if (!userEntity.validateReader())
      throw new Error('User entity validation error: Missing parameters');

    const newUser = await this.userRepo.createReader(userEntity);
    return new UserEntity(newUser);
  }

  async registerAdmin(userData) {
    const userEntity = new UserEntity(userData);
    if (!userEntity.validateAdmin())
      throw new Error('User entity validation error: Missing parameters');

    const newUser = await this.userRepo.createAdmin(userEntity);
    return new UserEntity(newUser);
  }

  async loginAdmin(userData) {
    const userEntity = new UserEntity(userData);
    if (!userEntity.validate())
      throw new Error('User entity validation error: Not authorized');
    const user = await this.userRepo.findByEmail(userEntity);
    if (!user) throw new Error('Account do not exist');

    const passwordMatch = await this.userRepo.compareHash(
      userEntity.password,
      user.password
    );
    if (!passwordMatch) throw new Error('Password do not match');

    return new UserEntity(user);
  }

  async me(userId) {
    const user = await this.userRepo.findById(userId);
    if (!user) throw new Error('Account do not exist');
    return new UserEntity(user);
  }
}

export default UserService;
