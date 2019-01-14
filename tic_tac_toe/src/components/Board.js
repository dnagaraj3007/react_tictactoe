import React,{Component} from 'react';
import Square from './Square.js';
import calculateWinner from '../helper/calculateWinner.js'

class Board extends Component{
	constructor(props){
		super(props);
		this.state={
			squares: Array(9).fill(null),
			isNext: true
		}
	}

	renderSquare(i){
		return <Square value={this.state.squares[i]} onClick={()=>this.handleClick(i)}/>
	}

	handleClick(i){

		const squares = this.state.squares.slice();
		if(!squares[i]){		
		squares[i]=this.state.isNext?'X': 'O'

		this.setState({
			squares:squares,
			isNext:!this.state.isNext
		});
	}
	}

	render(){
		const winner= calculateWinner(this.state.squares)
		let status
		if(winner){
			status = "winner" +winner
		}else{
			status = "Next Player :"+ (this.state.isNext?'X': 'O')
		}
		return(
			<div>
			<div>
			 {status}
			 </div>
			<div>
				<div className='row'>
				 {this.renderSquare(0)}
				 {this.renderSquare(1)}
				 {this.renderSquare(2)}
				 </div>
				 <div className='row'>
				 {this.renderSquare(3)}
				 {this.renderSquare(4)}
				 {this.renderSquare(5)}
				 </div>
				 <div className = 'row'>
				 {this.renderSquare(6)}
				 {this.renderSquare(7)}
				 {this.renderSquare(8)}
				 </div>
			
			</div>
		    </div>
		
	
			)
	}
}

export default Board;