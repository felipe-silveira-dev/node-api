class BoController {
    index(req, res) {
        res.json('Hello World from students  controller list!');
    }
}

exports.boController = new BoController();