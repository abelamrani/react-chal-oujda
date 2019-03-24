import React, { Component } from "react";

// Components
import ContactForm from "components/ContactForm";

class Contact extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <h2 className="mbr-section-title align-center pb-3 mbr-fonts-style display-2">
          CONTACT US
        </h2>
        <div className="media-container-column col-lg-8">
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default Contact;
