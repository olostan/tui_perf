const puppeteer = require('puppeteer');

async function analyzeURL(browser,url) {
  const page = await browser.newPage();
  let csses = [];
  page.on('request', (r) => {
    if (r.resourceType=='stylesheet') csses.push(r.url);
  });
  await page.goto(url,{waitUntil: 'networkidle0'});
  await page.close();
  return csses;
}

(async () => {
  const browser = await puppeteer.launch({ignoreHTTPSErrors: true});
  const page = await browser.newPage();
  let styles = await analyzeURL(browser,'https://tui.co.uk/');
  let combined = await loadAndCombine(styles);
  let criticalCSs = await penthouse({url: 'https://tui.co.uk/',cssString:combined})
  console.log(JSON.stringify(result));
  await browser.close();
})();