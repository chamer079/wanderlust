# Planning Stages

## User Stories

TBD

## Steps/Trello

[To-Do list for this project](https://trello.com/invite/b/673159d4d10c1cd4ca747c21/ATTI19913babf3e89afe7a5920f3f5636a7185CCF71C/wanderlust)

## ERD

Trip Schema:

```js
const tripSchema = new mongoose.Schema({
  destination: { type: String, required: true },
  image: { type: String },
  itineraries: [itinerarySchema],
});
```

Itinerary Schema:

```js
const itinerarySchema = new.mongoose.Schema({
    date: { type: String },
    duration: { type: String },
    budgets: [ budgetSchema ],
    todoLists: [ todoListSchema ],
})
```

Budget Schema:

```js
const budgetSchema = new.mongoose.Schema({
    travel: { type: Number },
    lodging: { type: Number },
    food: { type: Number },
    souvenir: { type: Number },
    shopping: { type: Number },
    attractions: { type: Number  },
    emergancy: {type: Number },
})
```

Todo List Schema:

```js
const todoListSchema = new.mongoose.Schema({
    sight: { type: String },
    activity: { type: String },
    food: { type: String },
})
```
