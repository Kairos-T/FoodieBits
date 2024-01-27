// By: Ruby
// ContactForm.jsx

/* import React, { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../styles/ContactForm.module.css';

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const templateParams = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      category: 'General Enquiries',
    };

    emailjs
      .send('service_1dy6a7a', 'template_trpvjsu', templateParams)
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });

    e.target.reset();
  };

  useEffect(() => {
    // You can add any additional logic or side effects here
  }, []); 

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.heading}>Contact Form</h1>
      <form name="myForm" onSubmit={sendEmail} method="post">
        <table className={styles.formTable}>
          <tbody>
            <tr>
              <td>
                <label>
                  Your Name <span className={styles.required}>*</span>
                </label>
              </td>
              <td>
                <input
                  type="text"
                  name="name"
                  className={`${styles.sharedInput} ${styles.long}`}
                />
                <span className={styles.error} id="errorname"></span>
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  Your Email Address <span className={styles.required}>*</span>
                </label>
              </td>
              <td>
                <input
                  type="email"
                  name="email"
                  className={`${styles.sharedInput} ${styles.long}`}
                />
                <span className={styles.error} id="erroremail"></span>
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  Message <span className={styles.required}>*</span>
                </label>
              </td>
              <td>
                <textarea
                  name="message"
                  className={`${styles.sharedInput} ${styles.fieldTextarea}`}
                ></textarea>
                <span className={styles.error} id="errormsg"></span>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="submit" value="Send" className={styles.formButton} />
                <input type="reset" value="Reset" className={styles.formButton} />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default ContactForm; */


import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
emailjs.init('vB5Ojf6X0YBHrjcdn');

function ContactForm() {
  const [errors, setErrors] = useState({ name: '', email: '', message: '', category: '' });
  const form = useRef();

  const validateForm = async (e) => {
    e.preventDefault();

    const name = form.current["name"];
    const email = form.current["email"];
    const message = form.current["message"];
    const category = form.current["category"];

    // Validation logic
    const newErrors = { name: '', email: '', message: '', category: '' };

    if (name.value === '') {
      newErrors.name = 'Please enter a valid name';
      name.focus();
    }

    if (email.value === '') {
      newErrors.email = 'Please enter a valid email address';
      email.focus();
    } else if (email.value.indexOf('@', 0) < 0 || email.value.indexOf('.', 0) < 0) {
      newErrors.email = 'Please enter a valid email address';
      email.focus();
    }

    if (message.value === '') {
      newErrors.message = 'Please enter a valid message';
      message.focus();
    }

    if (category.value === '') {
      newErrors.category = 'Please select a category';
      category.focus();
    }

    if (Object.values(newErrors).every(value => value === '')) {
      try {
        await sendEmail();
        form.current.reset();
      } catch (error) {
        console.error('Error sending email:', error);
      }
    }

    setErrors(newErrors);
  };

  const sendEmail = () => {
    console.log('Sending email...');
    return emailjs
      .sendForm('service_1dy6a7a', 'template_trpvjsu', form.current, 'vB5Ojf6X0YBHrjcdn')
      .then((result) => {
        console.log('Email sent:', result.text);
      })
      .catch((error) => {
        console.error('Email error:', error.text);
      });
  };

  return (
    <div>
      <style>
        {`
          h1 {
            text-align: center;
            font-size: 72px;
          }

          h2 {
            text-align: center;
            font-size: 30px;
          }

          .form-style {
            margin: 10px auto;
            width: 400px;
            padding: 20px 12px 10px 20px;
            font: 14px "Lucida Sans Unicode", "Lucida Grande", sans-serif;
          }

          .form-style td {
            padding: 0;
            display: block;
            list-style: none;
            margin: 10px 0 0 0;
          }

          .form-style label {
            margin: 0 0 3px 0;
            padding: 0px;
            display: block;
            font-weight: bold;
          }

          .form-style .required {
            color: red;
          }

          .form-style input[type=submit],
          .form-style input[type=reset] {
            background: #4eb5f1;
            padding: 8px 15px 8px 15px;
            border: none;
            color: #fff;
          }

          .form-style input[type=submit]:hover,
          .form-style input[type=reset]:hover {
            background: #4eb5f1;
            box-shadow: none;
            -moz-box-shadow: none;
            -webkit-box-shadow: none;
          }

          .form-style .field-textarea {
            height: 100px;
          }

          .form-style input[type=text],
          .form-style input[type=email],
          textarea {
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            border: 1px solid #BEBEBE;
            padding: 7px;
            margin: 0px;
            -webkit-transition: all 0.30s ease-in-out;
            -moz-transition: all 0.30s ease-in-out;
            -ms-transition: all 0.30s ease-in-out;
            -o-transition: all 0.30s ease-in-out;
            outline: none;
          }

          .form-style .long {
            width: 100%;
          }

          .form-style input[type=text]:focus,
          .form-style input[type=email]:focus,
          .form-style textarea:focus {
            -moz-box-shadow: 0 0 8px #88D5E9;
            -webkit-box-shadow: 0 0 8px #88D5E9;
            box-shadow: 0 0 8px #88D5E9;
            border: 1px solid #88D5E9;
          }

          .error {
            color: #D8000C;
            background-color: #FFBABA;
          }
        `}
      </style>

      <h1>Get in Touch!</h1>
      <h2>Contact Form</h2>
      <form ref={form} onSubmit={validateForm} method="post">
        <table className="form-style">
          <tr>
            <td>
              <label>
                Your name <span className="required">*</span>
              </label>
            </td>
            <td>
              <input type="text" name="name" className="long" />
              <span className="error" id="errorname">{errors.name}</span>
            </td>
          </tr>
          <tr>
            <td>
              <label>
                Your email address <span className="required">*</span>
              </label>
            </td>
            <td>
              <input type="email" name="email" className="long" />
              <span className="error" id="erroremail">{errors.email}</span>
            </td>
          </tr>
          <tr>
            <td>
              <label>
                Category <span className="required">*</span>
              </label>
            </td>
            <td>
              <select name="category" className="long">
                <option value="">Select a category</option>
                <option value="Recipe Suggestion">Suggest Recipe</option>
                <option value="Restaurant Suggestion">Suggest Restaurant</option>
                <option value="Ideas">Suggest Ideas</option>
                <option value="Enquiries">General Enquiries</option>
                <option value="Feedback">Feedback</option>
              </select>
              <span className="error" id="errorcategory">{errors.category}</span>
            </td>
          </tr>
          <tr>
            <td>
              <label>
                Message <span className="required">*</span>
              </label>
            </td>
            <td>
              <textarea name="message" className="long field-textarea"></textarea>
              <span className="error" id="errormsg">{errors.message}</span>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="submit" value="Send" className="submit-button" />
              <span>&nbsp;&nbsp;</span>
              <input type="reset" value="Reset" className="reset-button" />
            </td>
          </tr>
        </table>
      </form>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>Find Out More?</h2>
        <p>
          We are on Instagram (@FoodieBits), Youtube (FoodieTube), and Github (FoodieBits) with more content than ever!

          Drop us an email at info@FoodieBits.com or a letter to office at 219 Henderson Road #09-03
Singapore 159556 for other related enquiries or partnerships.
        </p>
      </div>
      {/* Google Map Embed */}
      <div style={{ marginTop: '20px', textAlign: 'center'  }}>
        <h2>Our Location</h2>
        <div style={{ width: '80%', margin: 'auto' }}>
        <iframe
          title="Google Map"
          width="600"
          height="450"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.822144597304!2d103.81733707481736!3d1.28037766179553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11f1aee5dcb3%3A0x39fee500981d0d0a!2sMount%20Hermon%20Bible%20-%20Presbyterian!5e0!3m2!1sen!2ssg!4v1706378229958!5m2!1sen!2ssg" 
        ></iframe>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>Our Past Partners!</h2>
        <p>
          Here are some of the wonderful companies and events we've been honoured to be apart of!
        </p>
      </div>
    </div>
  );
}

export default ContactForm;
