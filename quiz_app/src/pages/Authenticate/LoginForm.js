import React, {createRef, useState } from 'react';
import Alert from '@material-ui/lab/Alert';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from "react-router-dom"
import "./login.css";
import {useAuth} from '../../contexts/AuthContext';

export default function LoginForm() {

  const emailRef = createRef()
  const passwordRef = createRef()
  const {login} = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e){
    e.preventDefault()

    console.log('test')
    try{
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    }
    catch{
      setError("Failed to login..!!")
    }
    setLoading(false)
  }

    return (
        <div className={'formcont'}>
          {error && <Alert severity="error">{error}</Alert>}
          <form onSubmit={handleSubmit}>
          <h2 style={{textAlign:'center'}}> Login</h2>
            <TextField
              fullWidth
              label={'Username'}
              margin={'normal'}
              variant="filled"
              inputRef={emailRef}
              className={'root focused underline input'}
            />
            <TextField
              fullWidth
              label={'Password'}
              margin={'normal'}
              variant="filled"
              type={'password'}
              inputRef={passwordRef}
              className={'root focused underline input'}
            />
            <FormControl fullWidth>
              <FormControlLabel
                control={
                  <Checkbox value="checkedC" className={'checkbox'} />
                }
                label="Remember Me"
              />
            </FormControl>
            <FormControl margin={'normal'} fullWidth>
              <Button
              className={'buttonLabel'}
                fullWidth
                variant={'contained'}
                color={'primary'}
                type={'submit'}
                disabled={loading}
              >
                Log in
              </Button>
            </FormControl>
          </form>
        </div>
    );
};

// export default LoginForm;

