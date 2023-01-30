import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  CircularProgress,
  InputGroup,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import { userLogin } from "./../../utils/mockApi.js";
import { ErrorMessage } from "./../../components";
import { BsEye, BsEyeSlash } from "react-icons/bs";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => setShowPassword(!showPassword);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await userLogin({ email, password });
      setIsLoggedIn(true);
      setIsLoading(false);
      setShowPassword(false);
    } catch (error) {
      setError("Invalid username or password");
      setIsLoading(false);
      setEmail("");
      setPassword("");
      setShowPassword(false);
    }
  };
  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box
        p={8}
        w="40vw"
        maxWidth="50vw"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        {isLoggedIn ? (
          <Box textAlign="center">
            <Text>{email} logged in!</Text>
            <Button
              variantColor="orange"
              variant="outline"
              width="full"
              mt={4}
              onClick={() => setIsLoggedIn(false)}
            >
              Sign out
            </Button>
          </Box>
        ) : (
          <>
            <Box textAlign="center">
              <Heading>Login</Heading>
            </Box>
            <Box my={4} textAlign="left">
              <form onSubmit={handleSubmit}>
                {error && <ErrorMessage message={error} />}
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="test@test.com"
                    size="lg"
                    onChange={(event) => setEmail(event.currentTarget.value)}
                  />
                </FormControl>
                <FormControl isRequired mt={6}>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="*******"
                      size="lg"
                      onChange={(event) =>
                        setPassword(event.currentTarget.value)
                      }
                    />
                    <InputRightElement width="3rem">
                      <Button
                        h="1.5rem"
                        size="sm"
                        onClick={handlePasswordVisibility}
                      >
                        {showPassword ? (
                          <Icon as={BsEye} />
                        ) : (
                          <Icon as={BsEyeSlash} />
                        )}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Button
                  colorScheme="teal"
                  variant="outline"
                  type="submit"
                  width="full"
                  mt={4}
                >
                  {isLoading ? (
                    <CircularProgress
                      isIndeterminate
                      size="24px"
                      color="teal"
                    />
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </form>
            </Box>
          </>
        )}
      </Box>
    </Flex>
  );
}
