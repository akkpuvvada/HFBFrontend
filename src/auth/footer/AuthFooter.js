import React from "react";
import { Container } from "react-bootstrap";

const AuthFooter = () => {
    return (
        <React.Fragment>
            <footer className="bg-light border-top py-3 fixed-bottom">
                <Container>
                    &copy; Houston Food Bank - 2022
                </Container>
            </footer>
        </React.Fragment>
    );
}

export default AuthFooter;