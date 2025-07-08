import { defineConfig } from 'cypress';
import { ports } from './config';

export default defineConfig({
    e2e: {
        baseUrl: `http://localhost:${ports.shell}`,
        supportFile: false,
    },
});
