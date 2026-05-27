import { Given, When, Then,setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import ProductoPage from "../pages/ProductoPage.js";
import LoginPage from "../pages/LoginPage.js";
import { chromium } from "playwright";
import CarritoPage from "../pages/CarritoPage.js";

let browser;
let page;
let loginPage;
let productoPage;
let carritoPage;

setDefaultTimeout(60 * 1000);

Given("El usuario ha iniciado sesión y se encuentra en la página de inventario", async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  loginPage = new LoginPage(page); 
  await page.goto("https://www.saucedemo.com/", {
    waitUntil: "domcontentloaded",
    timeout: 100000 
  });
  await loginPage.registrarUsuario();
  await loginPage.registrarContraseña();
  await loginPage.clickLogin();
  productoPage = new ProductoPage(page); 
});

When("El usuario selecciona el producto {string}", async function (producto) {
  if (producto === "Sauce Labs Backpack") {
    await productoPage.añadirProducto();
  }
});

When("El usuario hace click en el botón {string}", async function (boton) {
  if (boton === "Add to cart") {
    await productoPage.irAlCarrito();
  }
});

Then("El producto debería aparecer en el carrito", async function () {
  carritoPage = new CarritoPage(page);
    await carritoPage.validarProductoEnCarrito();
    await browser.close();
});
