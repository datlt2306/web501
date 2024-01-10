import ReactDOM from "react-dom/client";

const myName = "Le Trong Dat";
const myAge = 20;
const isMarried = true;
const myInfo = {
    name: "Kien",
    age: 30,
};
const Menu = () => {
    return (
        <ul>
            <li>Home</li>
            <li>About</li>
        </ul>
    );
};
const Header = () => {
    return (
        <header>
            <Menu />
        </header>
    );
};
const Footer = () => {
    return <footer>Footer</footer>;
};
const Main = () => {
    return <main>Main</main>;
};

// JAVASCRIPT XML
ReactDOM.createRoot(document.getElementById("root")).render(
    <>
        <Header />
        <Main />
        <Footer></Footer>
    </>
);
// npm create vite@latest my-react-project -- --template react
