# Academic Webpage

This is a modern, responsive academic webpage built with HTML, CSS, and JavaScript. It is designed to be easily editable and ready for hosting on GitHub Pages.

## Project Structure

- `index.html`: The main structure of the page.
- `css/style.css`: All styling and design tokens.
- `js/main.js`: Logic for tab switching and rendering content.
- `js/data.js`: **EDIT THIS FILE** to update your information. All content (bio, experience, publications, etc.) is stored here.

## How to Run Locally

Simply double-click `index.html` to open it in your web browser. No server or installation is required.

## How to Update Content

1. Open `js/data.js` in any text editor.
2. Update the fields in the `data` object.
3. Refresh `index.html` in your browser to see changes.

## Hosting on GitHub Pages

1.  Create a new repository on GitHub (e.g., `academic-webpage`).
    - *Tip*: If you name it `yourusername.github.io`, it will be hosted at that exact URL.
2.  Push this folder's contents to the repository.
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    git push -u origin main
    ```
3.  On GitHub, go to **Settings** > **Pages**.
4.  Under **Build and deployment**, select **Source** as `Deploy from a branch`.
5.  Select `main` branch and `/ (root)` folder.
6.  Click **Save**. Your site will be live shortly!
