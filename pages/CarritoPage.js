import { carritoLocators } from "../locators/CarritoLocator.js";

class CarritoPage {
    constructor(page) {
        this.page = page;
    }

    async validarProductoEnCarrito() {
        const productoEnCarrito = await this.page.locator(carritoLocators.nombreProducto).first();
        return await productoEnCarrito.isVisible();
    }
}

export default CarritoPage;