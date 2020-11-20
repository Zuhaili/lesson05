import React from 'react';
import {View, Text} from 'react-native';
import Movie from './Movie';
import MovieList from './Movie';
import BoatList from './Boats';
import {ScrollView} from 'react-native';

const App: () => React$Node = () => {
  return (

    <ScrollView>
      <Text>Lesson 05 Exercises</Text>
      {/*<Movie />*/}
      <MovieList />
      <BoatList />

    </ScrollView>

  );
};

export default App;
