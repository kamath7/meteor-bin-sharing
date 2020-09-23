import React, { Component } from 'react';
import {markdown} from 'markdown';
import ReactHtmlParser from 'react-html-parser'

class BinsViewer extends Component {
    //alternate to ReactHtmlParser - dangerouslySetInnerHTML={{__html:rawHTML}}
    render() {
        const rawHTML = markdown.toHTML(this.props.bin.content);
        return (
            <div className='col-xs-4'>
                <h5>Output</h5>
                <div >{ReactHtmlParser(rawHTML)} </div>
            </div>
        );
    }
}

export default BinsViewer;