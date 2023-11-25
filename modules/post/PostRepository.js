import AxiosClient from '../../api/AxiosClient';

export default class PostRepository {
  apiClient = null;

  constructor() {
    this.apiClient = new AxiosClient();
  }

  getPosts = () => {
    return this.apiClient.get({ url: '/posts' });
  };
}
