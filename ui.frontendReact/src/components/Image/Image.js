import React, {Component} from 'react';
require('./Image.css');

export default class Image extends Component {

    get content() {
        return <img     className="Image-src"
                        src={this.props.src}
                        alt={this.props.alt}
                        title={this.props.title ? this.props.title : this.props.alt} />;
    }

    render() {
        return (
            <div className="Image">
                {this.content}
            </div>
        );
    }
}




