import { test, expect } from '@playwright/test';

test('Singlish to Sinhala translation test', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');


  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.click();
  await textbox.fill('api paadam karanavaa');


  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });


  await page.getByRole('button', { name: 'Copy' }).nth(1).click();


  await page.getByText('අපි පාඩම් කරනවා').click();


  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  
  await page.getByRole('button', { name: 'Copy' }).nth(1).click();
});
