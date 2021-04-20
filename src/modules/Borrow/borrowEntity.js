class BorrowEntity {
    
    constructor({id, userId, resourceId, transaction}) {
        this.id = id;
        this.userId = userId;
        this.resourceId = resourceId;
        this.transaction = transaction;
    }

}

export default BorrowEntity;