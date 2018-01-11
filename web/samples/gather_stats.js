const PARALEL = 1;

const puppeteer = require('puppeteer');
const webSites = [
    'https://www.tui.co.uk/',
    'https://www.tui.co.uk/destinations/...olidays-boston.html',
    'https://www.tui.co.uk/destinations/deals/tui-family-life'
];

async function analyzeURL(browser,url) {
  const page = await browser.newPage();
  let count = 0;
  let error = false;
  let start = process.hrtime();
  let loadTime = null;
  page.on('request', () => count++);
  page.on('pageerror', () => error = true);
  page.on('load', () => loadTime = process.hrtime(start));
  await page.goto(url,{waitUntil: 'networkidle2'});
  await page.close();
  let totalTime = process.hrtime(start);
  return {url: url, requests: count, error: error, 
    load: formatHRT(loadTime), total: formatHRT(totalTime)};
}