import React, {Component} from 'react';
import Navigation from './Navigation';

class BorrarDatos extends Component {

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
		//this.handleRowSelection= this.handleRowSelection.bind(this);

	}

	handleRowSelection(e) {
    	this.setState({
	    	web:e.web,
	    	user:e.user,
	    	password:e.password,
	    	email:e.email,
	    	clave:e.clave,
	    	observaciones:e.observaciones
    	});

	}

	onChange(e) {
    	//this.setState({typed: e.target.value});
    	this.handleRowSelection.bind(this);
    }
  	onSubmit(e){
  		var mensaje;
		var opcion = window.confirm("Eliminar "+ JSON.stringify(this.state.web+":"+this.state.user) + "??");
 		
 		e.preventDefault();
		if (opcion === true) {
  			this.props.onBorrarDato(this.state);
        } else {
        	mensaje = alert("Has cancelado");

        }

  			
  	}

	render(){

		const data= this.props.data;

		return(
			<div className="container">
				<Navigation />
				<h2>Borrar Datos</h2>
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
			            <tr key={i} onClick={this.handleRowSelection.bind(this,row)}>
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
			    <form className="add-form" 
			    	onSubmit={this.onSubmit.bind(this)}>
			    	<div >
    					Web:
    				</div>
    				<input 
    					type="text"
    					className="input-form"
    					name="name" 
    					value= {this.state.web+": "+this.state.user+" "+this.state.password}
    					onChange={this.onChange.bind(this)} />
  					<p></p>
  					<button type="submit" className="add-btn" >
            				DELETE
          			</button>
			    </form>
   			</div>
			);
	}
}

export default BorrarDatos;