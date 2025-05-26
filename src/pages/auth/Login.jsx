import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { useState } from 'react';
import axios from 'axios';

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Button variant="soft">Change mode</Button>;
  }

  


  return (
    <Select
      variant="soft"
      value={mode}
      onChange={(event, newMode) => {
        setMode(newMode);
      }}
      sx={{ width: 'max-content', fontSize: 'md', mb: 2 }}
    >
      <Option value="system">System</Option>
      <Option value="light">Light</Option>
      <Option value="dark">Dark</Option>
    </Select>
  );
}

export default function Login(props) {
    
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState('')

 const handleLogin = async () => {
  const data = {
    username, // username o‘rniga email bo‘lishi kerak
    password
  };

  try {
    const response = await axios.post('https://ipro.javohir-dev.uz/api/auth/login', data);

    const result = response.data;

    if (result.success) {
      sessionStorage.setItem('token', result.data.resToken.body);
      sessionStorage.setItem('user', JSON.stringify(result.data.user));
      window.location.href = '/dashboard';
    } else {
      alert('Login muvaffaqiyatsiz: ' + result.message);
    }

  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert('Email yoki parol noto‘g‘ri!');
    } else {
      alert('Server xatolik yuz berdi!');
    }
    console.error('Login error:', error);
  }
};

  return (
    <main>
      <CssVarsProvider {...props}>
        <CssBaseline />
        <Sheet
          sx={{
            width: 400,
            mx: 'auto',
            my: 6,
            py: 4,
            px: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 2.5,
            borderRadius: 'md',
            boxShadow: 'lg',
          }}
          variant="outlined"
        >
          <ModeToggle />

          <div>
            <Typography level="h3" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body-md">Sign in to continue</Typography>
          </div>

          <FormControl>
            <FormLabel sx={{ fontSize: 'lg' }}>Email</FormLabel>
            <Input
              size="lg"
              name="email"
              type="email"
              placeholder="johndoe@email.com"
              value={username}
              onChange={e=>setUsername(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel sx={{ fontSize: 'lg' }}>Password</FormLabel>
            <Input
              size="lg"
              name="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={e=>setPassword(e.target.value)}
            />
          </FormControl>

          <Button size="lg" sx={{ mt: 2 }} onClick={()=>handleLogin()}>
            Log in
          </Button>
        </Sheet>
      </CssVarsProvider>
    </main>
  );
}
