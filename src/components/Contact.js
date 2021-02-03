import React, {Component} from "react";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Write your full name here.',
      email: 'Write your email here.',
      subject: 'Write why you are writing here.',
      message: 'Write your message here.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.name});
    this.setState({email: event.target.email});
    this.setState({subject: event.target.subject});
    this.setState({message: event.target.message});
  }

  handleSubmit(event) {
    alert('You will get and email from us shortly!');
    alert('These are the details you have submitted!' + this.state.name);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Email:
          <input type="text" email={this.state.email} onChange={this.handleChange} />
        </label>
        <label>
          Subject:
          <textarea nasubjectme={this.state.nasubjectme} onChange={this.handleChange} />
        </label>
        <label>
          Message:
          <textarea name={this.state.message} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ContactForm;