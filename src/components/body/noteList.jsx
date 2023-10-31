import React from 'react';
import NoteItem from './noteItem';

function NoteList({ notes, onDelete, onArchived }) {
  return (
    <div className="notes-list">
      {notes.filter(note => !note.archived || !note.deleted).length <= 0 && <p className='notes-list__empty-message'>Tidak ada catatan</p>}
      {notes.map((note) => {
        return !note.archived || !note.deleted ? (
          <NoteItem 
          key={note.id} 
          id={note.id} 
          title={note.title} 
          createdAt={note.createdAt} 
          body={note.body} 
          onDelete={onDelete} 
          onArchived={onArchived} 
            />
        ) : null;
      })}
    </div>
  );
}

export default NoteList;
