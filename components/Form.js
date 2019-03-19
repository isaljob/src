import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        alert('Pesan Input adalah: ' + this.state.value);
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}/>
                <input type="submit" value="Submit Data"/>
            </form>
        )
    }
}

export default Form;