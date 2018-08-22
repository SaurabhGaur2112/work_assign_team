import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';
import { css } from 'react-emotion';
import SignUpForm from './signUpForm';

const cardLayout = css`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    height: 330px;
    width: 350px;
`

const SignUp = () => {
    return(
        <Card className={cardLayout}>
            <CardContent>
                <Typography style={{fontSize: '20px',marginBottom: '10px'}}>
                    Sign Up

                    <button className="btn btn-info btn-sm" style={{float: 'right'}}>Sign In</button>
                </Typography>

                <SignUpForm />
            </CardContent>
        </Card>
    );
}

export default SignUp;