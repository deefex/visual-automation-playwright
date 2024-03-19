import {expect, test} from '@playwright/test';
import navigateTo from "./src/utils/navigateTo";
import attemptToLogin from "./src/utils/attemptToLogin";

test.describe('visual automation ', () => {

    test('using playwright visual comparisons', async ({ page }) => {
        await page.goto('/login');
        await navigateTo(page, 'Login Page');
        await expect(page).toHaveScreenshot(); // Screenshot 1 - the login page
        await attemptToLogin(page);
        await navigateTo(page, 'Secure Area');
        await expect(page).toHaveScreenshot(); // Screenshot 2 - the secure area
    });

});