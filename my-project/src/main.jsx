import ReactDOM from "react-dom/client";
import "./index.css";
const myName = "Dat";
const myAge = 20;
const isMarried = true;
const info = {
    name: "React",
    version: 17,
};
const mySkill = ["Ăn tục", "Nói phét"];
// ["Kĩ năng Ăn tục", "Kĩ năng Nói phét"];
ReactDOM.createRoot(document.getElementById("root")).render(
    <>
        <p>Name: {myName}</p>
        <p>Age: {myAge + 10}</p>
        <p>Married: {isMarried ? "Đã chết chưa chôn thôi" : "Tuyệt vời"}</p>
        <p>
            Kĩ năng sống:
            {mySkill.map((skill) => {
                return <div key={skill}>Kĩ năng {skill}</div>;
            })}
        </p>
        <hr />
        <h1>Hello {info.name}</h1>
        <p>Version: {info.version}</p>
    </>
);

// const element = document.querySelector('root');
// let reuslt = "";
// for(let i = 0; i < 1000000; i++) {
//     element.innerHTML = `<p>${i}</p>`;
// }

// element.innerHTML = result;
