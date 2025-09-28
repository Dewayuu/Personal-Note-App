import React from "react";

function ArchiveButton({ id, onArchive, isArchived }) {
  const buttonText = isArchived ? "Pindahkan" : "Arsipkan";

  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      {buttonText}
    </button>
  );
}

export default ArchiveButton;