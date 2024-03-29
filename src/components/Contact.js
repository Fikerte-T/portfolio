import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const [values, setValues] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully',
          text: result.text,
        });
        setValues({
          from_name: '',
          from_email: '',
          message: '',
        });
        setValidated(false);
      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        });
      });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      sendEmail(event);
    }
    setValidated(true);
  };

  return (
    <div id="contact" className="contact-container portfolio-container">

      <div className="form-container header-container">
        <div className="form">
          <h2 className="heading-2">Contact me</h2>
          <p className="paragraph">
            If you have an application you are interested in developing,
            a feature that you need built or a project that needs coding.
            I`&apos`d love to help with it!
          </p>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control name="from_email" value={values.from_email} type="email" placeholder="name@example.com" required onChange={handleChange} />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Name"
              className="mb-3"
            >
              <Form.Control name="from_name" value={values.from_name} type="input" placeholder="Your name" required onChange={handleChange} />
              <Form.Control.Feedback type="invalid">
                Please write your name.
              </Form.Control.Feedback>
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Your message"
              className="mb-3"
            >
              <Form.Control name="message" value={values.message} as="textarea" placeholder="Enter your message " required style={{ height: '200px' }} onChange={handleChange} />
              <Form.Control.Feedback type="invalid">
                Please write a message.
              </Form.Control.Feedback>
            </FloatingLabel>

            <Button type="submit">Get in touch</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
