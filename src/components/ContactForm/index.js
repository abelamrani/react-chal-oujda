import React, { Component } from "react";

class ContactForm extends Component {
  render() {
    return (
      <form className="mbr-form" action="" method="post" data-form-title="Form">
        <div className="row row-sm-offset">
          <div className="col-md-4 multi-horizontal" data-for="name">
            <div className="form-group">
              <label
                className="form-control-label mbr-fonts-style display-7"
                for="name-form1-4"
              >
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                data-form-field="Name"
                required=""
                id="name-form1-4"
              />
            </div>
          </div>
          <div className="col-md-4 multi-horizontal" data-for="email">
            <div className="form-group">
              <label
                className="form-control-label mbr-fonts-style display-7"
                for="email-form1-4"
              >
                Email
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                data-form-field="Email"
                required=""
                id="email-form1-4"
              />
            </div>
          </div>
          <div className="col-md-4 multi-horizontal" data-for="phone">
            <div className="form-group">
              <label
                className="form-control-label mbr-fonts-style display-7"
                for="phone-form1-4"
              >
                Phone
              </label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                data-form-field="Phone"
                id="phone-form1-4"
              />
            </div>
          </div>
        </div>
        <div className="form-group" data-for="message">
          <label
            className="form-control-label mbr-fonts-style display-7"
            for="message-form1-4"
          >
            Message
          </label>
          <textarea
            type="text"
            className="form-control"
            name="message"
            rows="7"
            data-form-field="Message"
            id="message-form1-4"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit form
        </button>
      </form>
    );
  }
}

export default ContactForm;
