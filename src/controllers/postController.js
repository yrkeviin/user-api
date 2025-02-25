const Post = require('../models/Post');
const PostList = require('../models/PostList');

const lista = new PostList();

lista.addPost(new Post('1', 10, 5, 2, 'Post 1'));
lista.addPost(new Post('2', 20, 10, 3, 'Post 2'));
lista.addPost(new Post('1', 30, 15, 5, 'Post 3'));
lista.addPost(new Post('2', 40, 20, 7, 'Post 4'));
lista.addPost(new Post('1', 50, 25, 9, 'Post 5'));

const router = {
    getAllPosts: (req, res) => {
        const posts = lista.getAllPosts();
        res.json(posts);
    },
    addPost: (req, res) => {
        const { idUser, likes, comments, shares, post } = req.body;
        const postagem = new Post(idUser, likes, comments, shares, post);
        lista.addPost(postagem);
        res.status(201).json({message: 'Post criado com sucesso!', postagem});
    },
    postById: (req, res) => {
        const { id } = req.params;
        const post = lista.getPostById(id);
        if (!post) {
            return res.status(404).json({ message: 'Post não encontrado' });
        }
        res.json(post);
    },
    updatePost: (req, res) => {
        const { id } = req.params;
        const { idUser, likes, comments, shares, post } = req.body;
        const postagem = lista.updatePost(id, { idUser, likes, comments, shares, post });
        res.json({message: 'Post atualizado com sucesso', postagem});
    },
    deletePost: (req, res) => {
        const { id } = req.params;
        lista.deletePost(id);
        res.json({message: 'Post deletado com sucesso'});
    }
}

module.exports = router;
