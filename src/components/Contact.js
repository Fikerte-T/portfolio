import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contact = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      setValidated(true);
    };

    const [value, setValue] = React.useState();
    const onChange = (event) => {
      setValue(event.target.value);
    };
    return (
        <div id='contact' className="contact-container portfolio-container">
           
            <div className="form-container header-container">
                <div className="form">
                    <h2 className="heading-2">Contact me</h2>
                    <p className="paragraph">If you have an application you are interested in developing,
                        a feature that you need built or a project that needs coding. 
                        I’d love to help with it!
                    </p>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="name@example.com" required />
                            <Form.Control.Feedback type="invalid">
                            Please provide a valid email.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Your message"
                            className="mb-3"
                        >
                        <Form.Control as="textarea" placeholder="Enter your message " required onChange={onChange} style={{height: "200px"}}/>
                            <Form.Control.Feedback type="invalid">
                            Please write a message.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                        
            
                        <Button type="submit">Get in touch</Button>
                    </Form>
                </div>
            </div>    
        </div>
    )
    
}

export default Contact;