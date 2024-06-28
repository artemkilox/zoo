import {BrowserRouter} from "react-router-dom";
import {observer} from "mobx-react-lite";
import AppRouter from "./router/AppRouter";
import './styles/fonts.css'
import './styles/index.css'

const App = observer(() => {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
})

export default App;