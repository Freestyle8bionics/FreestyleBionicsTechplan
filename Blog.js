// Get the body of the active document
var docBody = DocumentApp.getActiveDocument().getBody();

// Insert text at the beginning and end
var text = docBody.editAsText();
text.insertText(0, 'cooking\n');
text.appendText('\n This is more cooking');

// Make the first half blue
text.setForegroundColor(0, text.getText().length / 2, '#0059ff');

// --- Working with another document by URL (replace the URL with your own)
const anotherDoc = DocumentApp.openByUrl('https://docs.google.com/document/d/1rQXRCFBsaQcrppjjHAtYx28-p8wNTdELMXDuE-5Raoo/edit');
const anotherBody = anotherDoc.getBody();

// Add text to the end and delete the first 10 characters (from another document)
anotherBody.editAsText().appendText('Sample body text');
// anotherBody.editAsText().deleteText(-1, 9);

// --- Working with paragraphs and styles
// Insert paragraphs with a horizontal rule
docBody.insertParagraph(1, "Hello");
docBody.insertHorizontalRule(1);
docBody.insertParagraph(2, "everyone");

// Delete text including the horizontal rule
docBody.editAsText().deleteText(14, 25);

// Create and style a paragraph
var paragraph = docBody.appendParagraph('Hello, everyone this is cooking');
paragraph.setBold(true);
paragraph.setItalic(true);

// Get and log paragraph styles
var paragraphAttributes = paragraph.getAttributes();
for (var attribute in paragraphAttributes) {
  Logger.log(attribute + ":" + paragraphAttributes[attribute]);
}

// --- Working with text styles
const styles = {};
styles[DocumentApp.Attribute.BOLD] = true;
styles[DocumentApp.Attribute.ITALIC] = true;
styles[DocumentApp.Attribute.FONT_SIZE] = 29;

docBody.editAsText().setAttributes(styles);

// Get and log character styles
const eleventhCharacterAttributes = text.getAttributes(10);
console.log(eleventhCharacterAttributes);

// --- Working with text background color
text.setBackgroundColor(0, 2, '#FFC0CB'); // Set background color for first 3 characters
const firstCharacterBackgroundColor = text.getBackgroundColor(0);
console.log(firstCharacterBackgroundColor);
