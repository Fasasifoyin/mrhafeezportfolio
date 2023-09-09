import { useState } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import Input from "./Input";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, subject, message);
  };

  return (
    <form style={{ width: "100%" }} onSubmit={onSubmit}>
      <Flex direction={"column"} gap={"30px"}>
        <Input intial={name} setInitial={setName} placeholder={"Your Name"} />
        <Input
          intial={email}
          setInitial={setEmail}
          placeholder={"Your Email"}
        />
        <Input
          intial={subject}
          setInitial={setSubject}
          placeholder={"Subject"}
          type={"email"}
        />
        <textarea
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
            <h4 className="small-text fw-600">Send Message</h4>
          </Button>
        </Box>
      </Flex>
    </form>
  );
};

export default Form;
