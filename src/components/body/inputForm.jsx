import React from 'react';

class InputForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: +new Date(),
      title: '',
      body: '',
      createdAt: new Date().toISOString(),
      archived: false,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const { value } = event.target;
    if (value.length < 50){
      this.setState(() => {
        return {
          title: event.target.value,
        };
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmitEventHandler}>
        {
          this.state.title.length < 50 ? (
          <p className="note-input__title__char-limit">karakter tersisa {50 - this.state.title.length} </p> ) : (
            <p className="note-input__title__char-limit">karakter tersisa {50 - this.state.title.length} </p>
          )
        }
        <input onChange={this.onTitleChangeEventHandler} className="note-input__title" value={this.state.title} type="text" placeholder="Ini adalah judul ..." required />
        <textarea className="note-input__body" value={this.state.body} onChange={this.onBodyChangeEventHandler} placeholder="Tuliskan catatanmu di sini ..." required></textarea>
        <button type="submit">buat</button>
      </form>
    );
  }
}

export default InputForm;
