import React from 'react';
import { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import path from 'path';
import {Editor, EditorState, ContentState} from 'draft-js';
import 'draft-js/dist/Draft.css'

import css from './style.css';

function PlaintextEditor({ file, write }) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  // console.log(file, write);

  useEffect(() => {
    (async () => {
      var text = await file.text();
      setEditorState(EditorState.createWithContent(ContentState.createFromText(text)));
    })();
  }, [file]);

   //sends updated new file to pages index.js to be saved into db
  const writer = (currState) => {
    setEditorState(currState);
    var text = currState.getCurrentContent().getPlainText();
    // console.log("text", text);
    const newFile = new File([
      text ], 
      file.name,
      {
        type: 'text/plain',
        lastModified: new Date('2020-01-05T16:39:00')
      }
    );
    console.log("WRITER IS CALLED");
    write(newFile);
  }

  return (
      <div className={css.editor}>
      <div className={css.title}>{path.basename(file.name)}</div>
      <div className={css.content}>
      <Editor editorState={editorState} onChange={writer} />
      </div>
    </div>
  );
}

PlaintextEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func
};

export default PlaintextEditor;
