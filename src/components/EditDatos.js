import React, {Component} from 'react';
import Navigation from './Navigation';

class EditDatos extends Component {

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
		this.posicion=0;
		this.handleInput= this.handleInput.bind(this);
		this.handleSubmit= this.handleSubmit.bind(this);

	}

	handleRowSelection(e,i) {
    	this.setState({
	    	web:e.web,
	    	user:e.user,
	    	password:e.password,
	    	email:e.email,
	    	clave:e.clave,
	    	observaciones:e.observaciones
    	})
    	this.posicion = i;
	}
	handleInput(e){
		const { value, name} = e.target;
		this.setState({
			[name]: value
		})
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.onEditarDato(this.state);
		this.setState({
	    	web:"",
	    	user:"",
	    	password:"",
	    	email:"",
	    	clave:"",
	    	observaciones:""
		})
		this.posicion=0;
	}

	onChange(e) {
    	//this.setState({typed: e.target.value});
    	this.handleRowSelection.bind(this);
    }
  	onSubmit(e){
  		var mensaje;
		var opcion = window.confirm("Es correcto? "+ JSON.stringify(this.state.web+":"+this.state.user) + "??");
 		
 		e.preventDefault();
		if (opcion === true) {
  			this.props.onEditarDato(this.state,this.posicion);
        } else {
        	mensaje = alert("Has cancelado");

        }

  			
  	}

	render(){

		const data= this.props.data;

		return(
			<div className="container">
				<Navigation />
				<h2>Editar Datos</h2>
			    <table>
			    	<thead>
			     		<tr>
				          <th>#</th>
				          <th>Web</th>
				          <th>Usuario</th>
				          <th>Password</th>
				          <th>Email</th>
				          <th>Clave</th>
				          <th>Observaciones</th>
			     		</tr>
			     	</thead>
					<tbody>{data.map((row,i) => (
			            <tr key={i} onClick={this.handleRowSelection.bind(this,row,i)}>
			            	<td>{i+1}</td>
				            <td>{row.web}</td>
				            <td>{row.user}</td>
				            <td>{row.password}</td>
				            <td>{row.email}</td>
				            <td>{row.clave}</td>
				            <td>{row.observaciones}</td>
				        </tr>
			            )
			          )
			        }
			     	</tbody>
			    </table>
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
					            placeholder="Observaciones"
							/>
						</div>
						<p></p>
						<form onSubmit={this.onSubmit.bind(this)}>
			    			<div className="rotulo-form">Web editada:</div>
	    					<input 
	    						className="input-form"
	    						type="text" 
	    						name="name" 
	    						value= {this.state.web+": "+this.state.user+" "+this.state.password+" "+this.state.email+" "+this.state.clave+" "+this.state.observaciones}
	    						onChange={this.onChange.bind(this)} 
	    						/>
		  				
		  					<p></p>
		  					<button type="submit" className="add-btn" >
		            				SAVE
		          			</button>
			    		</form>
			    </form>
   			</div>
			);
	}
}

	

export default EditDatos;
