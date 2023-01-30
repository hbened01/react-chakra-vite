import { useState } from "react";
import "./App.css";
import { Button, Container, Center, FormControl, FormLabel, InputGroup, Input } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <Container
      className="App"
      maxW="container.xl"
      h="container.lg"
      bg="gray.100"
      centerContent
    >
      {/* <Center h="100vh" w="100vw">
        <Button
          colorScheme="blue"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
      </Center> */}
      <FormControl isRequired mt={6}>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="*******"
            size="lg"
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
          {/* <InputRightElement width="3rem">
            <Button h="1.5rem" size="sm" onClick={handlePasswordVisibility}>
              {showPassword ? <Icon name="view-off" /> : <Icon name="view" />}
            </Button>
          </InputRightElement> */}
        </InputGroup>
      </FormControl>
    </Container>
  );
}

export default App;
