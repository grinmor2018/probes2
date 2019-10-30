import React, {Component} from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

class Navigation extends Component {

	constructor(props){
		super(props);
		const { history } = props;
	}

	render(){
		return(
			<div className="navigator">
				<button className= "navigator-button" onClick={() => this.props.history.push('/BuscarDatos')}>
					BUSCAR
				</button>
				<button className= "navigator-button" onClick={() => this.props.history.push('/AddDatos')}>
					AÑADIR
				</button>
				<button className= "navigator-button" onClick={() => this.props.history.push('/EditDatos')}>
					EDITAR
				</button>
				<button className= "navigator-button" onClick={() => this.props.history.push('/BorrarDatos')}>
					BORRAR
				</button>
				<button className= "navigator-button" onClick={() => this.props.history.push('/TablaDatos')}>
					VER
				</button>
				<p></p>
			</div>
		)
	}
}

export default withRouter(Navigation);