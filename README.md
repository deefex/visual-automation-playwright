# visual-automation-playwright
An example of visual testing automation with playwright

This example illustrates some E2E/browser visual automation for the https://the-internet.herokuapp.com/login page

There are two examples:

- Using the built-in visual comparison tooling within playwright
- Using a 3rd party application, applitools 

The latter will only work for you if you have a free tier applitools account

The benefits of visual testing over a more traditional approach is that there is less need for specific assertions that 
would otherwise be present, although this may vary depending on the nature of the web applications/pages being checked
along with the capabilities of the visual tooling involved. It does in principle have the potential to make E2E testing
code simpler to write and follow.

## Installation

- `git clone https://github.com/deefex/visual-automation-playwright.git`
- `cd visual-automation-playwright`
- `npm install`

## Execution

Before execution, set an environment variable for the website password which can be found at https://the-internet.herokuapp.com/login
- If you're using Windows you can do this via `set VISUAL_USERNAME=<username>` and `set VISUAL_PASSWORD=<password>`
- If you're using Mac or Linux you can do this via `export VISUAL_USERNAME=<username>` and `export VISUAL_PASSWORD=<password>`
- If you intend to run the applitools test, then set the APPLITOOLS_API_KEY environment variable in the same way as above. 
  If you open a free tier account with applitools, the API key can be found at the top right of your dashboard under 'My API Key'

For the playwright visual test:
- `npx playwright test e2e/visual-playwright.spec.ts` for headless invocation
- `npx playwright test e2e/visual-playwright.spec.ts --ui` for UI mode

For the applitools visual test:
- `npx playwright test e2e/visual-applitools.spec.ts` for headless invocation
- `npx playwright test e2e/visual-applitools.spec.ts --ui` for UI mode

Naturally, if you want to run them all in one go, then just run `npx playwright test`.

The default playwright runner and reporter are used here.
