import { observable, action, computed } from 'mobx';
// import UIStore from './uiStore';

export default class AppStore {
    // uiStore;
    @observable loading = false;//应用类型组

    constructor() {
        // this.uiStore = new UIStore(this);
    }

    @action setLoading(loading) {
        this.loading = loading;
    }
}
