class BorrowEntity {
    
    constructor({id, resource_id, user_id, transaction}) {
        this.id = id;
        this.resource_id = resource_id;
        this.user_id = user_id;
        this.transaction = transaction;
    }
    
}

export default BorrowEntity;