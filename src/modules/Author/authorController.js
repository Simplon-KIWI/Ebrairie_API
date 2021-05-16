class AuthorController {
    constructor({authorService}) {
        this.authorService = authorService;
    }

    getAll = async ({res}) => {
        try {
            let authors = await this.authorService.getAll();
            // res.send('hello moto');
            res.status(200).json(authors);
        } catch (err) {
            console.error(err);
            res.status(400).json(err.message);
        }
    }


    getOne = async (req, res) => {
        try {
            let authors = await this.authorService.getOne(req.params.id);
            res.status(200).json(authors);
        } catch (err) {
            console.error(err);
            res.status(400).json(err.message);
        }
    }

    create = async (req, res) => {
        try {
            const author = await this.authorService.create({...req.body});
            res.status(201).json(author);
        } catch (err) {
            console.error(err);
            res.status(400).json(err.message);
        }
    }

    search = async (req, res) => {
        try {
            const searchedAuthors = await this.authorService.search(req.params.value)
            res.status(201).json(searchedAuthors);
            res.send
        } catch (err) {
            console.error(err);
            res.status(400).json(err.message);
        }
    }

 

}

export default AuthorController;