class BorrowRepository {
    constructor({borrowDao}) {
        this.borrowDao = borrowDao;
    }

    async findAll() {
        return await this.borrowDao.findAll();
    }
    async create(borrowEntity) {
        return await this.borrowDao.create(borrowEntity);
    }
}

export default BorrowRepository;