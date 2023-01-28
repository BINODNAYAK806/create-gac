// const puppeteer = require('puppeteer');

const { default: puppeteer } = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  
  // Navigate to the Google account creation page
  await page.goto('https://accounts.google.com/signup');
  
  // Fill out the form to create a new account
  await page.type('#firstName', 'John');
  await page.type('#lastName', 'Doe');
  await page.type('#username', 'johndoe123');
  await page.type('#passwd', 'mypassword');
  await page.type('#confirm-passwd', 'mypassword');
  await page.select('#month', '1');
  await page.select('#day', '1');
  await page.select('#year', '2000');
  await page.click('#gender > div > div.VfPpkd-RLmnJb > span > div > div > content > span');
  await page.click('#phoneNumberId');
  await page.type('#phoneNumberId', '5551234567');
  
  // Submit the form
  await page.click('#submitButton');
  await page.waitForNavigation();
  
  // Verify that the account was created successfully
  const message = await page.$eval('#headingText', el => el.textContent);
  console.log(message);
  
  await browser.close();
})();
