const { v4: uuid4 } = require('uuid');

class Post {
    constructor(idUser, likes, comments, shares, post) {
        this.id = uuid4();
        this.idUser = idUser;
        this.likes = likes;
        this.comments = comments;
        this.shares = shares;
        this.post = post;
    }
}

module.exports = Post;
