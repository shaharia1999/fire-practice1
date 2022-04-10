import React from 'react';
import FireHooks from '../../Hooks/Hooks';


const Register = () => {
    const {singUpWithgoole,user}=FireHooks();

    
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
            <button  onClick={singUpWithgoole}>Sing uP With Google</button>

            <div>
                <h1>User information</h1>
                <h3>Name :{user?.displayName}</h3>
                <img src={user?.photoURL} alt="" />
                
            </div>
            
        </div>
    );
};

export default Register;