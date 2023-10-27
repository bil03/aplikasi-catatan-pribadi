import React from "react";

function ItemAction({id, onDelete, archived, onArchived}) {
    return (
      <div className="note-item__action">
        <button onClick={() => onDelete(id)} className="note-item__delete-button">
          Delete
        </button>
        <button onClick={() => onArchived(id)} className="note-item__archive-button">
          {archived ? "Pindahkan" : "Arsip"}
        </button>
      </div>
    );
}

export default ItemAction;