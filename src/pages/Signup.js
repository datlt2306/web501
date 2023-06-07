import Header from "../components/Header";
import { router, useEffect } from "../lib";
const Signup = () => {
    useEffect(() => {
        const formSignup = document.querySelector("#form-signup");
        if (!formSignup) return;
        formSignup.addEventListener("submit", function (event) {
            // chặn reload trang
            event.preventDefault();

            const credential = {
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
            };

            fetch(`${import.meta.env.VITE_API_URI}/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credential),
            }).then(() => {
                console.log("Bạn đăng ký thành công");
            });
        });
    });
    return `
        <div class="container max-w-4xl mx-auto px-4">
            ${Header()}
            <h1>Đăng ký</h1>
            <form id="form-signup">
                <input type="text" placeholder="Email"  id="email"/>
                <input type="password" placeholder="Password"  id="password"/>
                <button>Submit</button>
            </form>
                
        </div>
    `;
};
export default Signup;
