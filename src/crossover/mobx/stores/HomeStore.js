import { observable, action, runInAction } from 'mobx';

import { getBlogList } from '../../api/blogApi';

export default class HomeStore {
  @observable blogList = [];
  @observable requestLoading = true;
  @observable loadingError = false;

  constructor(initialState) {
    Object.assign(this, initialState);
  }

  @action handleGetBlogListResult({ rows }) {
    this.requestLoading = false;
    this.loadingError = false;
    this.blogList = rows;
  }

  @action
  async getBlogList(params) {
    // if (!this.requestLoading) {
    //   this.requestLoading = true;

    let blogData = {};

    try {
      blogData = await getBlogList(params);
      this.handleGetBlogListResult(blogData);
    } catch (error) {
      runInAction("Error occurred trying to get blog list", () => {
        // this.requestLoading = false;
        // this.loadingError = true;
      });
    }
    // } else {
    //   console.log("Still busy loading random user...");
    // }
  }
  @action
  async initBlogList() {
    const params = {
      offset: 0,
      limit: 5,
      tags: '',
      catalog_id: 3,
      order: 'DESC',
    };
    await this.getBlogList(params);
  }
}
