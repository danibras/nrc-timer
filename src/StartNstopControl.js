import React from 'react';

function StartBtn(props) {
    return(
        <div className="flex justify-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 flex-1" viewBox="0 0 20 20" fill="currentColor" onClick={props.onClick}>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
        </div>
    );
}

function PauseBtn(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 flex-1" viewBox="0 0 20 20" fill="currentColor" onClick={props.onClick}>
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
    );
}

function EndBtn(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 flex-1" viewBox="0 0 20 20" fill="currentColor" onClick={props.onClick}>
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
        </svg>
    );
}

class StartNstopControl extends React.Component{
    constructor(props){
        super(props);
        this.handleStartClick = this.handleStart.bind(this);
        this.handlePauseClick = this.handlePause.bind(this);
        this.handleStopClick = this.handleStop.bind(this);
        this.state = {isRunning: props.isRunning};
    }

    handleStart(){
        this.setState({isRunning: true})
        this.props.setRunning(true)
    }

    handlePause(){
        this.setState({isRunning: false})
        this.props.setRunning(false)
    }

    handleStop(){
        this.setState({isRunning: false})
        this.props.setRunning(false)
    }

    render() {
        const isRunning = this.state.isRunning;
        let button;

        if (isRunning) {
            button = <div className="flex justify-items-center"> <PauseBtn onClick={this.handlePauseClick}/> <EndBtn onClick={this.handleStopClick}/></div>
        } else {
            button = <StartBtn onClick={this.handleStartClick}/>
        }

        return (
            <div className="fixed bottom-0 inset-x-0 p-5">
                {button}
            </div>
        )
    }
}

export default StartNstopControl;