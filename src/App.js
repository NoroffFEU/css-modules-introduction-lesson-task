import React from "react";
import "./App.css";
import Container from "./components/layout/container/Container";
import Nav from "./components/menu/nav/Nav";
import PageHeading from "./components/typography/headings/pageHeading/PageHeading";
import Grid from "./components/layout/grid/Grid";

function App() {
    return (
        <Container>
            <PageHeading />
            <Nav />
            <Grid />
        </Container>
    );
}

export default App;
