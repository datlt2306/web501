import Navigo from "navigo"; // When using ES modules.
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
import { render, router } from "./lib";
import ProductAddPage from "./pages/ProductAdd";
import ProductEditPage from "./pages/ProductEdit";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import CategoryPage from "./pages/CategoryPage";

const app = document.querySelector("#app");

// private router
router.on("/admin/*", () => {}, {
    before(next) {
        const { user } = JSON.parse(localStorage.getItem("user")) || {};
        if (!user) return (window.location.href = "/");
        if (user && user.id != "1") return (window.location.href = "/signin");
        next();
    },
});

router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/product", () => render(ProductPage, app));
router.on("/signup", () => render(Signup, app));
router.on("/signin", () => render(Signin, app));
router.on("/category/:id", ({ data }) => render(() => CategoryPage(data), app));
router.on("/product/:id", ({ data }) => render(() => ProductDetail(data), app));
// Admin
router.on("/admin/product/add", () => render(ProductAddPage, app));
router.on("/admin/product/:id/edit", ({ data }) => render(() => ProductEditPage(data), app));

router.resolve();
