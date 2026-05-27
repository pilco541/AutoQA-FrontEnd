import userData from "../data/loginData.js";
import { loginLocators } from "../locators/loginLocators.js";

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async registrarUsuario() {
    await this.page.locator(loginLocators.usernameInput)
      .fill(userData.validUser.username);
  }

  async registrarContraseña() {
    await this.page.locator(loginLocators.passwordInput)
      .fill(userData.validUser.password);
  }

  async clickLogin() {
    await this.page.locator(loginLocators.loginButton).click();
  }

  async getErrorMessage() {
    return await this.page.locator(loginLocators.errorMessage).innerText();
  }

  async usernameNulo() {
    const error = await this.getErrorMessage();
    return error;
  }

  async passwordNulo() {
    const error = await this.getErrorMessage();
    return error;
  }
}

export default LoginPage;
