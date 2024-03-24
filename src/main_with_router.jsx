//deploy an BrowserRouter for the app that will be used to navigate between the different components
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import * as ReactDOM from 'react-dom';
import VisitorCounter from './VisitorCounter';
import About from './About';



const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename='/'>
        <Routes>
        <Route path="/" component={VisitorCounter} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        </Routes>
    </BrowserRouter>
    );

