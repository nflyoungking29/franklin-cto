function copyText() {
    /* Get the text field */
    var copyText = document.getElementById("copy-text");

    /* Create a range and select the text */
    var range = document.createRange();
    range.selectNode(copyText);
    window.getSelection().removeAllRanges(); // Clear any current selections
    window.getSelection().addRange(range); // Select the text

    /* Execute the copy command */
    document.execCommand("copy");

    /* Alert the user that the text has been copied */
    alert("Text copied to clipboard!");
  }