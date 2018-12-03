import React from 'react';
import {Form, Icon, Button} from 'antd';
import {EditorState} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './index.css';

const FormItem = Form.Item;

class Rich extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        };
    }

    onEditorStateChange: Function = (editorState) => {
        this.setState({
            editorState,
        });
    };

    render() {
        const {editorState} = this.state;
        return (
            <div style={{textAlign:"center"}}>
                    <Editor
                        editorState={editorState}
                        wrapperClassName="demo-wrapper"
                        editorClassName="demo-editor"
                        onEditorStateChange={this.onEditorStateChange}
                    />
                    <Button type="primary" htmlType="submit" className="save-button">
                       保存
                    </Button>

            </div>
        )
    }
}

export default Rich;