class ResourceEntity {
    constructor({id, borrowId, title, page_number, publication_date, description, quantity }) {
        this.id = id;
        this.borrowId = borrowId;
        this.title = title;
        this.page_number = page_number;
        this.publication_date = publication_date;
        this.description = description;
        this.quantity = quantity;
    }

}
export default ResourceEntity; 