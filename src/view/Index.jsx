import React, { Component } from "react";
import Button_component from "../Button_component";

class Index extends Component {
    render() {
        return (
            <>
                <h1>What do you want to do?</h1>
                <a href="/Write"><Button_component name="Write" /></a>
                <a href="/Read"><Button_component name="Read" /></a>
            </>
        );
    }
}

export default Index;
