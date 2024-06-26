// src/mocks/server.ts
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// This setup is intended for the Node.js environment (e.g., for testing)
export const server = setupServer(...handlers);
