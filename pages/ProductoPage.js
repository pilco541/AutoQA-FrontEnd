import { productoLocators } from "../locators/ProductoLocators.js";

class ProductoPage {    
    constructor(page) {
        this.page = page;

    }
    async obtenerTextoLogo() {
    const text = await this.page.locator(productoLocators.productTitle).textContent();
    return text.trim(); 
    }

    async validarLogo() {
    const text = await this.obtenerTextoLogo();
    if (text !== "Swag Labs") {
        throw new Error(`El título esperado era "Swag Labs" pero se encontró "${text}"`);
    }
    }


    async añadirProducto() {
    await this.page.click(productoLocators.botonAñadir);
  }

  async irAlCarrito() {
    await this.page.click(productoLocators.iconoCarrito);
  }

  
    
}

export default ProductoPage;