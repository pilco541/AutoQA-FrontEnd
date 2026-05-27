@producto
Feature: Funcionalidad de Carrito de Compras

  Como cliente de Sauce Demo
  Quiero poder seleccionar productos
  Para añadirlos a mi carrito de compras

  Scenario: Añadir un producto al carrito
    Given El usuario ha iniciado sesión y se encuentra en la página de inventario
    When El usuario selecciona el producto "Sauce Labs Backpack"
    And El usuario hace click en el botón "Add to cart"
    Then El producto debería aparecer en el carrito


