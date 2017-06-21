import React,{Component} from 'react';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';
import Editor from './Editor';
import Viewer from './Viewer';

const getAppState = ()=>{
	return{
		text: AppStore.get('text')
	};
}


class App extends Component{
	constructor(props) {
		super(props);
		this.state= getAppState();
	}
	componentDidMount() {
		AppStore.addChangeListener(this._onChange.bind(this));
	}
	componentWillUnmount() {
		AppStore.removeChangeListener(this._onChange.bind(this));
	}
	render() {
		
		return(
			<div className="container-fluid">

				<div className="row">
					<div className="col-md-6">
						<Editor {...this.state} />
					</div>
					<div className="col-md-6">
						<Viewer {...this.state} />
					</div>
				</div>
			</div>
		)
	}

	_onChange(){
		this.setState(getAppState());
	}
}

export default App;