const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');
const html404 = path.join(srcDir, '404.html');
const folder404 = path.join(srcDir, '404');
const folder404Index = path.join(folder404, 'index.html');
const folder404Html = path.join(folder404, '404.html');

try {
    if (!fs.existsSync(html404)) {
        if (fs.existsSync(folder404Index)) {
            // Rename index.html to 404.html inside the folder
            fs.renameSync(folder404Index, folder404Html);
            // Move 404.html to src/
            fs.renameSync(folder404Html, html404);
            // Remove the 404 folder
            fs.rmdirSync(folder404, { recursive: true });
            console.log('404.html prepared successfully.');
        } else {
            console.log('src/404/index.html not found, no changes made.');
        }
    } else {
        console.log('src/404.html already exists, no changes made.');
    }
} catch (err) {
    console.error('Error preparing 404.html:', err);
    process.exit(1);
}
