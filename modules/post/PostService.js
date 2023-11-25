import PostRepository from './PostRepository';
import PostModel from './PostModel';

export default class PostsService {
  postRepository;

  constructor() {
    this.postRepository = new PostRepository();
  }

  getPosts = async () => {
    const res = await this.postRepository.getPosts();

    return res.data
      .slice(0, 10)
      .map((item) => new PostModel(item.id, item.title));
  };
}
