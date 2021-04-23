class Server {
  constructor({ express, routes, cookieParser, csrfMiddleware }) {
    this.app = express();
    this.initializeBodyParsing(express);
    this.initializeMiddlewares({ cookieParser, csrfMiddleware });
    this.initializeApplicationRouter(routes);
  }

  initializeBodyParsing(express) {
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
  }

  initializeMiddlewares({ cookieParser, csrfMiddleware }) {
    this.app.use(cookieParser());
    this.app.get('/csrf', csrfMiddleware, (req, res) => {
      res.status(200).json(req.csrfToken());
    });
  }

  initializeApplicationRouter(routes) {
    this.app.use(routes);
  }

  listen(port) {
    this.app.listen(port, () =>
      console.log(`application started on port : ${port}`)
    );
  }
}

export default Server;
