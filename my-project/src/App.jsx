import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Main from "./componets/Main";
import ShowName from "./componets/ShowName";
function App() {
    return (
        <div>
            <ShowName name="John" age={20} />
            <ShowName name="Dat" age={25} />
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
