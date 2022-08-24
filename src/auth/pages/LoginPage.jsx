import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useForm } from '../../hooks/useForm'
import comic from '../../image/comic.jpg'
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
} from '@chakra-ui/react';

export const LoginPage = () => {

  const navigate = useNavigate();

  const { login } = useContext(AuthContext)

  const {formState, onInputChange} = useForm({
    username: '',
  })

  const { username } = formState

  const onLogin = () => {
    
    if(username.trim().length <= 1) return

    login(username)

    navigate("/", {
      replace: true,
    });

  };

  return (
    <>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <FormLabel fontSize={30} textAlign={'center'}>Inicia Sesion</FormLabel>
          <FormControl onSubmit={()=> onLogin()}>
            <Input 
              type="text"
              placeholder="Ingrese usuario..."
              name="username"
              value={username}
              onChange={onInputChange}
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              colorScheme={'green'}
              variant={'solid'}
              onClick={onLogin}
              disabled={!username}
            >
              Login
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            comic
          }
        />
      </Flex>
    </Stack>
    </>
  );
};