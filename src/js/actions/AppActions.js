import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants  from '../constants/AppConstants';



class AppActionsClass{
	
	changeMarkdown(text){
		AppDispatcher.handleViewAction({
		 	actionType: AppConstants.CHANGE_MARKDOWN,
		 	text: text
		});
	}

	
}

var AppActions = new AppActionsClass();

export default AppActions;