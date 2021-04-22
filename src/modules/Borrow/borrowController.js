const modelBorrowDao = require("../Borrow/borrowDao");

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
    // returnResource = async (req, res) => {
    //     try{
    //         const data = req.body
    //         const returnBorrow = await this.borrowService.returnResource(req.params.borrowId , data);
    //         res.status(201).json({return : returnBorrow});
    //     } catch (err) {
    //         console.error(err);
    //         res.status(400).json(err.message);
    //     }
    // }
    getBorrowById = async (req, res) => {
        try {
            let borrows = await this.borrowService.getBorrowById(req.params.borrowId);

            // console.log("🚀 ~ file: borrowController.js ~ line 42 ~ BorrowController ~ getBorrowById= ~ borrows", borrows)

            if (borrows) {
                res.status(201).json({ borrows: borrows })   
            }

        } catch (err) {
            console.error(err);
            res.status(400).json(err.message);
        }
       
    }
}

export default BorrowController;
