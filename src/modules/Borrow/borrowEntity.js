class BorrowEntity {
    
    constructor({id, resource_id, user_id,resource_quantity, transaction}) {
        this.id = id;
        this.resource_id = resource_id;
        this.user_id = user_id;
        this.resource_quantity = resource_quantity;
        this.transaction = transaction;
    }
    
}

export default BorrowEntity;