import React from "react";
import { showFormattedDate } from "../utils/index";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NoteItem({ title, body, createdAt, id, onDelete, onArchive, archived }) {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <h3 className="note-item__title">{title}</h3>
                <p className="note-item__date">{showFormattedDate(createdAt)}</p>
                <p className="note-item__detail">{body}</p>
            </div>
            <div className="note-item__action">
                <DeleteButton id={id} onDelete={onDelete} />
                <ArchiveButton id={id} onArchive={onArchive} isArchived={archived} />
            </div>
        </div>
    );
}

export default NoteItem;