const { ApolloServer, gql } = require("apollo-server");

// In-memory store
let workouts = {};

const typeDefs = gql`
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

  input ExerciseInput {
    name: String!
    reps: [Int!]!
    weights: [Int!]!
  }

  type Mutation {
    addWorkout(date: String!, exercises: [ExerciseInput!]!): Workout
    clearWorkout(date: String!): Boolean
    clearAllWorkouts: Boolean
  }
`;

const resolvers = {
  Query: {
    workouts: () => Object.values(workouts),
    workoutByDate: (_, { date }) => workouts[date] || null,
  },
  Mutation: {
    addWorkout: (_, { date, exercises }) => {
      if (workouts[date]) {
        // Append new exercises to existing ones
        workouts[date].exercises.push(...exercises);
      } else {
        // Create new workout for this date
        workouts[date] = { date, exercises };
      }
      return workouts[date];
    },
    clearWorkout: (_, { date }) => {
      delete workouts[date];
      return true;
    },
    clearAllWorkouts: () => {
      workouts = {};
      return true;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
