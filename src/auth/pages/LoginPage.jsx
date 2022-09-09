import { Link, Link as RouterLink } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import {checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../store/auth/thunks'
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

  const dispatch = useDispatch()

  const { status } = useSelector((state) => state.auth)

  const isChecking = useMemo(()=> status === 'checking',[status])

  const {email,password, onInputChange} = useForm({
    email: '',
    password: '',
  })

  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault()
    console.log({email,password})
    dispatch(startLoginWithEmailPassword({email,password}))
    navigate("/", {
      replace: true,
    });
  };

  const onGoogleSignIn = ()=>{
    console.log('onGoogleSignIn');
    dispatch(startGoogleSignIn());
    navigate("/", {
      replace: true,
    });
  }

  return (
    <>
      <form onSubmit={onLogin}>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'} >
          <FormLabel fontSize={30} textAlign={'center'}>Inicia Sesion</FormLabel>
          <FormControl id="email">
            <Input 
              type="email"
              label='Correo'
              placeholder="Correo@gmail.com"
              name="email"
              value={email}
              onChange={onInputChange}
            />
            </FormControl>
            <FormControl id="password">
            <Input 
              type="password"
              label='Contraseña'
              placeholder="Contraseña"
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              colorScheme={'green'}
              variant={'solid'}
              type='submit'
              disabled={isChecking}
            >
              Login
            </Button>
            <Button
              colorScheme={'red'}
              variant={'solid'}
              type='submit'
              disabled={isChecking}
              onClick={onGoogleSignIn}
            >
              Google
            </Button>
            
          </Stack>
          
          <Link component={RouterLink} color="inherit" to="/auth/register" style={{display: 'flex', justifyContent: 'end'}} className='linkColor'>
              Crear una cuenta
            </Link>
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
    </form>
    </>
  );
};