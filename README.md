# Workout Tracker

A full-stack fitness tracking application with GraphQL API and modern Next.js frontend for logging and analyzing workout data.

## What It Is

A comprehensive workout tracking system that allows users to log exercises with detailed metrics (reps, weights) and visualize their fitness progress. The backend provides a GraphQL API for flexible data querying, while the frontend uses Next.js with Tailwind CSS for a responsive, modern interface. Firebase integration enables data persistence and user authentication.

## Tech Stack

### Backend
- **API**: GraphQL with Apollo Server
- **Framework**: Node.js
- **Language**: JavaScript
- **Port**: 4000

### Frontend
- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Apollo Client for GraphQL
- **Database**: Firebase
- **Charts**: Recharts for visualizing progress
- **Port**: 3000

## Getting Started

### Backend Setup

```bash
cd workout-backend
npm install
node index.js
```

The GraphQL server will run on `http://localhost:4000`

### Frontend Setup

```bash
cd workout-tracker
npm install
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Building for Production

**Backend**:
```bash
node index.js  # Can be deployed to Node.js hosting
```

**Frontend**:
```bash
npm run build
npm start
```

## Features

- **Workout Logging**: Record exercises with sets, reps, and weight
- **Date-based Tracking**: Organize workouts by date
- **Exercise Management**: Track different exercises and their performance
- **Progress Visualization**: Charts showing strength gains over time
- **Flexible Queries**: GraphQL allows querying specific workouts and dates
- **In-memory Storage**: Quick development experience with data persistence

## GraphQL Schema

```
type Exercise {
  name: String!
  reps: [Int!]!
  weights: [Int!]!
}

type Workout {
  date: String!
  exercises: [Exercise!]!
}

type Query {
  workouts: [Workout!]!
  workoutByDate(date: String!): Workout
}

type Mutation {
  addWorkout(date: String!, exercises: [ExerciseInput!]!): Workout
  clearWorkout(date: String!): Boolean
  clearAllWorkouts: Boolean
}
```

## Project Structure

```
workout/
├── workout-backend/
│   ├── index.js         # GraphQL server with Apollo
│   ├── package.json
│   └── node_modules/
├── workout-tracker/
│   ├── src/
│   │   ├── app/         # Next.js pages
│   │   ├── components/  # React components
│   │   └── lib/         # Utilities and Firebase config
│   ├── public/
│   ├── package.json
│   └── tailwind.config.js
└── README.md
```

## Workout Data Structure

```json
{
  "date": "2025-03-01",
  "exercises": [
    {
      "name": "Bench Press",
      "reps": [10, 8, 6],
      "weights": [225, 245, 265]
    }
  ]
}
```

## Development Notes

- Backend uses in-memory storage (suitable for development)
- Production deployment should use persistent database
- Apollo Client on frontend for automatic caching
- Tailwind CSS for responsive design
- Firebase for authentication and data persistence
- Charts update automatically as new data is added
- Can extend schema to add user authentication and profiles

## Future Enhancements

- User authentication with Firebase
- Exercise templates and libraries
- Progress photo uploads
- Social sharing of achievements
- Mobile app with React Native
- Integration with fitness wearables
