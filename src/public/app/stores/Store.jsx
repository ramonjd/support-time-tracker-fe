import Dispatcher from '../dispatchers/Dispatcher.jsx';
import Constants from '../constants/Constants.jsx';
import Request from 'superagent';
import events from 'events';
import assign from 'object-assign';

let EventEmitter = events.EventEmitter;

let TIME_ENTRY_EVENT_ADDED = 'timeEntryAdded';
let GET_DEVELOPERS = 'getDevs';

let Store  = assign({}, EventEmitter.prototype, {

    getDevelopers(){

        Request
            .get('http://localhost:8080/charles/time-entry/list')
            .end((err, res) => {
                this.emitChange(GET_DEVELOPERS, JSON.parse(res.text));
            });

    },

    addTimeEntry(data) {
        console.log(data);
        Request.post('/api/crons')
            .type('form')
            .send({'developer' : encodeURIComponent(data.developer)})
            .send({'date' : encodeURIComponent(data.selectedDay)})
            .send({'hours' : encodeURIComponent(data.selectedHours)})
            .send({'task' : encodeURIComponent(data.selectedTask)})
            .end((err, res) => {
                this.emitChange(TIME_ENTRY_EVENT_ADDED, res);
            });
    },
    addGetDevsListener: function (callback) {
        this.on(GET_DEVELOPERS, callback);
    },

    removeGetDevsListener: function (callback) {
        this.removeListener(GET_DEVELOPERS , callback);
    },
    addTimeEntryAddedListener: function (callback) {
        this.on(TIME_ENTRY_EVENT_ADDED, callback);
    },

    removeTimeEntryAddedListener: function (callback) {
        this.removeListener(TIME_ENTRY_EVENT_ADDED , callback);
    },
    emitChange(event, data = {}) {
        this.emit(event, data);
    }


});

Dispatcher.register((payload) => {
    switch(payload.actionType) {
        case Constants.ADD_TIME_ENTRY:
            Store.addTimeEntry(payload.data);
            break;
        case Constants.GET_DEVS:
            Store.getDevelopers();
            break;
        default:
            return true;
    }
    return true;
});

export default Store;
