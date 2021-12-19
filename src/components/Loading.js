import React, { Component } from "react";

// Componente original
export default class Loading extends Component {
    state = { timer: null, counter: 0};

    // Se agrega en el constructor bind a la funcion tick (fix "this" del código original)
    constructor(props){
        super(props);
        this.tick=this.tick.bind(this);
    }

    componentDidMount() {
        let timer = setInterval(this.tick, 1000);
        this.setState({ timer: timer });
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    tick() {
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        const {
            title = ""
        } = this.props
        return <div>{title} {"...".substr(0, (this.state.counter % 3) + 1)}</div>
    }
}