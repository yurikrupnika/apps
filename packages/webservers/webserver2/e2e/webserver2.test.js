const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const assert = require('assert');

const {
    describe, test, beforeAll, afterAll
} = global;
// jest.setup.js
jest.setTimeout(30000);

async function load(page, href) {
    await page.goto(href);
    await page.screenshot({
        path: path.resolve(__dirname, 'screens', `${href.split('/')
            .pop()}.png`)
    });
}

async function stepThru(page, hrefs) {
    // await hrefs.forEach(async (v) => {
    //     await load(v);
    // });
    for(let p of hrefs) {
        await load(page, p);
    }
}

describe('App', () => {
    let browser;
    let page;
    beforeAll(async () => {
        browser = await puppeteer.launch({
            // headless: false
        });

        page = await browser.newPage();
    });

    afterAll(async () => {
        await browser.close();
    });

    test('links', async () => {
        await fs.mkdir('e2e/screens', { recursive: true }, () => {
        });
        const response = await page.goto('127.0.0.1:9002/');
        assert(response.ok());
        // await page.goto('http://localhost:9001/');
        const hrefs = await page.$$eval('a', as => as.map(a => a.href));
        await stepThru(page, hrefs);
    });
});
