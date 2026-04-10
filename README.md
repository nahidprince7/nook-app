# File Automator

A Node.js utility designed to keep your folders clean by automatically organizing incoming files into categorized subdirectories based on their file extensions.

## Project Details

This application monitors a specified directory (defaults to your user's **Downloads** folder) in real-time. When a new file is detected, it is moved to a subfolder corresponding to its type (e.g., `.pdf` goes to `Documents`, `.jpg` goes to `Images`).

### Key Features
- **Real-time Monitoring**: Uses `chokidar` to watch for file system changes.
- **Automatic Categorization**: Pre-configured categories for Documents, Images, Videos, Audio, Archives, and Code.
- **Robust File Moving**: Built-in retry logic to handle Windows file locking issues (common when a browser is still writing a downloaded file).
- **Clean Console Output**: Utilizes `chalk` for color-coded status updates (Moved, Skipped, Error).
- **Extension Mapping**: Easily customizable via `src/categories.js`.

### Categories
- **Documents**: .pdf, .docx, .doc, .txt, .xlsx, .pptx
- **Images**: .jpg, .jpeg, .png, .gif, .svg, .webp
- **Videos**: .mp4, .mov, .avi, .mkv
- **Audio**: .mp3, .wav, .flac
- **Archives**: .zip, .rar, .7z
- **Code**: .js, .py, .html, .css
- **Others**: Any file extension not explicitly defined.

## Prerequisites

- Node.js (LTS version recommended)
- npm (included with Node.js)

## Installation

1. Clone this repository or download the source code.
2. Navigate to the project directory:
   ```bash
   cd nook-app
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

## How to Start

To start the automator watching your default **Downloads** folder:
```bash
npm start
```

To watch a **different folder**, provide the absolute path as an argument:
```bash
node index.js "C:\Path\To\Your\Folder"
```
