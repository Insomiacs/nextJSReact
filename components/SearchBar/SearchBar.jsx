// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'next/router'

import { Router } from '../../server/routes';

import Input from "../../sharedComponents/Input/Input";
import Button from "../../sharedComponents/Button";

import { updateSearchQuery, selectSearchType } from '../../redux/actions/search';
import { bindActionCreators } from "redux";

const SearchTitle = styled.span`
    color: #000;
    font-weight: bold;
    font-size: 24px;
    margin: 50px 0 20px 0;
    display: block;
`;

const SearchButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const SearchCriteria = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0;
    
    & button {
        margin: 0 10px;
    }
`;

const CriteriaTitle = styled.span`
    color: #000000;
    font-weight: bold;
`;

type Props = {
    router: {
        query: {
            name: string
        }
    },
    selectSearchType: (value: string) => void,
    updateSearchQuery: (value: string) => void
}

type State = {
    searchValue: string
}

class SearchBar extends Component<Props, State> {
    state = {
        searchValue: ''
    };

    componentDidMount() {
        const { router } = this.props;
        if(router.query.name) {
            this.props.updateSearchQuery(router.query.name);
        }
    }

    changeSearchValue = (event) => {
        this.setState({
            searchValue: event.target.value
        });
    };

    handleSubmitSearch = () => {
        this.updateMovies();
    };

    changeSearchType = (value) => () => {
        this.props.selectSearchType(value);
    };

    submitSearchOnEnter = (event) => {
        if(event.keyCode === 13) {
            this.updateMovies();
        }
    };

    updateMovies = () => {
        const { searchValue } = this.state;
        if (!searchValue) {
            Router.pushRoute('/');
            this.props.updateSearchQuery('');
        } else {
            Router.pushRoute('index', { name: searchValue })
            this.props.updateSearchQuery(searchValue);
        }
    };

    render() {
        return(
            <div>
                <SearchTitle>FIND YOUR MOVIES</SearchTitle>
                <Input
                    onChange={this.changeSearchValue}
                    submitSearchOnEnter={this.submitSearchOnEnter}
                    value={this.state.searchValue}
                />
                <SearchButtons>
                    <SearchCriteria>
                        <CriteriaTitle>SEARCH BY</CriteriaTitle>
                        <div>
                            <Button
                                onClick={this.changeSearchType('title')}
                            >Title</Button>
                            <Button
                                onClick={this.changeSearchType('genre')}
                            >Genre</Button>
                        </div>
                    </SearchCriteria>
                    <Button
                        onClick={this.handleSubmitSearch}
                    >Search</Button>
                </SearchButtons>
            </div>
        );
    }
}

const mapStateToProps = ({movies, search}) => ({
    movies,
    search
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    updateSearchQuery,
    selectSearchType,
}, dispatch);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
