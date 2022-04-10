import React, {Component} from 'react';
import extractModelId from "../../utils/extract-model-id";

export default class HelloWorld extends Component {

    get content() {
        return <div
            className="Hello-World"
            id={extractModelId(this.props.cqPath)}>
            {this.props.text}
        </div>;
    }

    render() {
        return (
            <div className="HelloWorld">
                {this.content}
            </div>
        );
    }
}




