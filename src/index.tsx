import React from 'react';
import { createRoot } from 'react-dom/client';
import { Root } from './Root';

const root = document.getElementById('root') as HTMLElement;
const rootElement = createRoot(root);

rootElement.render(
  <Root />
);
