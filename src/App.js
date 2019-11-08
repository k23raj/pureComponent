
import React from 'react';

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "Kamaraj"
        }
    }

    updateState = () => {
        setInterval(() => {
            this.setState({
                name: "Kamaraj"
            })
        }, 1000)
    }

    componentDidMount() {
        this.updateState();
    }

    render() {

        console.log("Render Called Again")
        return (
            <div>
                <RegularChildComponent name={this.state.name} />
                <PureChildComponent name={this.state.name} />
            </div>
        )
    }
}

class RegularChildComponent extends React.Component {
    render() {
        console.log("Regular Component Rendered..");
        return <div>{this.props.name}</div>;
    }
}

class PureChildComponent extends React.PureComponent { 
    render() {
        console.log("Pure Component Rendered..")
        return <div>{this.props.name}</div>;
    }
}
