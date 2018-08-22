import React, { Component } from 'react';

class SignUpForm extends Component{
    render(){
        return(
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter username"
                        style={{width: '300px'}}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter email"
                        style={{width: '300px'}}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>

                <button 
                    type="submit"
                    className="btn btn-primary"
                >Sign Up</button>
            </form>
        );
    }
}

export default SignUpForm;