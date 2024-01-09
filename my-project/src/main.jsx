import ReactDOM from "react-dom/client";
const root = document.getElementById("root");
const myName = "Dat";
const myAge = 20;
const isMarried = true;
const myInfo = {
    name: "Kien",
    age: 30,
};
ReactDOM.createRoot(root).render(
    <>
        <h1>Hello {myName}</h1>
        <p>Age: {myAge}</p>
        <p>Status: {isMarried ? "Đã chết và chưa chôn" : "Pede"} </p>
        <p>
            Info: {myInfo.name} - {myInfo.age}
        </p>
        <p>lorem ipsum</p>
    </>
);

// const myName = "Dat";
// const text = `<h1>hello ${myName}</h1>`;
// const root = document.querySelector("#root");

// root.innerHTML = text;
