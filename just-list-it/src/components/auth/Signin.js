import { useState } from 'react';
import './App.css';

import { signInWithEmailAndPassword, getAuth} from "firebase/auth";
import { auth } from "../../firebase";

export default function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(getAuth, email, password)
        .the((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return(
        <div className='Signin'>
            <section class="flex h-screen bg-green-800">
                <div class="w-80 m-auto">
                    <form onSubmit={signIn}>
                        <h1 class="text-center mb-8 text-5xl text-bold">Just List It</h1>
                        <input type="email" 
                            class="border-2 border-gray-600 rounded-lg px-3 py-2 mb-5 text-sm w-full" 
                            placeholder="Please enter your email."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" 
                            class="border-2 border-gray-600 rounded-lg px-3 py-2 mb-5 text-sm w-full"
                            placeholder="Please enter your password."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                        <div class="flex justify-center">
                            <button type="submit" class="border rounded-lg border-black px-7 py-1 bg-black text-white font-bold">Login</button>
                        </div>
                    </form>
                </div>
          </section>
        </div>
    )
}