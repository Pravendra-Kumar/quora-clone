import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const initialData = {
        username: '',
        password: '',
    }
    const navigate = useNavigate();

    //state object for formdata
    const [loginformdata, setFormdata] = useState(initialData);

    //state variable to check form submission status
    const [loginstatus, setStatus] = useState(false);

    //method to update each key of state object
    const updateData = (e) => {
        console.log(e.target.id, e.target.value);
        let tempObj = {};
        tempObj[e.target.id] = e.target.value.trim();
        setFormdata({
            ...loginformdata, ...tempObj
        });
    }

    //methods for form submission button
    const loginFn = () => {
            //form submiited
            //setStatus(true);
            //call api for form submission - POST - Submit Data - loginformdata/localstorage
            let temp = JSON.parse(localStorage.getItem('users'));
            // localStorage.setItem('users', JSON.stringify([...temp, formdata]));


            for(let i=0 ; i<temp.length ; i++) {
                console.log(temp[i].username, loginformdata.username);
                if(temp[i].username === loginformdata.username) {
                    console.log('Inside first if - ', i)
                    if(temp[i].password === loginformdata.password) {
                        console.log('Inside 2nd if - ', i)
                        setStatus(true);
                        //set context varibale
                        navigate('/quora')

                    }
                }
            }





            //store the response in a state variable
            setFormdata(initialData);
    }

    useEffect(() => {
        let temp = localStorage.getItem('users');
        console.log(JSON.parse(temp));
    }, [loginstatus])

  return (
    <div className='login'>
       <div className='login__conatainer'>
        
           <div className='login__img'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png' alt=''/>
           </div>
           <h3>Login Form</h3>
          <input type="text" id="username" onChange={updateData} value={loginformdata.username} placeholder="Enter UserName" />
          <input type="password" id="password" onChange={updateData} value={loginformdata.password} placeholder="Enter Password" />
          <br></br>

         <button className='btn' onClick={loginFn}>Login</button>
          <br></br>
          <br></br>
          <Link to="/register">Register</Link>
            {loginstatus && <div class="alert alert-success" role="alert">
            <p>Logged In Successfully</p>
             </div>
          }
    </div>
    </div>
  )
}

export default Login