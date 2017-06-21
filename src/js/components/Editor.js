import React,{Component} from 'react';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';
import CodeMirror from 'react-codemirror';
import codemirror from 'codemirror';
require('codemirror/mode/markdown/markdown');



class Editor extends Component{
	constructor(props) {
		super(props);
		this.state = {
			code: this.props.text,
		}
	}
	componentDidMount() {
		
	
	}

	
	updateCode(newCode) {
		this.setState({
			code: newCode,
		});
	}
	render() {
		
		var options = {
			lineNumbers: true,
			viewportMargin: Infinity,
			mode: 'markdown',
			autofocus: true,
			smartIndent: true,
		};
		return(
			<div className="container" >
				<CodeMirror  onCursorActivity={this.handleKeyPress} value={this.state.code} onChange={this.updateCode.bind(this)} className="form-control editor"  ref="text" options={options} />
			</div>
		)
	}
	handleKeyPress(e){
		var text = e.getValue();
		AppActions.changeMarkdown(text);
	}

}

export default Editor;