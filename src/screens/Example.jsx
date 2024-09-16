import {
  Code,
  Container,
  ListItem,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Example = (props) => {
  return (
    <Container m={0} maxW="container.xl">
      <h1>
        Hello team! This is an example page. I also encourage you to list links
        to your respective pages below this in the <Code>Example.jsx</Code>{" "}
        file.
      </h1>
      <UnorderedList>
        <ListItem>
          <Link to="/">Example</Link>
        </ListItem>
        <ListItem>
          <Link to="/home">Home</Link>
        </ListItem>
      </UnorderedList>
    </Container>
  );
};

export default Example;
