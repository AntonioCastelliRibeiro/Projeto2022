import React from "react";
import Pessoa from "./Class/Pessoa";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onName: "",
            onEmail: ""
        };
        // Esta linha é importante!
        // this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        // const MinhaPessoa = new Pessoa("");
        // // MinhaPessoa.carregarDadosPessoa();
        // MinhaPessoa.setName("Antonio Castelli");
        // MinhaPessoa.setEmail("antoniocastelliribeiro@hotmail.com");
        // console.log(`Meu nome é: ${MinhaPessoa.getName()}. Meu email é: ${MinhaPessoa.getEmail()}`);
        console.log("Montei");
    }

    componentDidUpdate() {
        console.log(this.state.onName)
    }

    render() {
        // Devido `this.handleClick` ter sido amarrado, podemos usá-lo como um controlador de evento.
        return (
            <div>
                <input style={{ color: this.state.onName.length > 10 ? "red" : "black" }} placeholder="Nome" value={this.state.onName} onChange={(e) => this.setState({ onName: e.target.value })} className="inputClass" />
                <input placeholder="Email" value={this.state.onEmail} onChange={(e) => this.setState({ onEmail: e.target.value })} className="inputClass" />

                <button onClick={() => false}>Click</button>
            </div >
        );
    }
}

export default App;