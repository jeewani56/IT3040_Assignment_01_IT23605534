import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('"madol dhuuva" granThaya rachanaa kalea maartin vikramasiQQha visini.');
  await page.getByRole('button', { name: 'Open File' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Copy' }).first().click();
  await page.getByText('"මඩොල් දූව" ග්‍රන්ථය රචනා කලේ මාර්ටින් වික්‍රමසිංහ විසිනි').click();
  
});