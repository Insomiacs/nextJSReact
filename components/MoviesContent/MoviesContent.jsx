import React, {Component} from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { getMovies } from "../../redux/selectors/sortMovies";

import Wrapper from "../../sharedComponents/Wrapper/Wrapper";

import Movies from "../Movies";
import { loadMovies } from "../../redux/actions/movies";
import { updateSortType } from '../../redux/actions/sort';

const SearchInfo = styled.div`
    height: 50px;
    background: #eaeaea;
    display: flex;
    align-items: center;
`;

const ResultWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Result = styled.span`
    font-weight: bold;
`;

const Sort = styled.div`
    display: flex;
    & div {
        margin-left: 30px;
        cursor: pointer;
    }
`;

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

class MoviesContent extends Component {
    state = {
        movies: []
    };
    componentDidMount() {
        this.props.loadMovies();
    }

    updateSortType = (type) => () => {
        this.props.updateSortType(type)
    };

    render() {
        const { movies } = this.props;
        return(
            <div>
                <SearchInfo>
                    <Wrapper>
                        <ResultWrapper>
                            <Result>{movies.items.length} movies found</Result>
                            <Sort>
                                Sort by
                                <div
                                    onClick={this.updateSortType('release_date')}
                                >
                                    release date
                                </div>
                                <div
                                    onClick={this.updateSortType('vote_average')}
                                >
                                    rating
                                </div>
                            </Sort>
                        </ResultWrapper>
                    </Wrapper>
                </SearchInfo>
                <Wrapper>
                    <Content>
                        { !movies.moviesLoaded ? 'Loading' : <Movies movies={movies.items}/> }
                    </Content>
                </Wrapper>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    movies: {
        ...state.movies,
        items: getMovies(state)
    },
    sortType: state.sort.type
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    loadMovies,
    updateSortType
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContent)
