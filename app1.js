const axios = require("axios");
const fs = require("fs");

// Replace with your PDF.co API key

const apiKey =
  "steve980102@gmail.com_Ve277Tly86A6rPU8zrC108Tddbd44f1d5IoUqHbjJnVBx0pW59us45Lvr36B5f44";
// PDF.co endpoint for editing PDF
const endpoint = "https://api.pdf.co/v1/pdf/edit/add";

// Input PDF file URL
const inputFileUrl =
  "https://pdfco-test-files.s3.us-west-2.amazonaws.com/pdf-search-and-replace/sample-agreement-template-signature-page-2.pdf";

// Output PDF file URL
const outputFileUrl = "./result1.pdf";

// Text to be replaced
const targetText = "[CLIENT-SIGNATURE]";

// Hyperlink URL for the button
const buttonUrl =
  "https://pdfco-test-files.s3.us-west-2.amazonaws.com/pdf-search-and-replace/john-doe-signature-image.png";

// JSON payload for the request
const payload = {
  url: inputFileUrl,
  async: false,
  objects: `{"type":"button","text":"${targetText}","url":"${buttonUrl}"}`,
  name: "result.pdf",
};

// Headers with API key
const headers = {
  "Content-Type": "application/json",
  "x-api-key": apiKey,
};

// Send POST request to the PDF.co API
axios
  .post(endpoint, payload, { headers })
  .then((response) => {
    // Check if the request was successful
    if (response.status === 200) {
      // Download the edited PDF file
      return axios.get(outputFileUrl, { responseType: "arraybuffer" });
    } else {
      throw new Error(`Error: ${response.status}, ${response.data}`);
    }
  })
  .then((editedPdf) => {
    // Save the edited PDF locally
    fs.writeFileSync("edited_output.pdf", editedPdf.data);
    console.log("PDF edited successfully.");
  })
  .catch((error) => {
    console.error(error.message);
  });
