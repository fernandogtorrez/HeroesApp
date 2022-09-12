import { useState } from "react";
import { Link, Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from '../../hooks/useForm'
import { useDispatch } from "react-redux";
import { startCreatingUserWithEmail } from "../store/auth/thunks";
import comic from '../../image/comic3.jpg'
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Image,
} from '@chakra-ui/react';


const formData = {
  email: '',
  password: '',
  displayName: '',
}

const formValidations = {
  email: [
    [(value) => value.includes("@"), "El correo debe tener un @"],
    [
      (value) =>
        value.match(
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
        ),
      "El correo debe tener un formato valido",
    ],
  ],
  password: [
    [
      (value) => value.length >= 6,
      "El password debe tener al menos 6 caracteres",
    ],
  ],
  displayName: [
    [(value) => value.length >= 1, "El nombre es obligatorio"],
    [(value) => value.length >= 6, "El nombre debe tener al menos 6 letras"]
  ]
};

export const RegisterPage = () => {

  const dispatch = useDispatch()

  const [formSubmited, setFormSubmited] = useState(false)

  const navigate = useNavigate();

  const {
    formState,
    onInputChange,
    displayName,
    email,
    password,
    isFormValid,
    displayNameValid,
    passwordValid,
    emailValid,
    FormErrorMessage
  } = useForm(formData,formValidations)

  const onLogin = (e) => {
    e.preventDefault()
    setFormSubmited(true)
    if(!isFormValid) return

    dispatch(startCreatingUserWithEmail(formState))
    navigate("/", {
      replace: true,
    });
  };

  return (
    <>
    <form onSubmit={onLogin}>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            comic
          }
        />
      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
      
        <Stack spacing={4} w={'full'} maxW={'md'} >
          <FormLabel fontSize={30} textAlign={'center'}>Registro de Usuario</FormLabel>
          <FormControl id="displayName">
            <Input 
              type="text"
              placeholder="Nombre Completo"
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              sx={{mb:2}}
              isInvalid={!!displayNameValid && formSubmited}
              isRequired={formSubmited && displayNameValid}

            />
            </FormControl>
            <FormControl id="email">
            <Input 
              type="email"
              placeholder="Correo@gmail.com"
              name="email"
              value={email}
              onChange={onInputChange}
              sx={{mb:2}}
              isInvalid={!!emailValid && formSubmited}
              isRequired={formSubmited && emailValid}
            />
            </FormControl >
            <FormControl id="password">
            <Input 
              type="password"
              placeholder="Contraseña"
              name="password"
              value={password}
              onChange={onInputChange}
              sx={{mb:2}}
              isInvalid={!!passwordValid && formSubmited}
              isRequired={formSubmited && passwordValid}
            />
            </FormControl>
          <Stack spacing={6}>
            <Button
              colorScheme={'green'}
              variant={'solid'}
              type='submit'
              disabled={!isFormValid && formSubmited}
            >
              Login
            </Button>
            <Link component={RouterLink} color="inherit" to="/auth/login" style={{display: 'flex', justifyContent: 'end' ,color:'black'}} className='linkColor'>
            Ya tengo una cuenta
            </Link>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
    </form>
    </>
  );
};