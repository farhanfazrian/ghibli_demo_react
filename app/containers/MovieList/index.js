import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { compose } from 'redux';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import Img from 'components/Img';

import {
  makeSelectData,
  makeSelectDataLoading,
} from 'containers/App/selectors';

import injectSaga from 'utils/injectSaga';
import LoadingIndicator from 'components/LoadingIndicator';
import Contents from './Contents';
import saga from './saga';

import MainLogo from '../../images/1200px-Studio_Ghibli_logo.svg.png';
import { loadData } from '../App/actions';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  .content__wrapper {
    &__image {
      width: 80%;
      margin: auto;
      margin-top: 30px;
    }
  }
`;

export class MovieList extends React.PureComponent {
  componentWillMount() {
    this.props.onLoadMovie();
  }

  componentDidMount() {}

  render() {
    const { movies, moviesLoading } = this.props;
    return (
      <Wrapper className="content__wrapper">
        <Img className="content__wrapper__image" src={MainLogo} />
        {moviesLoading && <LoadingIndicator />}
        {movies && <Contents movies={movies} />}
      </Wrapper>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  moviesLoading: PropTypes.bool,
  onLoadMovie: PropTypes.func,
};

export const mapStateToProps = createStructuredSelector({
  movies: makeSelectData(),
  moviesLoading: makeSelectDataLoading(),
});

export const mapDispatchToProps = dispatch => ({
  onLoadMovie: () => dispatch(loadData()),
});

const withSaga = injectSaga({ key: 'home', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withSaga,
  withConnect,
)(MovieList);
