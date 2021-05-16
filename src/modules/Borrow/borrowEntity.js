class BorrowEntity {
    
    constructor({id, resource_id, user_id,resource_quantity, transaction}) {
        this.id = id;
        this.resource_id = resource_id;
        this.user_id = user_id;
        this.resource_quantity = resource_quantity;
        // this.resource_title = resource_title;
        this.transaction = transaction;
    }
    
    validateQuantity() {
        if (this.resource_quantity < 0 || this.resource_quantity !== null ) {
            return true;
        }else {
            return false;
        }
         
    }
}

export default BorrowEntity;