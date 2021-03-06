import React from 'react';

class PauseEndBtn extends React.Component {
    render() {
        return (
        <div className="flex justify-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 flex-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 flex-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
            </svg>
        </div>
        )
    }
  }

export default PauseEndBtn;
  