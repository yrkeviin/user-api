const User = require('../models/User');
const UserList = require('../models/UserList');

const lista = new UserList();

//Opcional add usuários fixos
lista.addUser(new User('Kevin', 'kevin@gmail.com', 17));
lista.addUser(new User('Trixie', 'trixie@gmail.com', 18));

const router = {
    getAllUsers: (req, res) => {
        res.json(lista.getAllUsers());
    },
    addUser: (req, res) => {
        const { name, email, age } = req.body;
        const user = new User(name, email, age);
        lista.addUser(user);
        res.status(201).json({message: 'Usuário criado com sucesso!', user});
    },
    userById: (req, res) => {
        const { id } = req.params;
        const user = lista.getUserById(id);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.json(user);
    },
}

module.exports = router;