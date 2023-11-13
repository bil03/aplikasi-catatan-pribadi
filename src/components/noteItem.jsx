import React from 'react';
import ItemContent from './itemContent';
import ItemAction from './itemAction';

function NoteItem({ id, title, createdAt, body, onDelete, onArchived, archived }) {
  return (
    <div className="note-item">
      <ItemContent title={title} createdAt={createdAt} body={body} archived={archived} />
      <ItemAction id={id} onDelete={onDelete} onArchived={onArchived} archived={archived} />
    </div>
  );
}

export default NoteItem;
