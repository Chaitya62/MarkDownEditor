import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants  from '../constants/AppConstants';
import  appAPI from '../utils/appAPI';
import  {EventEmitter} from  'events';

const CHANGE_EVENT = 'change';

let _store ={
	'text': '',
};

class AppStoreClass extends EventEmitter{
		
	emitChange(){
		this.emit(CHANGE_EVENT);
	}

	addChangeListener(callback){
		this.on(CHANGE_EVENT,callback);
	}

	removeChangeListener(callback){
		this.removeListener(CHANGE_EVENT,callback);
	}

	appendToStore(name, value){
		if(typeof _store[name].push == 'undefined'){
			throw "Can append to Arrays only";
		}
		_store[name].push(value)
	}

	/* Use to changle value */

	change(name,value){
		_store[name] = value;
	}

	/*Use to get value of a paricular field from  app state */

	get(name){
	  return _store[name];
	}
}

let AppStore = new AppStoreClass();

AppDispatcher.register((payload)=>{
	const action = payload.action;

	switch(action.actionType){

		case AppConstants.CHANGE_MARKDOWN:
			AppStore.change('text',action.text)

			appAPI.storeText(action.text);
		/*
	
		Hanlde all the actions here
	
		*/
			
	}
	AppStore.emitChange();
	return true;
});




export default AppStore;

