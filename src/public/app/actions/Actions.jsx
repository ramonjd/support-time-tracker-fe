import Dispatcher from '../dispatchers/Dispatcher.jsx';
import Constants from '../constants/Constants.jsx';

let Actions = {

    addSupportTimeEntry : function (supportTimeEntry) {
        Dispatcher.dispatch({
            actionType: Constants.ADD_TIME_ENTRY,
            data: supportTimeEntry
        });
    } 

};

export default Actions;