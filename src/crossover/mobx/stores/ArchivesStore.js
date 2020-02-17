import { observable, action, runInAction } from 'mobx';

import { getArchives } from '../../api/blogApi';


export default class ArchivesStore {
  @observable archivesList = [];

  constructor(initialState) {
    Object.assign(this, initialState);
  }

  @action
  async getArchivesList() {
    try {
      const result = await getArchives({ year: '2019' });
      this.archivesList = [].concat(Object.assign({}, result, { year: '2019' }));
    } catch (error) {
      runInAction("Error occurred trying to get random user", () => {
      });
    }
  }
}
