# Planning Stages

## User Stories

- As a User, I would like to plan for a trip: Destination. Duration of the trip. Budgeting for the trip. Plan out all the things to do, sights to see, food to eat.
- As a User, I would like to create, update, and delete a trip.
- As a User, I would like to see all the trips that I would like to go on.
- As a User, I would like to see the details of one specif trip.

## Steps/Trello

[To-Do list for this project](https://trello.com/invite/b/673159d4d10c1cd4ca747c21/ATTI19913babf3e89afe7a5920f3f5636a7185CCF71C/wanderlust)

## ERD

Trip Schema:

```js
const tripSchema = new mongoose.Schema({
  text: { type: String},
  category{
    type: String,
    enum ["sights", "activities", "food"]
  }
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
