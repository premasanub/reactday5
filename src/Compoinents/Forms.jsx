import React from 'react';
import { useState } from 'react';

const Forms = () => {
    const[formData,setFormData] = useState({
        username: "prema",
        password: "",
        email: "",
        gender: "others"
    })
    return (
        <div>
            <h1>register Form</h1>
            <form>
                <div>
                    <p>
                        <label>Username:</label>
                    </p>
                    <p>
                        <input
                        type='text'
                        name='username'
                        value={formData.username}
                        placeholder='Enter user name'
                        require />
                        
                    </p>
                </div>
                <div>
                    <p>
                        <label>Password:</label>
                    </p>
                    <p>
                        <input
                        type='password'
                        name='password'
                        value={formData.password}
                        placeholder='Enter your password'
                        require />
                        
                    </p>
                </div>
                <div>
                    <p>
                        <label>Email:</label>
                    </p>
                    <p>
                        <input 
                        type="email"
                        name='email'
                        value={formData.email}
                        placeholder='Enter Your Email Id'
                        required
                        />
                    </p>
                </div>
                 <div>
                    <p>
                        <label>Gender:</label>
                    </p>
                   <p>
                    <select name="gender" value={formData.gender} >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Rather Not To Say</option>
                    </select>
                   </p>
                </div>
                <button type='submit'>Register</button>
            </form>
        </div>
    );
};

export default Forms;