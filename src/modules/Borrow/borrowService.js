import BorrowEntity from './borrowEntity';

class BorrowService {
    constructor({borrowRepository}) {
        this.borrowRepo = borrowRepository;
    }

    async getAll() {
        const borrows = await this.borrowRepo.findAll();
        return borrows.map((borrow) => new BorrowEntity(borrow)); 
    }

    async create(borrowData) {
        const borrowEntity = new BorrowEntity(borrowData);
        const newBorrow = await this.borrowRepo.create(borrowEntity);
        return new BorrowEntity(newBorrow);
    }
    // async returnResource(borrowData) {
    //     const borrowEntity = new BorrowEntity(borrowData);
    //     const newBorrow = await this.borrowRepo.returnResource(borrowEntity);
    //     return new BorrowEntity(newBorrow);
    // }
    async getBorrowById() {
        const borrows = await this.borrowRepo.findOne();

        console.log("****** enter in SERVICE borrows:", borrows)
        // return borrows.map((allborrow) => new BorrowEntity(allborrow)
        // );
        return borrows
    }
}

export default BorrowService;