# chatgpt-fix

This script is a temporary fix for the one minute limit on chatgpt. When an error occurs, the script does not clear the answer and continues to append previous answers in the next response.

## Installation

To install this script, you will need a userscript manager such as [Tampermonkey](https://tampermonkey.net/) or [Greasemonkey](https://www.greasespot.net/).

1. Install a userscript manager for your web browser.
2. Download the [chatgpt-fix.user.js](https://raw.githubusercontent.com/user/chatgpt-fix/chatgpt-fix.user.js) file from this repository.
3. Open the userscript manager and click on the "Add script" button.
4. Select the downloaded `chatgpt-fix.user.js` file and click on the "Install" button.

## Usage

To use the script, follow these steps:

1. When an error occurs, click on the "Modify last question" button and paste the broken answer into the text field. For example:

```

question

continue with:

part of broken answer

```

2. After a successful response, click on the new "Clear" button on the left side to clear the answer cache.

Note: This script is not a permanent solution and may not work in all situations. Use at your own risk.
