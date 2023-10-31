import React from 'react';
import NoteList from './noteList';
import { getInitialData } from '../../utils';
import InputForm from './inputForm';

class AppBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  
  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({title, body}) {

    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            createdAt: new Date().toISOString(),
            body,
          },
        ],
      };
    })
  }
  

  render() {
    return (
      <div className="note-app__body">
        <InputForm addNote={this.onAddNoteHandler} />
        <h2>Catatan Aktif</h2>
        <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
        <h2>Arsip</h2>
      </div>
    );
  }
}

export default AppBody;
