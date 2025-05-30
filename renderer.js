const fs = require('fs');
const path = require('path');
const marked = require('marked');

function saveEntry() {
    const text = document.getElementById("entry").value;
    const date = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    const filePath = path.join(__dirname, 'entries');
    const fileName = `${date}.md`;

    // Ensure the entries directory exists
    if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath);
    }

    fs.writeFile(path.join(filePath, fileName), text, (err) => {
        if (err) {
            alert('Error saving entry: ' + err.message);
        } else {
            alert('Entry saved!');
        }
    });
}

document.getElementById("entry").addEventListener("input", function() {
    const markdownText = this.value;
    document.getElementById("preview").innerHTML = marked.parse(markdownText);
});