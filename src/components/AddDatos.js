import React, {Component} from 'react';
import Navigation from './Navigation';

class AddDatos extends Component {

	constructor(props){
		super(props);
		this.state= {
	    	web:"",
	    	user:"",
	    	password:"",
	    	email:"",
	    	clave:"",
	    	observaciones:""
		};
		this.handleInput= this.handleInput.bind(this);
		this.handleSubmit= this.handleSubmit.bind(this);
	}

	handleInput(e){
		const { value, name} = e.target;
		this.setState({
			[name]: value
		})
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.onAddDato(this.state);
    	this.setState({
	    	web:"",
	    	user:"",
	    	password:"",
	    	email:"",
	    	clave:"",
	    	observaciones:""
    	});
	}

	render(){
		return(
			<div className="container">
					<Navigation />
					<h2>Añadir datos</h2>
					<form className="add-form" onSubmit={this.handleSubmit}>
						<div className="line-form">
							<div className="rotulo-form">Web</div>
							<input
								type="text"
					            name="web"
					            className="input-form"
					            onChange= { this.handleInput}
					            value= {this.state.web}
					            placeholder="Web"
							/>
						</div>
						<div className="line-form">
							<div className="rotulo-form">Usuario</div>
							<input
								type="text"
					            name="user"
					            className="input-form"
					            onChange= { this.handleInput}
					            value= {this.state.user}
					            placeholder="Usuario"
							/>
						</div>
						<div className="line-form">
							<div className="rotulo-form">Contraseña</div>
							<input
								type="text"
					            name="password"
					            className="input-form"
					            onChange= { this.handleInput}
					            value= {this.state.password}
					            placeholder="Password"
							/>
						</div>
						<div className="line-form">
						<div className="rotulo-form">Correo</div>
							<input
								type="text"
					            name="email"
					            className="input-form"
					            onChange= { this.handleInput}
					            value= {this.state.email}
					            placeholder="Email"
							/>
						</div>
						<div className="line-form">
						<div className="rotulo-form">Clave</div>
							<input
								type="text"
					            name="clave"
					            className="input-form"
					            onChange= { this.handleInput}
					            value= {this.state.clave}
					            placeholder="Clave"
							/>
						</div>
						<div className="line-form">
						<div className="rotulo-form">Observaciones</div>
							<input
								type="text"
					            name="observaciones"
					            className="input-form"
					            onChange= { this.handleInput}
					            value= {this.state.observaciones}
					            placeholder="Observaciones "
							/>
						</div>
						<p></p>
						<button type="submit" className="add-btn">
            				SAVE
          				</button>
					</form>
			</div>
		);
	}
}

export default AddDatos;
