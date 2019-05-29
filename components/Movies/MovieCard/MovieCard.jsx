// @flow
import React, { Component } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadMovie } from "../../../redux/actions/movie";

import styled from 'styled-components';
import Wrapper from "../../../sharedComponents/Wrapper";

const StyledMovieCard = styled.div`
    background: url("https://lh3.googleusercontent.com/D88VPn13kN3AVtuqOuTWkXkZsk3MdlC2R11irE3Z1dpWWJDGU-Cqr-PiCR31VoUb1wc");
    min-height: 500px;
`;

const Overlay = styled.div`
    background: rgba(0, 0, 0, .8);
    width: 100%;
    height: 500px;
    padding: 30px 0;
    display: flex;
    align-items: center;
`;

const SearchBtn = styled.button`
    background: #ffffff;
    color: #9b1f12;
    height: 50px;
    width: 150px;
    line-height: 50px;
    text-align: center;
    text-decoration: none;
    position: absolute;
    right: 0;
    top: -80px;
`;

const NotFoundMovie = styled.span`
    color: #ffffff;
`;

const MovieInfo = styled.div`
    display: flex;
    & > div {
        margin-right: 50px;
    }
`;

const MoviePoster = styled.img`
    width: 200px;
`;

const MovieTitle = styled.h1`
    color: #9b1f12;
`;

const MovieDescription = styled.div`
    color: #ffffff;
    margin-bottom: 50px;
`;

type Props = {
    router: Object,
    loadMovie: (id: string) => Object,
    selectedMovie: Object
}

type State = {
    selectedId: string
}

class MovieCard extends Component<Props, State> {
    state = {
        selectedId: '',
    };

    componentDidMount() {
        const { router } = this.props;
        this.props.loadMovie(router.query.id).then(this.setState({
            selectedId: router.query.id
        }));
    }

    static getDerivedStateFromProps(nextProps, prevState){
        const { query } = nextProps.router;
        const { selectedId } = prevState;
        if(query.id !== selectedId) {
            nextProps.loadMovie(query.id);
            return {
                selectedId: query.id
            }
        }
        return null;
    }

    render() {
        const { selectedMovie } = this.props;
        return (
            <StyledMovieCard>
                <Overlay>
                    <Wrapper>
                        <Link href="/">
                            <SearchBtn>Search</SearchBtn>
                        </Link>
                        {!selectedMovie.id ? <NotFoundMovie>This movie doesn't exists</NotFoundMovie>
                            : <MovieInfo>
                                <div>
                                    <MoviePoster src={selectedMovie.poster_path} alt=""/>
                                </div>
                                <div>
                                    <MovieTitle>{selectedMovie.title}</MovieTitle>
                                    <MovieDescription>{selectedMovie.release_date}</MovieDescription>
                                    <MovieDescription>{selectedMovie.overview}</MovieDescription>
                                </div>
                            </MovieInfo>
                        }
                    </Wrapper>
                </Overlay>
            </StyledMovieCard>
        );
    }
}
const mapStateToProps = ({movie}) => ({
    movieLoaded: movie.movieLoaded,
    selectedMovie: movie.selectedMovie
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    loadMovie
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieCard));
