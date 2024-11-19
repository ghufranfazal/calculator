// Text Reverser
function reverseText() {
    const input = document.getElementById("reverse-input").value;
    const reversed = input.split("").reverse().join("");
    document.getElementById("reverse-output").innerText = `Reversed: ${reversed}`;
}

// Word Frequency Counter
function countWordFrequency() {
    const input = document.getElementById("frequency-input").value;
    const words = input.toLowerCase().match(/\b\w+\b/g);
    const frequency = {};
    if (!words) {
        document.getElementById("frequency-output").innerText = "No valid words found.";
        return;
    }

    words.forEach(word => {
        frequency[word] = (frequency[word] || 0) + 1;
    });

    const result = Object.entries(frequency)
        .map(([word, count]) => `${word}: ${count}`)
        .join("\n");

    document.getElementById("frequency-output").innerText = `Word Frequency:\n${result}`;
}

// Slug Generator
function generateSlug() {
    const input = document.getElementById("slug-input").value;
    const slug = input
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
    document.getElementById("slug-output").innerText = `Slug: ${slug}`;
}

// Custom Styling Preview
function applyStyles() {
    const input = document.getElementById("style-input").value;
    const bold = document.getElementById("bold-check").checked;
    const italic = document.getElementById("italic-check").checked;
    const underline = document.getElementById("underline-check").checked;

    let styledText = input;
    const output = document.getElementById("style-output");

    output.style.fontWeight = bold ? "bold" : "normal";
    output.style.fontStyle = italic ? "italic" : "normal";
    output.style.textDecoration = underline ? "underline" : "none";
    output.innerText = styledText;
}

// Case Converters
function convertToUpperCase() {
    const input = document.getElementById("case-input").value;
    const upperCase = input.toUpperCase();
    document.getElementById("case-output").innerText = `UPPERCASE: ${upperCase}`;
}

function convertToLowerCase() {
    const input = document.getElementById("case-input").value;
    const lowerCase = input.toLowerCase();
    document.getElementById("case-output").innerText = `lowercase: ${lowerCase}`;
}

function convertToCapitalize() {
    const input = document.getElementById("case-input").value;
    const capitalized = input
        .toLowerCase()
        .replace(/^\w|\s\w/g, match => match.toUpperCase());
    document.getElementById("case-output").innerText = `Capitalize: ${capitalized}`;
}

function convertToTitleCase() {
    const input = document.getElementById("case-input").value;
    const titleCase = input
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    document.getElementById("case-output").innerText = `Title Case: ${titleCase}`;
}

// Copy Text Function
function copyText(outputId) {
    const outputElement = document.getElementById(outputId);
    const range = document.createRange();
    range.selectNode(outputElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
}

// Select All Text Function
function selectAllText(outputId) {
    const outputElement = document.getElementById(outputId);
    const range = document.createRange();
    range.selectNodeContents(outputElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
}
