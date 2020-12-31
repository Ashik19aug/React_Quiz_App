import React, { createRef, useState } from "react"
import Alert from '@material-ui/lab/Alert';
import FormControl from '@material-ui/core/FormControl'; 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./login.css";

import {useAuth} from '../../contexts/AuthContext';

export default function SignUp() {

  const emailRef = createRef()
  const passwordRef = createRef()
  const passwordConfirmRef = createRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [success,setSuccess] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e){
    e.preventDefault()
    
    // console.log(emailRef.current.value);
    // console.log(passwordRef.current.value);
    // console.log(passwordConfirmRef.current.value);
    if(passwordRef.current.value !== passwordConfirmRef.current.value){
      return setError("Passwords do not match")
    }
    try{
      setError("")
      setSuccess("")
      setLoading(true)
      await signup(emailRef.current.value,passwordRef.current.value)
    }
    catch{
      setError("Failed to create an account")
    }
    setSuccess("Your account Created Successfully.. ")
    setLoading(false)
  }

    return (
        <div className={'formcont'}>
          {error && <Alert severity="error">{error}</Alert>}
          {success && <Alert severity="success">{success}</Alert>}
            <form onSubmit={handleSubmit}>
          <h2 style={{textAlign:'center'}}>SignUp</h2>
            <TextField
              fullWidth
              label={'Email'}
              margin={'normal'}
              variant="filled"
              type={'email'}
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
            <TextField
              fullWidth
              label={'Re-Enter Password'}
              margin={'normal'}
              variant="filled"
              type={'password'}
              inputRef={passwordConfirmRef}
              className={'root focused underline input'}
            />
            <FormControl margin={'normal'} fullWidth>
              <Button
              className={'buttonLabel'}
                fullWidth
                variant={'contained'}
                color={'primary'}
                type={'submit'}
                disabled={loading}
                // onClick={showRefContent}
              >
                SignUp
              </Button>
            </FormControl>
            
          </form>
        </div>
    );
};

// export default SignUp;

