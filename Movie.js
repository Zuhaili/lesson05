import React from 'react';
import {View, Text} from 'react-native';
import {Image} from 'react-native';

const movie = {title: 'Doctor Sleep', year: '2019'};
class Movie extends React.Component {
  render() {
    return (
      <View>
        <Image source={this.props.poster} />
        <Text>{this.props.title + '\n' + this.props.year}</Text>

      </View>
    );
  }
}

//Exercise 3
// const MOVIES_DATA = ['Doctor Sleep', 'Midway'];
// const MovieList = () => {
//   return MOVIES_DATA.map(title => <Text> {title} </Text>
//
//   )
// };

//Exercise 4
// const MOVIES_DATA = [
//   {
//     title: 'Doctor Sleep',
//     year: '2019',
//   },
//   {
//     title: 'Midway',
//     year: '2019',
//   },
// ];

const MOVIES_DATA = [
  {
    title: 'Doctor Sleep',
    year: '2019',
    poster: require('./img/doctor-sleep.jpg'),
  },
  {
    title: 'Midway',
    year: '2019',
    poster: require('./img/midway.jpg'),
  },
];

const MovieList = () => {
  return MOVIES_DATA.map((movie) => {
    return (
      <Movie title={movie.title} year={movie.year} poster={movie.poster} />
    );
  });
};
export default MovieList;
