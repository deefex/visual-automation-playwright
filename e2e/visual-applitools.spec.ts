import {expect, test} from '@playwright/test';
import navigateTo from "./src/utils/navigateTo";
import attemptToLogin from "./src/utils/attemptToLogin";
import {BatchInfo, BrowserType, Configuration, Eyes, EyesRunner, Target} from "@applitools/eyes-playwright";
import ErrorTypes from "./src/enums/errorTypes";

export let Batch: BatchInfo;
export let Config: Configuration;
export let Runner: EyesRunner;

test.beforeAll(async() => {
    Batch = new BatchInfo({name: 'Visual Test Example'});
    Config = new Configuration();
    Config.setBatch(Batch);
    Config.addBrowsers(
        { name: BrowserType.CHROME, width: 1600, height: 1200 },
    )


});
test.describe('visual automation ', () => {

    let eyes: Eyes;
    test.beforeEach(async ({ page }) => {
        eyes = new Eyes(Runner, Config);
        await eyes.open(page, 'The Internet Heroku', `Playwright/Applitools Test`, { width: 1600, height: 1200 })
    });

    test('using applitools', async ({ page }) => {
        const applitools_api_key = process.env.APPLITOOLS_API_KEY;

        if (!applitools_api_key) {
            throw new Error(`${ErrorTypes.ENVIRONMENT_VARIABLE_ERROR}: APPLITOOLS_API_KEY not set`);
        }
        await page.goto('/login');
        await navigateTo(page, 'Login Page');
        await eyes.check('Login Page', Target.window().fully()); // Screenshot 1 - the login page
        await attemptToLogin(page);
        await navigateTo(page, 'Secure Area');
        await eyes.check('Secure Area', Target.window().fully()); // Screenshot 2 - the secure area
    });

    test.afterEach(async () => {
        await eyes.close();
    });

});

test.afterAll(async() => {
    // Placeholder. Nothing to do here.
});