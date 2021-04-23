import AuthorEntity from './authorEntity';

class AuthorService {
    constructor({authorRepository}) {
        this.authorRepo = authorRepository;
    }

    async getAll() {
        const authors = await this.authorRepo.findAll();
        return authors.map((author) => new AuthorEntity(author)); 
    }

   async getOne(id) {
      const authorsById = await this.authorRepo.findOne(id);
        return authorsById; 
    }

    async create(authorData) {
        console.log("HERE/////////////////////////", authorData);
        const authorEntity = new AuthorEntity(authorData);
        const newAuthor = await this.authorRepo.create(authorEntity);
        return new AuthorEntity(newAuthor);
    }

    async search (value) {
        const resultSearchAuthors = await this.authorRepo.search(value);
        resultSearchAuthors.map((author) => new AuthorEntity(author)); 
        if (resultSearchAuthors.length === 0) {
            return `Sorry, there is no author matching with ${value}`
        }
        return resultSearchAuthors;
    }
}

export default AuthorService;