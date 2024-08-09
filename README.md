# WhatsApp Group ID Finder

This Node.js script uses the `whatsapp-web.js` library to find and list the IDs of all WhatsApp groups associated with your account. It helps you to easily retrieve the group IDs, which can be used to send messages or for other automation tasks.

## Features

- **Local Authentication**: Uses `LocalAuth` to save your session locally, avoiding the need to scan the QR code every time.
- **Group ID Retrieval**: Lists the names and IDs of all WhatsApp groups you are a part of.
- **QR Code Generation**: Generates a QR code for you to authenticate your WhatsApp session.

## Requirements

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. Clone the repository or download the script.

    ```bash
    git clone https://github.com/lyvioo/groupidwhatsapp
    cd groupidwhatsapp
    ```

2. Install the required dependencies.

    ```bash
    npm install whatsapp-web.js qrcode-terminal
    ```

## Usage

1. Run the script:

    ```bash
    node groupid-wpp.js
    ```

2. Scan the QR code that appears in your terminal with your WhatsApp mobile app to authenticate.

3. The script will list all your WhatsApp groups along with their names and IDs in the terminal.

4. The script will automatically close the WhatsApp client after listing the group IDs.

## Example Output

```bash
Client started and ready to use!
Group Name: My Family | Group ID: 1234567890-0987654321@g.us
Group Name: Work Friends | Group ID: 0987654321-1234567890@g.us
