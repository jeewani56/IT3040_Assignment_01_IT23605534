import { test, expect } from '@playwright/test';

test('Singlish to Sinhala translation', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');


  const textbox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await textbox.click();
  await textbox.fill('mama paadam kalaa, enisaa mama viBhaagaya samath vunaa.');

  page.on('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.dismiss();
  });

 
  const copyButtons = page.getByRole('button', { name: 'Copy' });
  await copyButtons.first().click();

 
  await page.getByText('මම පාඩම් කලා, එනිසා මම විභාගය සමත් වුනා').click();


  await copyButtons.nth(1).click();
});
