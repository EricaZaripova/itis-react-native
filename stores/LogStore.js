import { makeAutoObservable } from 'mobx';


class LogStore {
    logList = [];

    constructor() {
        makeAutoObservable(this);
    }

    addLog(log) {
        this.logList = [...this.logList, log];
    }
}

const logStore = new LogStore();
export default logStore;
