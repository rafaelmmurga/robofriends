import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import './App.css';

class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: [],
			cuadrobuscar: ''
		}
		console.log('constructor');
	}

	componentDidMount() {
		fetch('https://rafaelmmurga.github.io/datos/users.json')
		.then(response => response.json())
		.then(users    => 	this.setState({robots: users}) )
		
		console.log('componentDidMount');
	}

	enBuscarCambio = (evento) =>{
		this.setState({ cuadrobuscar: evento.target.value })
	}

	render() {
		const { robots, cuadrobuscar } = this.state;
		const robotFiltrado = robots.filter(robot => {
			return robot.name.toLowerCase().includes(cuadrobuscar.toLowerCase())
		});
		//console.log(robotFiltrado);
		console.log('render');
		return !robots.length ? 
			<h1>Cargando</h1> :
		(
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.enBuscarCambio}/>
				<Scroll>
					<CardList robots={robotFiltrado}/>
				</Scroll>
			</div>
			);
	}	
}

export default App;