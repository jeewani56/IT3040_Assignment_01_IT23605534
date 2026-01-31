import { test, expect } from '@playwright/test';

test('Translate Singlish to Sinhala text', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  await inputBox.fill(
    'karuNaakara mema lipiyata piLithurak labaadhenna puLuvandha?'
  );

  // Wait for translation output container
  const outputArea = page.locator('body');

  await expect(outputArea).toContainText(
    'කරුණාකර මෙම ලිපියට පිළිතුරක් ලබාදෙන්න'
  );
});
