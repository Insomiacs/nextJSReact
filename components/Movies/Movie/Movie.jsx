// @flow
import React, { Component } from 'react';
import { Router } from '../../../server/routes';

import styled from 'styled-components';

const MovieItem = styled.div`
    width: 350px;
    margin: 50px 0;
`;

const Poster = styled.img`
    width: 100%;
`;

const MovieInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const MovieTitle = styled.span`
    display: block;
    text-transform: uppercase;
`;

const MovieGenres = styled.span`
    opacity: .5;
    font-size: 13px;
    margin-top: 15px;
`;

type Props = {
    id: string,
    image: string,
    title: string,
    genres: Array<string>
}

class Movie extends Component<Props> {
    changeMovie = (id: string) => () => {
        Router.pushRoute('film', { id })
    };
    render() {
        return (
            <MovieItem
                onClick={this.changeMovie(this.props.id)}
            >
                <Poster src={this.props.image} alt=""/>
                <MovieTitle>{this.props.title}</MovieTitle>
                {
                    this.props.genres && this.props.genres.map((item, index) =>
                        <MovieGenres
                            key={index}
                        >
                            {item}
                        </MovieGenres>
                    )
                }
            </MovieItem>
        )
    }
}

export default Movie;
