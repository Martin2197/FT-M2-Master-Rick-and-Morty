import React from "react";

export default class Botones extends React.Component {
     render() {
        return (
        <div>
            <button className="BotonM1" onClick={() => alert(this.props.alerts.m1)}>Módulo 1</button>
            <button className="BotonM2" onClick={() => alert(this.props.alerts.m2)}>Módulo 2</button>
        </div>)
        
     }
     
}