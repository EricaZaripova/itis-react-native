import PostService from './PostService';
import LocalRepository from '../../api/LocalRepository';
import { makeAutoObservable } from 'mobx';

export class PostsStore {
  posts = [];
  isLoading = false;
  postService;
  localRepository;

  constructor() {
    this.postService = new PostService();
    this.localRepository = new LocalRepository('Posts');
    makeAutoObservable(this);
  }

  getPosts = () => {
    this.setIsLoading(true);

    this.postService
      .getPosts()
      .then((result) => {
        this.localRepository.setItems(result);
        this.setPosts(result);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.setIsLoading(false);
      });
  };

  setIsLoading = (isLoading) => {
    this.isLoading = isLoading;
  };

  setPosts = (posts) => {
    this.posts = posts;
  };

  removePostsFromLocal = async () => {
    this.localRepository.removeAll();
    this.setPosts((await this.localRepository.getItems()) ?? []);
  };
}

const postStore = new PostsStore();
export default postStore;
