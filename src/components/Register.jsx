import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import { useNavigate } from 'react-router';

const Register = () => {

    const { createUser, setUser } = useContext(AuthContext) // here we are getting the userInfo object and destructuring them

    const navigate = useNavigate();

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const formData = new FormData(form);
        const email = formData.get('email')
        const password = formData.get('password')

        // Create User in the firebase
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        setUser({
                            ...user,
                            displayName: name,
                            photoURL: photo
                        });

                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Registered Successfully!",
                            showConfirmButton: false,
                            timer: 1500
                        });

                        console.log("✅ User profile updated:", {
                            name: auth.currentUser.displayName,
                            photo: auth.currentUser.photoURL
                        });

                        navigate('/')

                    })

            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong in in register!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignUp now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSignUp} className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" />
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">PhotoURL</label>
                            <input type="URL" name='photo' className="input" placeholder="Photo URL" />
                            <label className="label">Password</label>
                            <input type="password" name='password' pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">SignUp</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;