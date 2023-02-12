import React from "react";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Shop } from "./components/Shop";

function App() {
    return (
        // This is the React.Fragment
        <>
            <Header />
            <Shop />
            <Footer />
        </>
    );
}

export default App;
