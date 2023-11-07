import { Header, InfoCard, NavBarMenu, Register } from "."



export const App = () => {
    return (
        <div
            style={{
                display: "flex",
                height: "100vh",
                overflowY: "hidden"
            }}
        >
            <Header />
            <NavBarMenu /> 
            <Register/>
        </div>
    )
}