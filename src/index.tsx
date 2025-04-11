<<<<<<< HEAD
import {render} from 'react-dom'
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";

render(

=======
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import App from './app/App';

import './shared/config/i18n/i18n';

render(
>>>>>>> c51b3e9 (eslint and styleeslint)
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
<<<<<<< HEAD

    </BrowserRouter>
       ,
    document.getElementById('root')


)
=======
    </BrowserRouter>,
    document.getElementById('root'),
);
>>>>>>> c51b3e9 (eslint and styleeslint)
