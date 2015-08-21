import Dispatcher from '../dispatchers/Dispatcher.jsx';
import Constants from '../constants/Constants.jsx';
import Request from 'superagent';
import events from 'events';
import assign from 'object-assign';

let EventEmitter = events.EventEmitter;

let TIME_ENTRY_EVENT_ADDED = 'timeEntryAdded';

let Store  = assign({}, EventEmitter.prototype, {

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
        default:
            return true;
    }
    return true;
});

export default Store;