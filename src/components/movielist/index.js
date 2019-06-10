import React from "react";
import styled from 'styled-components';

import MovieItem from '../movieitem';

export default class MovieList extends React.Component {

  render () {
    const { movies, genres } = this.props;

    return (
      <MoviesWrapper>
        {/* Finish the MovieItem component and use it here to display the movie results */}
      </MoviesWrapper>
    )
  }
}

const MoviesWrapper = styled.div`
  position: relative;
`