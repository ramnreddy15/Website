import React, {Component} from "react";
import emailjs from "emailjs-com";

// export default function ContactForm() {

//   function sendEmail(event) {
//     event.preventDefault();

//     emailjs.sendForm('service_5ggwj8d', 'template_jirc6zm', event.target, 'user_XtSzEFFNtc4C6IEpGN9JS')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//       event.target.reset();
  
//   }

//   return (
//     <form onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="name" />
//       <label>Email</label>
//       <input type="email" name="email" />
//       <label>Subject</label>
//       <textarea name="subject" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// }

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(event) {
    this.setState({ 
      name: event.target.value 
    });
  }

  handleEmailChange(event) {
    this.setState({ 
      email: event.target.value 
    });
  }

  handleSubjectChange(event) {
    this.setState({ 
      subject: event.target.value 
    });
  }

  handleMessageChange(event) {
    this.setState({ 
      message: event.target.value 
    });
  }

  async handleSubmit(event) {
    alert('You will get and email from us shortly!');
    alert('These are the details you have submitted!');
    alert(this.state.name);
    alert(this.state.email);
    alert(this.state.subject);
    alert(this.state.message);

    event.preventDefault();

    emailjs.sendForm('service_5ggwj8d', 'template_jirc6zm', event.target, 'user_XtSzEFFNtc4C6IEpGN9JS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      event.target.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={this.handleNameChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" onChange={this.handleEmailChange} />
        </label>
        <label>
          Subject:
          <textarea  name="subject" onChange={this.handleSubjectChange} />
        </label>
        <label>
          Message:
          <textarea  name="message" onChange={this.handleMessageChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ContactForm;