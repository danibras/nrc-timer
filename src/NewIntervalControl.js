import React from 'react';
import IntervalPopUp from './IntervalPopUp';

function NewIntervalBtn(props) {
    return(
        <button className="bg-black text-white w-4/5 my-4 py-3 px-4 rounded-lg shadow-sm" onClick={props.onClick}>
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
            intervals: props.intervals,
            viewPopUp: false
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
        let updatedIntervals = this.state.intervals
        updatedIntervals.push(
                {
                    key: this.state.intervals.length + 1,
                    goalTime: interval.minutes + ":" + interval.seconds,
                    currentTime: interval.minutes*60 + interval.seconds,
                    description: interval.description
                }
            )
        this.setState({intervals: updatedIntervals})
        this.props.updateIntervals(this.state.intervals)
    }

    render() {
        return (
            <div>
                <NewIntervalBtn onClick={this.showPopUp}/>
                {(this.state.viewPopUp) ? <IntervalPopUp minutes="00" seconds="00" description="Description" handleSave={this.handleSave}/> : ''}
            </div>     
        )
    }
}

export default NewIntervalControl;