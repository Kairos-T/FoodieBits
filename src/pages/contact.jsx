// By: Ruby
// ContactForm.jsx

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Image,
  Input,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Select,
  Text,
  Textarea
} from "@chakra-ui/react";

//stores emailjs key to be sent to
emailjs.init("vB5Ojf6X0YBHrjcdn");

//run to get entered data as contact form
function ContactForm() {
  const [errors, setErrors] = useState({ name: "", email: "", message: "", category: "" });
  const form = useRef();

  const validateForm = async (e) => {
    e.preventDefault();
//stores value, user input
    const name = form.current["name"];
    const email = form.current["email"];
    const message = form.current["message"];
    const category = form.current["category"];

    // Validation logic
    const newErrors = { name: "", email: "", message: "", category: "" };

    if (name.value === "") {
      newErrors.name = "Please enter a valid name";
      name.focus();
    }

    if (email.value === "") {
      newErrors.email = "Please enter a valid email address";
      email.focus();
    } else if (email.value.indexOf("@", 0) < 0 || email.value.indexOf(".", 0) < 0) {
      newErrors.email = "Please enter a valid email address";
      email.focus();
    }

    if (message.value === "") {
      newErrors.message = "Please enter a valid message";
      message.focus();
    }

    if (category.value === "") {
      newErrors.category = "Please select a category";
      category.focus();
    }

    if (Object.values(newErrors).every(value => value === "")) {
      try {
        await sendEmail();
        form.current.reset();
      } catch (error) {
        console.error("Error sending email:", error);
      }
    }

    setErrors(newErrors);
  };
//Sends email to FoodieBits' email address based on template created in emailjs
  const sendEmail = () => {
    console.log("Sending email...");
    return emailjs
      .sendForm("service_1dy6a7a", "template_trpvjsu", form.current, "vB5Ojf6X0YBHrjcdn")
      .then((result) => {
        console.log("Email sent:", result.text);
      })
      .catch((error) => {
        console.error("Email error:", error.text);
      });
  };
//Other information related to contact
  return (
    <Box>
      <Heading textAlign="center" fontSize={{ base: "36px", md: "72px" }}>
        Get in Touch!
      </Heading>
      <Heading textAlign="center" fontSize={{ base: "24px", md: "30px" }}>
        Contact Form
      </Heading>
      <form ref={form} onSubmit={validateForm} method="post">
        <Box maxW={{ base: "100%", md: "400px" }} m="10px auto" p={{ base: "10px", md: "20px 12px 10px 20px" }}>
          <FormControl isInvalid={errors.name !== ""}>
            <FormLabel>
              Your name <Text color="red">*</Text>
            </FormLabel>
            <Input type="text" name="name" className="long" />
            <FormErrorMessage>{errors.name}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.email !== ""}>
            <FormLabel>
              Your email address <Text color="red">*</Text>
            </FormLabel>
            <Input type="email" name="email" className="long" />
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.category !== ""}>
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
          <FormControl isInvalid={errors.message !== ""}>
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
      {/*Embed a map of our supposed office location along with pictures of past partners to give legitimacy */}
      <Box textAlign="center" mt="20px">
        <Heading fontSize={{ base: "24px", md: "36px" }}>Our Office</Heading>
        <Text>Feel free to send us fan or corporate mail to office at Blk 28 Kallang Pl, #03-12, Singapore 339158</Text>
        <Box w={{ base: "100%", md: "80%" }} m="auto">
          <iframe
            title="Google Map"
            width="100%"
            height="450"
            loading="lazy"
            allowFullScreen
            style={{ border: "0", display: "block", margin: "auto" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7715701640886!2d103.86631950658614!3d1.312478166449059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19ccfdd88ce1%3A0x2c2dab992de62c0f!2sMaple%20Tree!5e0!3m2!1sen!2ssg!4v1707387254997!5m2!1sen!2ssg"
          ></iframe>
        </Box>
      </Box>
      <Box textAlign="center" mt="20px">
        <Heading fontSize={{ base: "24px", md: "36px" }}>Our Past Partners!</Heading>
        <Text>Here are some of the wonderful companies and events we've been honoured to have worked with!</Text>
        <Flex justify="center" align="center" mt="4" flexWrap="wrap">
          <Image src="/images/contact/ock.png" alt="Old Chang Kee" boxSize={{ base: "100px", md: "150px" }} m="4" />
          <Image src="/images/contact/eatbook.png" alt="EatBook" boxSize={{ base: "100px", md: "150px" }} m="4" />
          <Image src="/images/contact/gastrobeats.png" alt="GastroBeats" boxSize={{ base: "100px", md: "150px" }}
                 m="4" />
          <Image src="/images/contact/singaporefest.png" alt="Singapore Food Festival"
                 boxSize={{ base: "100px", md: "150px" }} m="4" />
          <Image src="/images/contact/stamford.png" alt="Stamford Catering" boxSize={{ base: "100px", md: "150px" }}
                 m="4" />
        </Flex>
      </Box>
      <Box textAlign="center" my={5}>
        <Popover>
          <PopoverTrigger>
            <Button variant="outline">Share</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>Share FoodieBits with Others</PopoverHeader>
            <PopoverBody>
              <div><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//foodie-bits.vercel.app/">Share on
                Facebook</a></div>
              <div><a
                href="https://twitter.com/intent/tweet?text=All%20the%20best%20recipes%20and%20restaurants%20at%20FoodieBits%20-%20https%3A//foodie-bits.vercel.app/">Share
                on X</a></div>
              <div><a
                href="https://t.me/share/url?url=https%3A//foodie-bits.vercel.app/&text=For%20all%20the%20best%20recipes%20and%20restaurants%20in%20Singapore,%20its%20all%20on%20FoodieBits!">Send
                via Telegram</a></div>
              <div><a href="whatsapp://send?text=https://foodie-bits.vercel.app/" target="_blank"
                      rel="nofollow noopener">Share on WhatsApp</a></div>
              <div><a
                href="https://www.tumblr.com/widgets/share/tool?canonicalUrl=https://foodie-bits.vercel.app/&title=FoodieBits&caption=For%20all%20the%20best%20places%20to%20dine%20and%20the%20tastiest%20recipes%20in%20Singapore!"
                target="_blank" rel="nofollow noopener">Share on Tumblr</a></div>
              <div></div>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
    </Box>
  );
}


export default ContactForm;


