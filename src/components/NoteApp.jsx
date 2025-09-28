import React from "react";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";
import { getInitialData } from "../utils/index";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchQuery: '',
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body, createdAt }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt,
            archived: false,
          }
        ]
      }
    });
  }

  onSearchHandler(event) {
    this.setState({ searchQuery: event.target.value });
  }

   onArchiveHandler(id) {
    const notes = this.state.notes.map(note => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });
    this.setState({ notes });
  }

  render() {
    const { notes, searchQuery } = this.state;
    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const activeNotes = filteredNotes.filter(note => !note.archived);
    const archivedNotes = filteredNotes.filter(note => note.archived);

    return (
      <div>
        <div className="note-app__header">
          <h1>My Notes</h1>
          <div className="note-app__search-bar">
            <input
              type="text"
              placeholder="Cari catatan..."
              value={searchQuery}
              onChange={this.onSearchHandler}
            />
          </div>
        </div>
        <div className="note-app__body">
          <h2>Tambah Catatan</h2>
          <NoteInput addNote={this.onAddNoteHandler} />
          <h2>Catatan Aktif</h2>
          <NoteList notes={activeNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
          <h2>Arsip</h2>
          <NoteList notes={archivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
        </div>
      </div>
    );
  }
  
}

export default NoteApp;