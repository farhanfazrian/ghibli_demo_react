import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Col = styled.div.attrs({
  className: 'col-sm-6 col-md-6',
})`
  margin-bottom: 25px;
  margin-top: 25px;
`;

const Content = styled.div`
  padding: 5px;
  .content__wrapper {
    padding: 10px;
    color: white;

    &__title {
      text-align: center;
      opacity: 1;
    }

    &__description {
      opacity: 0;
    }
  }
`;

export const Card = styled.div`
  background: #35374a;
  border-radius: 8px;
  height: 350px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:hover .content__wrapper__description {
    transition: 0.7s ease-in;
    opacity: 1;
  }
  &:hover .content__wrapper__title {
    display: none;
    transition: 0.7s ease-out;
    opacity: 0;
  }
  &:hover {
    overflow-y: scroll;
  }
`;
const Contents = ({ movies }) => (
  <div className="row">
    {movies.map(movie => (
      <Col>
        <Card key={movie.id}>
          <Content>
            <div className="content__wrapper">
              <h2 className="content__wrapper__title my-5">{movie.title}</h2>
              <h6 className="content__wrapper__title">
                Rating: {movie.rt_score}
              </h6>
            </div>
            <div className="content__wrapper">
              <small className="content__wrapper__description">
                {movie.description}
              </small>
            </div>
          </Content>
        </Card>
      </Col>
    ))}
  </div>
);

Contents.propTypes = {
  movies: PropTypes.array,
};

Contents.defaultProps = {};

export default Contents;
