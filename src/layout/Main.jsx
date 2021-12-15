import React from 'react';
import { CardList } from '../components/CardList'
import Preloader from '../components/Preloader'
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component {
    state = {
        movies: [],
        Loading: true
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false }))
    }

    searchMovies = (str, type = 'all') => {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false }))
    }

    render() {

        const { loading } = this.state
        return <main className='container content' >
            <Search searchMovies={this.searchMovies} />
            {
                loading ? <Preloader /> :
                    (<CardList movies={this.state.movies} />)

            }

        </main>
    }



};

export default Main;