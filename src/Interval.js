import React, { Component } from 'react'

export default class Interval extends Component{
    constructor(props){
        super(props);
        this.timeFormater = this.timeFormater.bind(this);
        this.state = {
            goalTime: props.goalTime,
            currentTime: props.currentTime,
            description: props.description,
        }
    }

    timeFormater(){
        let duration = this.state.currentTime;

        var mins = ~~((duration % 3600) / 60);
        var secs = ~~duration % 60;

        var ret = "";

        ret += "" + mins + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;
        
        return ret;
    }

    render(){
        return (
            <div className="flex items-center bg-white border-b-2 border-gray-200 dark:bg-black">
                <div className="py-3 px-8 border-r w-1/3">
                    <p className="mb-2 text-sm font-medium text-black">{this.timeFormater()}</p>
                </div>
                <div className="w-2/3">
                    <p className="mb-2 text-sm text-center font-medium text-black">{this.state.description}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </div>
        )
    }
}