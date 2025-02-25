class PostList {
    constructor() {
        this.posts = [];
    }
    getAllPosts() {
        return this.posts;
    }
    addPost(post) {
        this.posts.push(post);
    }
    getPostById(id) {
        const post = this.posts.find(post => post.id == id);
        if (!post) {
            throw new Error('Post not found');
        }
        return post;
    }
}