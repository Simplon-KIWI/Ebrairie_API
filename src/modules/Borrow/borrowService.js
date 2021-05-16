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
        if (borrowEntity.validateQuantity()) {
            return new BorrowEntity(newBorrow);
        } else {
            console.log("===> Il n'y a plus de ressource de ce titre")
            return borrowEntity.resource_quantity
        }
        
    }
    async returnResource(borrowData, borrowId) {
        const borrowEntity = new BorrowEntity(borrowData);
        const returnedBorrow = await this.borrowRepo.returnResource(borrowEntity, borrowId);
        return new BorrowEntity(returnedBorrow);
    }
    async getBorrowById(borrowId) {
        const borrows = await this.borrowRepo.findOne(borrowId);

        console.log("****** enter in SERVICE borrows:", borrows)
        return borrows;
        
    }
}

export default BorrowService;