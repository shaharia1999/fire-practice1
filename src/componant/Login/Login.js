import React from 'react';

const Login = () => {
    return (
        <div>
             <form >
                <label > Name :</label>
                <br />
                <input type="text" />
                <br />
                <label > Email:</label>
                <br />
                <input type="email" />
                <br />
                <label>PassWord</label>
                <br />
                <input type="password" />
                <br />
            </form>
            <button>Sing in With Google</button>
            
        </div>
    );
};

export default Login;