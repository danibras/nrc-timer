import React, { Component } from 'react'

export default class IntervalPopUp extends Component {
    constructor(props){
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.handleMinutesChange = this.handleMinutesChange.bind(this);
        this.handleSecondsChange = this.handleSecondsChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.state = {
            minutes: this.prettyTime(this.props.minutes),
            seconds: this.prettyTime(this.props.seconds),
            description: '',
        }
    }

    handleMinutesChange(e){
        this.setState({minutes: parseInt(e.target.value)});
    }

    addMinutes(m){
        this.setState({minutes: parseInt(this.state.minutes) + m})
    }

    handleSecondsChange(e){
        this.setState({seconds: parseInt(e.target.value)});
    }

    addSeconds(s){
        let totalSeconds = parseInt(this.state.seconds) + s

        let mins = ~~((totalSeconds % 3600) / 60);
        let secs = ~~totalSeconds % 60;

        this.setState({
            minutes: parseInt(this.state.minutes) + mins,
            seconds: this.prettyTime(secs)
        })
    }

    prettyTime(n){
        if (n.toString().length === 1){
            return "0" + n
        }
        return n
    }

    handleDescriptionChange(e){
        this.setState({description: e.target.value});
    }

    handleSave(){
        this.props.handleSave(this.state)
    }

    render() {
        return (
            <div className="flex justify-center items-center">
                <div className="pb-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                    <div className="space-y-4">
                        <input type="number" min="0" max="60" onChange={this.handleMinutesChange} value={this.state.minutes} placeholder="MM" className="text-sm py-3 px-4 mr-2.5 rounded-lg w-5/12 border outline-none"/>
                        :
                        <input type="number" min="0" max="60" onChange={this.handleSecondsChange} value={this.state.seconds} placeholder="SS" className="text-sm py-3 px-4 ml-2.5 rounded-lg w-5/12 border outline-none"/>
                        
                        <div>
                            <button onClick={this.addMinutes.bind(this, 1)} className="p-1 m-2 w-16 text-white bg-black rounded-lg">1m</button>
                            <button onClick={this.addSeconds.bind(this, 45)} className="p-1 m-2 w-16 text-white bg-black rounded-lg">45s</button>
                            <button onClick={this.addSeconds.bind(this, 30)} className="p-1 m-2 w-16 text-white bg-black rounded-lg">30s</button>
                            <button onClick={this.addSeconds.bind(this, 15)} className="p-1 m-2 w-16 text-white bg-black rounded-lg">15s</button>
                            <button onClick={this.addSeconds.bind(this, 10)} className="p-1 m-2 w-16 text-white bg-black rounded-lg">10s</button>
                            <button onClick={this.addSeconds.bind(this, 5)} className="p-1 m-2 w-16 text-white bg-black rounded-lg">5s</button>
                        </div>

                        <input type="text" onChange={this.handleDescriptionChange} placeholder={this.props.description} className="text-sm py-3 px-4 rounded-lg w-11/12 border outline-none"/>
                    </div>
                    <div className="text-center mt-6">
                        <button className="py-3 w-64 text-xl text-white bg-black rounded-2xl" onClick={this.handleSave}>Save</button>
                    </div>
                </div>
            </div>
        )
    }
}
