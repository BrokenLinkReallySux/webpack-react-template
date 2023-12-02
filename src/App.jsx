import * as React from 'react';
import jsonData from './data.json';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App()
{
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>{jsonData.value} + Webpack!</h1>} />
                <Route path="*" element={<div class="error"><h1>404: Page Not Found</h1></div>} />
            </Routes>
        </BrowserRouter>
    </>
}