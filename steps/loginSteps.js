import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from 'playwright';  
import { expect } from '@playwright/test'; 

import LoginPage from "../pages/LoginPage.js";
import ProductoPage from "../pages/ProductoPage.js";

let browser;
let page;
let loginPage;
let productoPage;

setDefaultTimeout(60 * 1000);

Given("El usuario se encuentra en la página de inicio de sesión", async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  loginPage = new LoginPage(page); 
  await page.goto("https://www.saucedemo.com/", {
    waitUntil: "domcontentloaded",
    timeout: 100000 
  });
});

When("El usuario ingresa un nombre de usuario válido", async function () {
  await loginPage.registrarUsuario();
});

When("El usuario ingresa una contraseña válida", async function () {
  await loginPage.registrarContraseña();
});

When("El usuario hace click en el boton Login", async function () {
  await loginPage.clickLogin();
});

Then("El usuario es redirigido a la página de productos", async function () {
  productoPage = new ProductoPage(page);
  await productoPage.validarLogo();
  await browser.close();
});

When("El usuario NO ingresa un nombre de usuario", async function () {
});

Then("El usuario debería ver un mensaje de error indicando que el nombre de usuario es requerido", async function () {
  const error = await loginPage.usernameNulo();
  expect(error).toContain("Username is required");
  await browser.close();
});

When("El usuario NO ingresa una contraseña", async function () {
});

Then("El usuario debería ver un mensaje de error indicando que la contraseña es requerida", async function () {
  const error = await loginPage.passwordNulo();
  expect(error).toContain("Password is required");
  await browser.close();
});
