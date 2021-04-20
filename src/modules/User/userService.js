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
    if (!userEntity.validate())
      throw new Error('User entity validation error: Missing parameters');

    const newUser = await this.userRepo.create(userEntity);
    return new UserEntity(newUser);
  }
}

export default UserService;
