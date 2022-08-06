/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Providers from './Providers';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
    <StrictMode>
        <Providers>
            <App />
        </Providers>
    </StrictMode>
);
