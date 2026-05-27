import { Before , After } from "@cucumber/cucumber";
import { chromium } from 'playwright';
import { ENV } from "../conifg/env";

Before(async function() {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.browser.newPage();
    await this.page.goto(ENV.BASE_URL , {
        waitUntil: "domcontentloaded",
        timeout: 100000 
      });
})

After(async function() {
    await this.browser.close();
})  
