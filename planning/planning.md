# Planning Stages

## Steps/Trello

[To-Do list for this project](https://trello.com/invite/b/673159d4d10c1cd4ca747c21/ATTI19913babf3e89afe7a5920f3f5636a7185CCF71C/wanderlust)

## ERD

Trip Schema:

```js
const tripSchema = new mongoose.Schema({
  destination: { type: String, required: true },
  image: { type: String },
  itineraries: [itenerarySchema],
});
```

Itinerary Schema:

```js
const itinerarySchema = new.mongoose.Schema({
    date: { type: String },
    duration: { type: String },
    budgets: [ budgetSchema ],
    transportations: [ travelSchema ],
    lodgingAccomendations: [ lodgingAccomendationSchema ],
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

Transportation Schema :

```js
const travelSchema = new.mongoose.Schema({
    transportation: { type: String },
    location: { type: String },
    date: { type: String },
    time: { type: string },
    confirmationNumber: { type: String },
})
```

Lodging Accomedation Schema:

```js
const lodgingAccomedationSchema = new.mongoose.Schema({
    establishmentName: { type: String },
    location: { type: String },
    checkInDate: { type: String },
    checkInTime: { type: Sting },
    checkOutDate: { type: String },
    checkOutTime: { type: String },
    address: { type: String },
    phoneNumber: { type: String },
    confirmationNumber: { type: String },
})
```

Todo List Schema:

```js
const todoListSchema = new.mongoose.Schema({
    sight: { type: String },
    activity: { type: String },
    fodo: { type: String },
})
```
