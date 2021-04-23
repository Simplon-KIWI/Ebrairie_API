class AuthorRepository {
constructor({authorDao}) {
    this.authorDao = authorDao;
}

async findAll() {
    return await this.authorDao.findAll();
}

async getOne(id) {
    return await this.authorDao.findOne({ where: {id: id}});
}


async create(authorEntity) {
    return await this.authorDao.create(authorEntity);
  }

  async edit(authorEntity, id) {
    const authorFound = await this.authorDao.findByPk(id);
    if (!authorFound) {
      return authorFound;
    }
    return authorFound.update(authorEntity);
  }

  async deleteOne(id) {
    return await this.authorDao.destroy({ where: { id: id } });
  }
}

export default AuthorRepository;