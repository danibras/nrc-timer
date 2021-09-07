import React, { Component } from 'react'

export default class IntervalPopUp extends Component {
    constructor(props){
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.handleMinutesChange = this.handleMinutesChange.bind(this);
        this.handleSecondsChange = this.handleSecondsChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.state = {
            minutes: 0,
            seconds: 0,
            description: '',
        }
    }

    handleMinutesChange(e){
        this.setState({minutes: parseInt(e.target.value)});
    }

    handleSecondsChange(e){
        this.setState({seconds: parseInt(e.target.value)});
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
                        <input type="number" min="0" max="60" onChange={this.handleMinutesChange} defaultValue={this.props.minutes} placeholder="MM" className="text-sm py-3 px-4 mr-2.5 rounded-lg w-5/12 border outline-none"/>
                        :
                        <input type="number" min="0" max="60" onChange={this.handleSecondsChange} defaultValue={this.props.seconds} placeholder="SS" className="text-sm py-3 px-4 ml-2.5 rounded-lg w-5/12 border outline-none"/>
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
