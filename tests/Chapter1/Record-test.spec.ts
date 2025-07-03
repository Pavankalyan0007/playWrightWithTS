import { test, expect } from '@playwright/test';

test.only('test', async ({ page }) => {
  await test.step("Navigate to URL", async()=>{
    await page.goto('https://github.com/');
    await page.getByRole('link', { name: 'Sign in' }).click();
  });
  await test.step("Enter Username and Password", async()=>{
    await page.getByRole('textbox', { name: 'Username or email address' }).click();
    await page.getByRole('textbox', { name: 'Username or email address' }).fill('pavangesture@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('pavan@2000');
  });
  await test.step("click on sigin ", async()=>{
    await page.getByRole('textbox', { name: 'Password' }).press('Enter');
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    await page.getByText('Incorrect username or').click();
  });
  await test.step("validate username and password", async()=>{
    await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
  });


});