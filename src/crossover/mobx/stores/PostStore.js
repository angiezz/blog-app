import { observable, action, runInAction } from 'mobx';
import { getBlogDetail } from '../../api/blogApi';

export default class PostStore {
  @observable blogDetail = {};
  @observable requestLoading = true;
  @observable loadingError = false;

  constructor(initialState) {
    Object.assign(this, initialState);
  }

  @action
  async getBlogDetail(id) {
    // if (!this.requestLoading) {
    //   this.requestLoading = true;

    let blogDetail = {};

    try {
      blogDetail = await getBlogDetail(id);
      this.handleBlogDetailResult(blogDetail);
    } catch (error) {
      runInAction("Error occurred trying to get random user", () => {
        // this.requestLoading = false;
        // this.loadingError = true;
      });
    }
    // } else {
    //   console.log("Still busy loading random user...");
    // }\
    
  }

  @action
  handleBlogDetailResult(detail = {}) {
    this.blogDetail = detail;
  }
}
