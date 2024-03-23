# PDF E-Sign API

## PDF RELEATION THIRD-PARTY API

baseURL = api.pdf.co

## PDF RELEATION THIRD-PARTY API PATH

{{baseURL}}`/v1/pdf/edit/replace-text-with-image`

## GET API KEY FROM api.pdf.co
const API_KEY = "API_KEY";

## How to use

```js
var reqOptions = {
  host: 'api.pdf.co',
  method: 'POST',
  path: queryPath,
  headers: {
    'x-api-key': API_KEY,
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(jsonPayload, 'utf8'),
  },
}
```

## See also

https://developer.pdf.co/
