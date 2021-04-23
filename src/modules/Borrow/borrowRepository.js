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
    async returnResource(borrowEntity, borrowId) {
        return await this.borrowDao.update(borrowEntity, { where : {id : borrowId}});
    }
    async findOne(borrowId) {
        console.log("_____ enter in REPO findOne")
        return await this.borrowDao.findOne({where: {id: borrowId}});
    }

}

export default BorrowRepository;