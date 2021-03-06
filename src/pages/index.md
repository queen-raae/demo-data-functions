# Dynamic data in your Gatsby Functions

A tiny demo of the three common ways to get dynamic data into your
Gatsby Function.

Check out the code on [GitHub](https://github.com/queen-raae/demo-data-functions),
or take it for a spin using [CodeSandbox](https://codesandbox.io/s/demo-data-functions-e9gtq).

## Using URL Queries

### Demo

- [/api/time-travel-query?city=oslo&year=1624](/api/time-travel-query?city=oslo&year=1624)

### Documentation

- Gatsby Documentation on [Data formats (including URL Queries)](https://www.gatsbyjs.com/docs/reference/functions/middleware-and-helpers#data-formats)
- Wikipedia article on [Query Strings](https://en.wikipedia.org/wiki/Query_string)

### Code

```js
// File: /api/time-travel-query
// Usage: /api/time-travel-query?city=oslo&year=1624
export default function handler(req, res) {
  const { city, year } = req.query;
  res.send(`You time-travelled to ${city}, in year ${year}`);
}
```

## Using Param Routes

### Demo

- [/api/time-travel-params/oslo/1624](/api/time-travel-params/oslo/1624)

### Documentation

- Gatsby Documentation on [Dynamic routing (including Param Routes)](https://www.gatsbyjs.com/docs/reference/functions/routing/#dynamic-routing)

### Code

```js
// File: /api/time-travel-params/[city]/[year].js
// Usage: /api/time-travel-params/oslo/1624
export default function handler(req, res) {
  const { city, year } = req.params;
  res.send(`You time-travelled to ${city}, in year ${year}`);
}
```

## Using Http Request Body

### Demo

<form action="/api/time-travel-body" method="post">
  <p>
    <label htmlFor="year">Year: </label>
    <br/>
    <input
      required
      type="number"
      id="year"
      name="year"
      value="1624"
    />
  </p>
  <p>
    <label htmlFor="city">City: </label>
    <br/>
    <input
      required
      type="text"
      id="city"
      name="city"
      value="Oslo"
    />
  </p>
  <button>Travel</button>
</form>

### Documentation

- Gatsby Documentation on [Data formats (including body params)](https://www.gatsbyjs.com/docs/reference/functions/middleware-and-helpers#data-formats)

### Code

```js
// File: /api/time-travel-body.js
// Usage: {city: "Oslo", year: "2026"} added to request body
export default function handler(req, res) {
  const { city, year } = req.body;
  res.send(`You time-travelled to ${city}, in year ${year}`);
}
```

## Enjoy this demo?

Learn more on getting the most out of Gatsby by [subscribing](https://queen.raae.codes/emails/?utm_source=demo&utm_campaign=demo-data-functions) to daily emails from yours truly.

<cite>??? Queen Raae ????</cite>
