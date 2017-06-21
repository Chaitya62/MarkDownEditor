import AppActions  from '../actions/AppActions';


class AppAPIClass{
	storeText(text){
		localStorage.setItem('markdownTEXT',text);
	}
	getText(){
		var text = localStorage.getItem('markdownTEXT');
		if(text== null){
			text = '';
		}
		AppActions.changeMarkdown(text);
		// AppActions.changeMarkdown(text);
	}
}

var AppAPI = new AppAPIClass();

export default AppAPI;