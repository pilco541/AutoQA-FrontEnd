import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

test('Login con credenciales válidas', async ({ page }) => {
  const loginPage = new LoginPage(page);

  
  await loginPage.goToLoginPage();
  await loginPage.login('standard_user', 'secret_sauce');

});
