import React from 'react';
import IntervalPopUp from './IntervalPopUp';

function NewIntervalBtn(props) {
    return(
        <button className="bg-black text-white w-4/5 my-4 py-3 px-4 rounded-lg shadow-sm disabled:opacity-40" disabled={props.disabled} onClick={props.onClick}>
            New Interval
        </button>
    );
}

class NewIntervalControl extends React.Component{
    constructor(props){
        super(props);
        this.showPopUp = this.showPopUp.bind(this);
        this.hidePopUp = this.hidePopUp.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            intervals: null,
            viewPopUp: false,
            isRunning: props.isRunning,
            key: 0,
        }
    }

    showPopUp(){
        this.setState({viewPopUp: true})
    }
    
    hidePopUp(){
        this.setState({viewPopUp: false})
    }

    handleSave(interval){
        this.hidePopUp()
        let updatedIntervals = this.props.intervals
        this.setState({key: this.state.key + 1})
        updatedIntervals.push(
                {
                    key: this.state.key,
                    goalTime: parseInt(interval.minutes) + ":" + parseInt(interval.seconds),
                    currentTime: parseInt(interval.minutes)*60 + parseInt(interval.seconds),
                    description: interval.description
                }
            )
        this.setState({intervals: updatedIntervals})
        this.props.updateIntervals(this.props.intervals)
    }

    render() {
        return (
            <div>
                <NewIntervalBtn onClick={this.showPopUp} disabled={this.props.isRunning}/>
                {(this.state.viewPopUp) ? <IntervalPopUp minutes={0} seconds={0} description="" handleSave={this.handleSave}/> : ''}
            </div>     
        )
    }
}

export default NewIntervalControl;