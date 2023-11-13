import React, { Fragment } from 'react';
import NoteList from './noteList';
import { getInitialData } from '../utils';
import InputForm from './inputForm';
import AppHeader from './appHeader';

class AppBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onActiveHandler = this.onActiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        note.archived = !note.archived;
      }
      return note;
    })
    this.setState({ notes });
  }

  onActiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        note.archived = note.archived;
      }
      return note;
    });
    this.setState({ notes });
  }

onSearchHandler(event) {
  const searched = event.target.value.toLowerCase();
  this.setState((prevState) => {
    return {
      notes: prevState.notes.filter((note) => {
        return note.title.toLowerCase().includes(searched);
      }),
    };
  });
}

  onAddNoteHandler({ title, body }) {
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
    });
  }

  render() {
    return (
      <Fragment>
        <AppHeader onSearch={this.onSearchHandler} />
        <div className="note-app__body">
          <InputForm addNote={this.onAddNoteHandler} />
          <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchived={this.onArchiveHandler} onActive={this.onActiveHandler} />
        </div>
      </Fragment>
    );
  }
}

export default AppBody;
