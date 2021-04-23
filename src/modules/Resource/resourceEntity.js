class ResourceEntity {
    constructor({id, title, page_number, publication_date, description, author_id, genre, category, quantity, location_id }) {
        this.id = id;
        this.title = title;
        this.page_number = page_number;
        this.publication_date = publication_date;
        this.description = description;
        this.author_id = author_id;
        this.genre = genre;
        this.category = category;
        this.quantity = quantity;
        this.location_id = location_id;
    }

}
export default ResourceEntity; 