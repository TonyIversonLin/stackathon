
# Angular Flash Cards - Day 2

## Seed the Database

We have provided some questions for your database. Make sure PostgreSQL is running, then do `npm run seed` from your terminal.

## New Endpoint

For this next phase, we have not only included the Angular solution code for day 1, but also augmented our server with a RESTful JSON API (backed by PostgreSQL) — admittedly the smallest possible API, with only one endpoint!

Request | Response
----|----
`GET /` | `browser/index.html`
`GET /:ANY_FILEPATH` | `browser/:ANY_FILEPATH` or `node_modules/:ANY_FILEPATH` (whichever matches first, if either)
`GET /api/cards` | An array of JSON cards (**new endpoint!**)

The structure of a card is as follows:

```json
{
  "id": 1,
  "question": "C. What is Angular?",
  "answers": [
    { "text": "A front-end framework for great power!", "correct": true },
    { "text": "Something lame, who cares, whatever.", "correct": false },
    { "text": "Some kind of fish, right?", "correct": false }
  ]
}
```
