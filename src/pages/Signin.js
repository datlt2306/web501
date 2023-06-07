import Header from "../components/Header";
import { router, useEffect } from "../lib";
const Signin = () => {
    useEffect(() => {
        const formSignin = document.querySelector("#form-signin");
        if (!formSignin) return;
        formSignin.addEventListener("submit", function (event) {
            // chặn reload trang
            event.preventDefault();

            const credential = {
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
            };

            fetch(`${import.meta.env.VITE_API_URI}/signin`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credential),
            })
                .then((response) => response.json())
                .then((data) => {
                    // lưu vào localStorage
                    localStorage.setItem("user", JSON.stringify(data));
                });
        });
    });
    return `
        <div class="container max-w-4xl mx-auto px-4">
            ${Header()}
            <h1>Đăng nhập</h1>
            <form id="form-signin">
                <input type="text" placeholder="Email"  id="email"/>
                <input type="password" placeholder="Password"  id="password"/>
                <button>Submit</button>
            </form>
                
        </div>
    `;
};
export default Signin;
