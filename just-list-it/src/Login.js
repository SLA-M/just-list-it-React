import './App.css';

export default function Login() {
    return(
        <div className='Login'>
            <section class="flex h-screen">
                <div class="w-80 m-auto">
                    <h1 class="text-center mb-8 text-5xl text-bold">Just List It</h1>
                    <input type="text" 
                        class="border-2 border-gray-600 rounded-lg px-3 py-2 mb-5 text-sm w-full" 
                        placeholder="Please enter your email."/>
                    <input type="password" 
                        class="border-2 border-gray-600 rounded-lg px-3 py-2 mb-5 text-sm w-full"
                        placeholder="Please enter your password."/>
                    <div class="flex justify-center">
                        <button class="border rounded-lg border-black px-7 py-1 bg-black text-white font-bold">Login</button>
                    </div>
                </div>
          </section>
        </div>
    )
}