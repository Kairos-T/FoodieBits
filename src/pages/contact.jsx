// By: Ruby
// ContactForm.jsx

import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
} from '@chakra-ui/react';

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
    <Box>
      <Heading textAlign="center" fontSize="72px">
        Get in Touch!
      </Heading>
      <Heading textAlign="center" fontSize="30px">
        Contact Form
      </Heading>
      <form ref={form} onSubmit={validateForm} method="post">
        <Box maxW="400px" m="10px auto" p="20px 12px 10px 20px">
          <FormControl isInvalid={errors.name !== ''}>
            <FormLabel>
              Your name <Text color="red">*</Text>
            </FormLabel>
            <Input type="text" name="name" className="long" />
            <FormErrorMessage>{errors.name}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.email !== ''}>
            <FormLabel>
              Your email address <Text color="red">*</Text>
            </FormLabel>
            <Input type="email" name="email" className="long" />
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.category !== ''}>
            <FormLabel>
              Category <Text color="red">*</Text>
            </FormLabel>
            <Select name="category" className="long">
              <option value="">Select a category</option>
              <option value="Recipe Suggestion">Suggest Recipe</option>
              <option value="Restaurant Suggestion">Suggest Restaurant</option>
              <option value="Ideas">Suggest Ideas</option>
              <option value="Enquiries">General Enquiries</option>
              <option value="Feedback">Feedback</option>
            </Select>
            <FormErrorMessage>{errors.category}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.message !== ''}>
            <FormLabel>
              Message <Text color="red">*</Text>
            </FormLabel>
            <Textarea name="message" className="long field-textarea"></Textarea>
            <FormErrorMessage>{errors.message}</FormErrorMessage>
          </FormControl>
          <Button type="submit" variant="submit-button">
            Send
          </Button>
          <Button type="reset" variant="reset-button" ml="2">
            Reset
          </Button>
        </Box>
      </form>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>Find Out More?</h2>
        <p>
          We are on Instagram (@FoodieBits), Youtube (FoodieTube), and Github (FoodieBits) with more content than ever!

          Drop us an email at info@FoodieBits.com for other related enquiries or partnerships.
        </p>
      </div>
      {/* Google Map Embed */}
      <div style={{ marginTop: '20px', textAlign: 'center'  }}>
        <h2>Our Office</h2>
        <p>Feel free to send us fan or corporate mail to office at 219 Henderson Road #09-03 Singapore 159556</p>
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
    </Box>
  );
}

export default ContactForm;
