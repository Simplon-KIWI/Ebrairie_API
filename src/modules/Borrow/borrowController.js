class BorrowController {
    constructor({borrowService}) {
        this.borrowService  = borrowService;
    }

    getAll = async ({res}) => {
        try {
            let borrows = await this.borrowService.getAll();
            res.status(200).json(borrows);
        } catch (err) {
            console.error(err);
            res.status(400).json(err.message);
        }
    }
    create = async (req, res) => {
        try {
            const borrow = await this.borrowService.create({...req.body});
            res.status(201).json(borrow);
        } catch (err) {
            console.error(err);
            res.status(400).json(err.message);
        }
    }
}

export default BorrowController;
