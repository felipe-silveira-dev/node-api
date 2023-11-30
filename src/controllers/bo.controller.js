class BoController {
    index(req, res) {
        const students = [
            { id: 1, name: 'John Doe' },
            { id: 2, name: 'Felipe Doe' },
            { id: 3, name: 'Samuel Doe' },
        ];
        res.json(students);
    }
}

export const boController = new BoController();