@login
Feature: Funcionalidad Login

Como un cliente de Sauce Demo,
Quiero poder iniciar sesión
Para poder adquirir los productos que necesito

Scenario: Login exitoso
Given El usuario se encuentra en la página de inicio de sesión
When El usuario ingresa un nombre de usuario válido
And El usuario ingresa una contraseña válida
And El usuario hace click en el boton Login
Then El usuario es redirigido a la página de productos

Scenario: Login fallido por usuario vacio
Given El usuario se encuentra en la página de inicio de sesión
When El usuario NO ingresa un nombre de usuario 
And El usuario ingresa una contraseña válida
And El usuario hace click en el boton Login
Then El usuario debería ver un mensaje de error indicando que el nombre de usuario es requerido

Scenario: Login fallido por contraseña vacia
Given El usuario se encuentra en la página de inicio de sesión
When El usuario ingresa un nombre de usuario válido
And El usuario NO ingresa una contraseña
And El usuario hace click en el boton Login
Then El usuario debería ver un mensaje de error indicando que la contraseña es requerida