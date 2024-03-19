import {Page} from "@playwright/test";
import ErrorTypes from "../enums/errorTypes";

async function attemptToLogin(page: Page) {
    const username = process.env.VISUAL_USERNAME;
    const password = process.env.VISUAL_PASSWORD;

    if (!username) {
        throw new Error(`${ErrorTypes.ENVIRONMENT_VARIABLE_ERROR}: VISUAL_USERNAME not set`);
    }

    if (!password) {
        throw new Error(`${ErrorTypes.ENVIRONMENT_VARIABLE_ERROR}: VISUAL_PASSWORD not set`);
    }

    await page.fill('#username', username);
    await page.fill('#password', password);
    await page.getByRole('button').click();
}

export default attemptToLogin;