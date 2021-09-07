import logo from './nikeLogo.png';
import './App.css';
import StartNstopControl from './StartNstopControl';
import NewIntervalControl from './NewIntervalControl';
import Interval from './Interval';
import { Component } from 'react';
import { Helmet } from 'react-helmet'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isRunning: false,
			intervals: [],
			currentInterval: 0
		}
	}

	updateRunning (state) {
		this.setState({isRunning: state});
		if (state) {
			this[`interval${this.state.currentInterval}`].startTimer();
		} else {
			this[`interval${this.state.currentInterval}`].pauseTimer();
		}	
	}

	updateIntervals (state) {
		this.setState({intervals: state});
	}

	incrementCurrentInterval () {
		this.updateRunning(false)
		navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
		if (this.state.intervals.length - this.state.currentInterval > 1){
			this.setState({currentInterval: this.state.currentInterval + 1});
			this.updateRunning(true)
  			navigator.vibrate(500);
		} else {
			this.startNstop.handleStop()
			navigator.vibrate([500,500,500,500,600]);
		}
		
	}

  	render () {
		let {intervals} = this.state; 
		let intervalsComponents = []
		if (intervals){
			intervals.map((interval, index) => {
				intervalsComponents.push(<Interval
					key={index}
					onRef={ref => (this[`interval${index}`] = ref)}
					currentTime={interval.currentTime} 
					description={interval.description} 
					incrementCurrentInterval={this.incrementCurrentInterval.bind(this)}
					/>);
			})
		}
	  	return (
			<div className="App h-full">
				<Helmet>
					<title>NRC Timer</title>
				</Helmet>
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
				<NewIntervalControl intervals={this.state.intervals} isRunning={this.state.isRunning} updateIntervals={this.updateIntervals.bind(this)}/>
				<div className="overflow-auto max-h-36rem">
					{intervalsComponents}
				</div>
				<StartNstopControl intervals={this.state.intervals} isRunning={this.state.isRunning} setRunning={this.updateRunning.bind(this)} onRef={ref => (this.startNstop = ref)}/>
			</div>
  		);
	}
}

export default App;
