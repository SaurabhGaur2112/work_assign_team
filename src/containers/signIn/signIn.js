import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';
import { css } from 'react-emotion';
import SignInForm from './signInForm';

const cardLayout = css`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    height: 270px;
    width: 350px;
`

const SignIn = () => {
    return(
        <Card className={cardLayout}>
            <CardContent>
                <Typography style={{fontSize: '20px',marginBottom: '10px'}}>
                    Sign In

                    <button className="btn btn-danger btn-sm" style={{float: 'right'}}>Create Account</button>
                </Typography>

                <SignInForm />
            </CardContent>
        </Card>
    );
}

export default SignIn;