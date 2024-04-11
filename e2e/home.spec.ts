import { expect, test } from '@chromatic-com/playwright';

test.describe('root page', async () => {
  test('should have the correct title', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle('自撮りハイラル図鑑');
  });
});
