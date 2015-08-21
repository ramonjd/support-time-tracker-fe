import AppDispatcher from '../dispatchers/Dispatcher.jsx';
import Constants from '../constants/Constants.jsx';

let Actions = {

    selectDay : function (selectedDate) {
        Dispatcher.dispatch({
            actionType: Constants.SELECT_DAY,
            date: selectedDate
        });
    } 

};

export default Actions;