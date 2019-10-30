import React from 'react';
import './App.css';

import data from './data/datos2.json';

import TablaDatos from './components/TablaDatos';
import BuscarDatos from './components/BuscarDatos';
import AddDatos from './components/AddDatos';
import BorrarDatos from './components/BorrarDatos';
import EditDatos from './components/EditDatos';

import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {

  constructor (props){
    super(props)
    this.state ={
      data,
      filterText:''
    }
    this.handleAddDatos = this.handleAddDatos.bind(this);
    this.handleBorrarDatos = this.handleBorrarDatos.bind(this);
    this.handleEditarDatos = this.handleEditarDatos.bind(this);
  }

  filterUpdate(value){
    this.setState({
      filterText : value
    })
  }

  handleAddDatos(dato){
    this.setState({
      data: [...this.state.data, dato]
    }) 
  }

  handleBorrarDatos(dato){ 
    let datos = JSON.stringify(dato)
    let posi = this.state.data.findIndex(element => JSON.stringify(element) === datos)
    if (posi>-1){
      delData: this.state.data.splice(posi,1)
      this.setState({
        data
      })
    } 
  }

  handleEditarDatos(dato,pos){ 
    let datos = JSON.stringify(dato)
    let posi = this.state.data.findIndex(element => JSON.stringify(element) === datos)
    if (pos>-1){
      editData: this.state.data.splice(pos,1,dato)
      this.setState({
        data
      })
    }
  }

  render(){
    return (
      <div className="main">
        <h1>Listado de passwords</h1>
        <BrowserRouter>
          <React.Fragment>
          <Route path="/BuscarDatos" render={() => 
            <BuscarDatos filterText ={this.state.filterText} 
                         data={this.state.data}
                         filterUpdate={this.filterUpdate.bind(this)}
            />}
          />
          <Route path="/AddDatos" render={() => 
            <AddDatos data={this.state.data}
                      onAddDato={this.handleAddDatos}
            />} 
          />
          <Route path="/EditDatos" render={() => 
            <EditDatos data={this.state.data}
                       onEditarDato={this.handleEditarDatos}
            />} 
          />
          <Route path="/BorrarDatos"render={() => 
            <BorrarDatos data={this.state.data}
                       onBorrarDato={this.handleBorrarDatos}
            />}
          />
          <Route path="/TablaDatos" render={() => 
            <TablaDatos data = {this.state.data}/>} 
          />
          </React.Fragment>
        </BrowserRouter>
        
      </div>      
    )
  }
}
export default App;
