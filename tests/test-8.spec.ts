import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('2025-02-04 dhina naeganahira saha uuva paLaath valath maathalea saha kaluthara dhisthrikkavalatath vitin vita vaesi aethi vea. uuva paLaatheth madakalapuva saha ampaara dhisthrikkavalatath aethaem sThaanavalata 50 mm ta vaedi tharamaka thadha vaesi aethi viya haekiya. uthuru saha uthuru maedha paLaath valath hambanthota dhisthrikkayeath vaesi vaara kihipayak aethi viya haekiya. basnaahira, sabaragamuva saha vayao paLaatheth gaalla, maathara, anuradhapura, dhisthrikkavalatath aethaem sThaanavala aluyam kaalayeadhii miidhum sahitha vaesi thathvayak aethi viya haekiya. gigirum sahitha vaesi samaga aethi viya haeki thaavakaalika thadha sulaQQ valin saha akuNU magin sidhuvana anathuru avama kara gaeniimata avashYA piyavara gannaa lesa janathaavagen kaaruNikava illaa sitimi.');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Copy' }).first().click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Copy' }).nth(1).click();
});
