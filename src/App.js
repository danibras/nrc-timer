import logo from './nikeLogo.png';
import './App.css';
import StartNstopControl from './StartNstopControl';
import NewIntervalControl from './NewIntervalControl';
import Interval from './Interval';
import { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isRunning: false,
			intervals: [],
		}
	}

	updateRunning (state) {
		this.setState({isRunning: state});
	}

	updateIntervals (state) {
		this.setState({intervals: state});
	}

  	render () {
		let {intervals} = this.state; 
		let intervalsComponents = []
		if (intervals){
			intervals.map((interval, index) => {
				intervalsComponents.push(<Interval
					key={index}
					goalTime={interval.goalTime} 
					currentTime={interval.currentTime} 
					description={interval.description} 
					/>);
			})
		}
	  	return (
			<div className="App h-full">
				<header>
					<div className="flex-1 flex flex-col">
						<nav className="px-4 flex justify-center bg-black h-16 border-b-2">
						<ul className="flex items-center">
							<li className="h-4 w-8">
								<img
								className="h-full w-full mx-auto"
								src={logo}
								alt="svelte logo" />
							</li>
						</ul>

						<ul className="flex items-center">
							<li>
								<h1 className="pl-6 lg:pl-0 text-white">Intervals Timer</h1>
							</li>
						</ul>
						</nav>
					</div>
				</header>
				<NewIntervalControl intervals={this.state.intervals} updateIntervals={this.updateIntervals.bind(this)}/>
				<div className="overflow-auto max-h-36rem">
					{intervalsComponents}
				</div>
				<StartNstopControl isRunning={this.state.isRunning} setRunning={this.updateRunning.bind(this)}/>
			</div>
  		);
	}
}

export default App;
