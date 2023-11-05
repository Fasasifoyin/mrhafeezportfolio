// import { useRef, useState } from "react";
// import { Box, Button, Flex } from "@chakra-ui/react";
// import Input from "./Input";
// import emailjs from "@emailjs/browser";
// import toast from "react-hot-toast";
// // service_07w58zn

// const Form = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     emailjs
//       .sendForm(
//         "service_mas9xci",
//         "template_e9gz3h6",
//         form.current,
//         "bA4fqTqAOjhRjZhGh"
//       )
//       .then(
//         () => {
//           toast.success("Message sent successfully");
//           setName("");
//           setEmail("");
//           setSubject("");
//           setMessage("");
//           setLoading(false);
//         },
//         () => {
//           toast.error("An error occured while sending message");
//           setLoading(false);
//         }
//       );
//   };

//   return (
//     <form ref={form} style={{ width: "100%" }} onSubmit={sendEmail}>
//       <Flex direction={"column"} gap={"30px"}>
//         <Input
//           name="name"
//           intial={name}
//           setInitial={setName}
//           placeholder={"Your Name"}
//         />
//         <Input
//           name="email"
//           intial={email}
//           setInitial={setEmail}
//           placeholder={"Your Email"}
//           type={"email"}
//         />
//         <Input
//           name="subject"
//           intial={subject}
//           setInitial={setSubject}
//           placeholder={"Subject"}
//         />
//         <textarea
//           name="message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           className="bg-white fw-500"
//           placeholder="Message"
//           required
//         />
//         <Box>
//           <Button
//             type="submit"
//             variant={"outline"}
//             rounded={0}
//             className="border-purple text-purple bg-purple-light-9-hover"
//           >
//             <h4 className="small-text fw-600">
//               {loading ? "Sending..." : "Send Message"}
//             </h4>
//           </Button>
//         </Box>
//       </Flex>
//     </form>
//   );
// };

// export default Form;

import { useRef, useState } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import Input from "./Input";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const serviceKey = import.meta.env.VITE_SERVICE_KEY;
  const templateKey = import.meta.env.VITE_TEMPLATE_KEY;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        serviceKey, templateKey, formRef.current, publicKey
      )
      .then(
        () => {
          toast.success("Message sent successfully");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
          });
          setLoading(false);
        },
        (error) => {
          toast.error("An error occurred while sending the message");
          console.error("EmailJS Error:", error);
          setLoading(false);
        }
      );
  };

  return (
    <form ref={formRef} style={{ width: "100%" }} onSubmit={handleSubmit}>
      <Flex direction="column" gap="30px">
        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
        />
        <Input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          type="email"
        />
        <Input
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="bg-white fw-500"
          placeholder="Message"
          required
        />
        <Box>
          <Button
            type="submit"
            variant="outline"
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

