import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const maxChar = 50; 
        if (event.target.value.length <= maxChar) {
            this.setState(() => {
                return {
                    title: event.target.value
                }
            });
        }
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote({
            ...this.state,
            createdAt: new Date().toISOString(),
        });    

        this.setState({
            title: '',
            body: '',
        });
    }

    render() {
        const maxChar = 50;
        const remainingChar = maxChar - this.state.title.length;

        return (
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <p className="note-input__title__char-limit">Sisa karakter: {remainingChar}</p>
                <input className="note-input__title" type="text" placeholder="Judul" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                <input className="note-input__body" type="text" placeholder="Tulis catatanmu disini" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                <button type="submit">Tambah</button>
            </form>
        );
    }
}

export default NoteInput;