import { defineConfig, devices } from '@playwright/test';
import path from 'node:path';


const distPath = path.join(__dirname, '..', 'dist');


export default defineConfig({
testDir: __dirname,
reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
use: {
headless: true,
// Em CI, usar 'headless: true'. Para debugging local, pode setar via env.
},
projects: [
{
name: 'chromium-with-extension',
use: {
...devices['Desktop Chrome'],
launchOptions: {
args: [
`--disable-extensions-except=${distPath}`,
`--load-extension=${distPath}`
]
}
}
}
]
});