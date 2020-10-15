import React, { useContext } from 'react';
import google from '../../icons/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebase.config';
import Navbarr from '../SharedComponents/Navbarr/Navbarr';
import logos from '../../logos/logo.png';


const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);  //firebase app name duplicate jeno na hoi tai  if used.
    }

    //google signin

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = {name: displayName, email: email } //result.user theke displayname and email ke alada variable a rakhlam
            setLoggedInUser(signedInUser);
            history.replace(from);
            console.log(signedInUser);

        }).catch(function (error) {

            const errorMessage = error.message;

            const email = error.email;
            console.log(errorMessage, email);

        });
    }

    return (
        <div>
            <div>
                <Navbarr></Navbarr>
            </div>
                <div className="text-center mt-4">
                    <img style={{width:'150px' }} src={logos} alt=""/>
                </div>
            <div className="card text-center" style={{width: '500px', height:'300px', marginLeft:'450px', marginTop:'60px', borderRadius:'5px'}}>
                <div className="card-body">
                    <h5 className="card-title mt-5">Login With</h5>
                    <br/>
                    <br/>
                    <button style={{width:'350px',backgroundColor:'white', height:'40px',border:'1px solid gray', borderRadius:'20px', fontWeight:'450'}} onClick={handleGoogleSignIn}>
                         <img style={{width:'20px', marginRight:'100px'}} src={google} alt=""/>
                          <span style={{marginRight:'50px'}}>Continue With Google</span> 
                    </button>
                    
                    <p className="card-text">Don't have any account? <Link to="/login"> <a href="#">Create an account</a></Link></p>
                </div>
            </div>

        </div>


    );
};

export default Login;