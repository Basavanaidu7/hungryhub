import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./hungryhubb/src/firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/home");
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="login">
            <h2>Swiggy Login</h2>
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={login}>Login</button>
        </div>
    );
}