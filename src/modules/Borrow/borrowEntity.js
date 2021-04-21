class BorrowEntity {
    
    constructor({id, userId, resourceId, resourceTitle, transaction}) {
        this.id = id;
        this.userId = userId;
        this.resourceId = resourceId;
        this.resourceTitle = resourceTitle;
        this.transaction = transaction;
    }

}

export default BorrowEntity;