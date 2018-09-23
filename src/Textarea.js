import React from 'react';
import ReactDOM from 'react-dom';

class Textarea extends React.Component {
    render() {
        return (
            <div>
                <h3>Text Area</h3>
                <label>
                <input type="text" name="text" />
                </label>
            </div>
        )
    }
}

export default Textarea;