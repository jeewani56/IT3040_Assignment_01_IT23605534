import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mamaaaa gedara yanavaa');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Copy' }).first().click();
  await page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Copy' }).nth(1).click();
  await page.getByText('මමාආ ගෙඩර යනවා').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Copy' }).nth(1).click();
});