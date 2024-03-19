import {expect, Page} from "@playwright/test";
import ErrorTypes from "../enums/errorTypes";

async function navigateTo(page: Page, pageHeaderText: string) {
    try {
        await expect(page.locator('h2')).toHaveText(pageHeaderText);
    } catch (error) {
        throw new Error(`${ErrorTypes.PAGE_TRANSITION_ERROR}: ${error.message}`);
    }
}

export default navigateTo;