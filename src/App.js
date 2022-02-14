import './App.css';
import Header from "./component/Header";
import {Container, MuiThemeProvider} from "@material-ui/core";
import Quiz from "./page/Quiz";
import theme from "./theme";

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <div>
                <Header/>
                <Container>
                    <Quiz/>
                </Container>
            </div>
        </MuiThemeProvider>
    );
}

export default App;
