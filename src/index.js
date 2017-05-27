import React from 'react'
import { render } from 'react-dom'
import elasticsearch from 'elasticsearch'
import PropTypes from 'prop-types';
import Header from './components/header'
import Footer from './components/footer'
import Clock from './components/clock'
import './assets/styles/bootstrap.min.css'
import './assets/styles/index.css'

let client = new elasticsearch.Client({
	host: 'localhost:9200',
	log: 'trace'
})

let i = 1;

class App extends React.Component {
	constructor(props) {
        super(props);
		this.state = { results: [] }
        this.handleChange = this.handleChange.bind(this);
	} 

	handleChange ( event ) {
		const search_query = event.target.value

		client.search({
			q: search_query
		}).then(function ( body ) {
			this.setState({ results: body.hits.hits })
		}.bind(this), function ( error ) {
			console.trace( error.message );
		});
	}
    
	render () {
		return (
            <div className="main">
                <Header />
                {/*<ul>
				{ this.state.results.map((result) => {
					return (
								<li key={ result._id + i++}>
									{result._source.keywords}
								</li>
							) }) }
				</ul>*/}
                <div className="row test">
                    <div className="col-xs-4"></div>
                    <div className="col-xs-4">
                        <div className="row">
                            <div className="col-xs-12">            
                                    <input id="search" className="form-control" type="text" placeholder="Enter Anything" name="search" onChange={ this.handleChange }></input>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-4"></div>
                    <br />
                    </div>
                    <div className="test">
                        <SearchResults results={ this.state.results } />
                    </div>
                    <Clock date={new Date()} />
                <Footer />
            </div>
		)
	}
}

class SearchResults extends React.Component {

	constructor(props) {
        super(props);
		this.state = { results: [] }
	} 

	render () {
		return (
			<div className="search_results">
				<hr />
                <ul>
				{ this.props.results.map((result) => {
					return (
								<li key={ result._id + i++}>
									<img className="image" src={"http://rohitmotwani.com/photos/" + result._source.file_name} alt={result._source.file_name + i++} width="100px" height="100px" />
								</li>
							) }) }
				</ul>
			</div>
		)
	}
}

SearchResults.propTypes = {
		results: PropTypes.array
	}


render( <App />, document.getElementById( 'root' ) )
