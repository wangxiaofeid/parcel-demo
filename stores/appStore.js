import { observable, action, computed } from 'mobx';
// import UIStore from './uiStore';

export default class AppStore {
    @observable current = 1;
    @observable loading = false;//应用类型组

    constructor() {
    }

    @action setLoading(loading) {
        this.loading = loading;
    }

    @action currentPlus() {
        this.loading = true;
        setTimeout(() => {
            this.current++;
            this.loading = false;
        }, 1000);
    }
}
