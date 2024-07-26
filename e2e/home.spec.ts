import { expect, test } from '@chromatic-com/playwright';

test.describe('root page', async () => {
  test('should have the correct title', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle('自撮りハイラル図鑑');
  });

  test('go detail page', async ({ page }) => {
    await page.goto('/');
    await page.click('text=モリイノシシ');
    await expect(page).toHaveTitle('モリイノシシ - 自撮りハイラル図鑑');
  });

  test('search by name', async ({ page }) => {
    await page.goto('/');
    await page.fill('input[name="freeword"]', 'モリイノシシ');
    await expect(page.getByText('モリイノシシ').first()).toBeVisible();
    await expect(page.getByText('モリブリン').first()).not.toBeVisible();
  });
});
