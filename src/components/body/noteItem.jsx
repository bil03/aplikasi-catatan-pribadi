import React from 'react';
import ItemContent from './itemContent';
import ItemAction from './itemAction';

function NoteItem({ id, title, createdAt, body, onDelete, onArchived }) {
  return (
    <div className="note-item">
      <ItemContent title={title} createdAt={createdAt} body={body} />
      <ItemAction id={id} onDelete={onDelete} onArchived={onArchived} />
    </div>
  );
}

export default NoteItem;
