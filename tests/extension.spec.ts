import { test, expect, chromium } from '@playwright/test';
import path from 'node:path';


const dist = path.resolve(__dirname, '..', 'dist');


test('popup carrega e exibe UI', async () => {
const context = await chromium.launchPersistentContext('', {
headless: true,
args: [
`--disable-extensions-except=${dist}`,
`--load-extension=${dist}`
]
});


const [page] = context.pages();
// Se não houver página aberta, abrir uma qualquer
if (!page) {
const p = await context.newPage();
await p.goto('about:blank');
}


// Exemplo: validar efeito do content script em uma página pública
const page2 = await context.newPage();
await page2.goto('https://example.com');


// Aqui você deve adaptar para o que sua extensão faz (ex.: inserir elemento, alterar DOM)
// Exemplo genérico — verificar se existe ao menos uma tag <a>
const hasLink = await page2.$('a');
expect(hasLink).not.toBeNull();


await context.close();
});