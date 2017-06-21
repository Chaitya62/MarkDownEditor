import React,{Component} from 'react';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';
import marked from 'marked';




class Viewer extends Component{
	constructor(props) {
		super(props);
	}
	render() {
		var text = marked(this.props.text);
		return(
			<div className="container">
				<div className="form-control viewer" dangerouslySetInnerHTML={{'__html': text}}>
					
				</div >
			</div>
		)
	}

}

export default Viewer;