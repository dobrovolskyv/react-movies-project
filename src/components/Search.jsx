import React from 'react';

class Search extends React.Component {
    state = {
        search: '',
        type: 'all'
    }
    handleKey = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type)
        }
    }

    handeFilter = (e) => {
        this.setState(() => ({ type: e.target.dataset.type }), () => {
            this.props.searchMovies(this.state.search, this.state.type)
        })
    }

    render() {
        return <div>
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            placeholder='search'
                            type="search"
                            className="validate"
                            value={this.state.search}
                            onChange={(e) => this.setState({ search: e.target.value })}
                            onKeyDown={this.handleKey}
                        />
                        <button
                            className='btn btn-search brown lighten-3'
                            onClick={() => this.props.searchMovies(this.state.search, this.state.type)}
                        >Enter</button>
                    </div>
                    <div >
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                data-type='all'
                                onChange={this.handeFilter}
                                checked={this.state.type === 'all'}
                            />
                            <span>All</span>
                        </label>
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                data-type='movie'
                                onChange={this.handeFilter}
                                checked={this.state.type === 'movie'}
                            />
                            <span>Movies</span>
                        </label>
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                data-type='series'
                                onChange={this.handeFilter}
                                checked={this.state.type === 'series'}
                            />
                            <span>Serials</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    };
};

export { Search };