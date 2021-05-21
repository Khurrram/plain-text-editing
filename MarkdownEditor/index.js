import React from 'react';
import { useState, useEffect, useMemo} from 'react';
import path from 'path';
import PropTypes from 'prop-types';
import ReactMarkdown from "react-markdown";
import css from './style.css';
import {Editor, EditorState, ContentState} from 'draft-js';
import 'draft-js/dist/Draft.css'

function MarkdownEditor({ file, write }) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    (async () => {
      var text = await file.text();
      setEditorState(EditorState.createWithContent(ContentState.createFromText(text)));
      setMarkdown(text);
    })();
  }, [file]);

  //sends updated new file to pages index.js to be saved into db
  const writer = (currState) => {
    var text = currState.getCurrentContent().getPlainText();
    setEditorState(currState);
    setMarkdown(text);
    const newFile = new File([
      text ], 
      file.name,
      {
        type: 'text/markdown',
        lastModified: new Date('2020-01-05T16:39:00')
      }
    );
    write(newFile);
  }

  return (
    <div className={css.editor}>
      <div className={css.title}>{path.basename(file.name)}</div>
      <div className={css.title}>Editor</div>
      <div className={css.content}>
        <Editor editorState={editorState} onChange={writer} />
      </div>
      <div className={css.title}>Preview</div>
      <div className={css.content}>
        <ReactMarkdown children={markdown} />
      </div>
    </div>
  );
}



MarkdownEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func
};

export default MarkdownEditor;
