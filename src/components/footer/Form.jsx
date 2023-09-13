import { useRef, useState } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import Input from "./Input";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
// service_07w58zn

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_mas9xci",
        "template_e9gz3h6",
        form.current,
        "bA4fqTqAOjhRjZhGh"
      )
      .then(
        () => {
          toast.success("Message sent successfully");
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setLoading(false);
        },
        () => {
          toast.error("An error occured while sending message");
          setLoading(false);
        }
      );
  };

  return (
    <form ref={form} style={{ width: "100%" }} onSubmit={sendEmail}>
      <Flex direction={"column"} gap={"30px"}>
        <Input
          name="name"
          intial={name}
          setInitial={setName}
          placeholder={"Your Name"}
        />
        <Input
          name="email"
          intial={email}
          setInitial={setEmail}
          placeholder={"Your Email"}
          type={"email"}
        />
        <Input
          name="subject"
          intial={subject}
          setInitial={setSubject}
          placeholder={"Subject"}
        />
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-white fw-500"
          placeholder="Message"
          required
        />
        <Box>
          <Button
            type="submit"
            variant={"outline"}
            rounded={0}
            className="border-purple text-purple bg-purple-light-9-hover"
          >
            <h4 className="small-text fw-600">
              {loading ? "Sending..." : "Send Message"}
            </h4>
          </Button>
        </Box>
      </Flex>
    </form>
  );
};

export default Form;
