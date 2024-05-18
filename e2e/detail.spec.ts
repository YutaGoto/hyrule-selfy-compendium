import { expect, test } from '@chromatic-com/playwright';

test.describe('detail page', async () => {
  test('should have the correct title', async ({ page }) => {
    await page.goto('/010');

    await expect(page).toHaveTitle('モリイノシシ - 自撮りハイラル図鑑');
  });

  test('show the correct item name and ID', async ({ page }) => {
    await page.goto('/010');

    await expect(page.getByText('モリイノシシ').first()).toBeVisible();

    await expect(page.getByText('No. 010').first()).toBeVisible();
  });
});
