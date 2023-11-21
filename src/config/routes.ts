import Home from "../pages/Home";
import Reading from "../pages/Reading";
import Journal from "../pages/Journal";

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
}
const routes: RouteType[] = [
    {
        path: "",
        component: Home,
        name: "Nightside Tarot"
    },
    {
        path: "/reading",
        component: Reading,
        name: "Reading"
    },
    {
        path: "/journal",
        component: Journal,
        name: "Journal"
    }
];

export default routes