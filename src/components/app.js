import React from 'react';
import Header from './header';
import Footer from './footer';
import SearchResults from './searchresults';
import elasticsearch from 'elasticsearch';

let client = new elasticsearch.Client({
	host: 'localhost:9200',
	log: 'trace'
})


class App extends React.Component {
	constructor(props) {
        super(props);
		this.state = { results: [], notFound: true }
        this.handleChange = this.handleChange.bind(this);
	} 

	componentWillMount() {
		var search_query = '*';
		this.esSearch(search_query);
	}

	handleChange ( event ) {
		var search_query = event.target.value + '*';
		this.esSearch(search_query);
	}

	esSearch( sq ) {
		var search_query = sq;
		var size = 20;
		var from_size = -20;
		var from = from_size + size;

		client.search({
			index: 'photos',
			type: 'photo',
			q: search_query,
			size: size,
			from: from
		}).then(function ( body ) {
			if(body.hits.max_score===null) {
				this.setState({notFound: true})
			}
			else {
				this.setState({notFound: false})
			}
			this.setState({ results: body.hits.hits })
		}.bind(this), function ( error ) {
			console.trace( error.message );

		});
	}

	renderNotFound() {
    return <div>No Vectors found. Try a different search.</div>;
  	}

	renderPosts() {

		return(
			<div className="test bclass">
                        <SearchResults results={ this.state.results } />
						<button type="button" className="btn btn-default">Load More</button>
                    </div>
		)
		
	}
    
	render () {

		const { notFound } = this.state;	
		return (
            <div className="main">
                <Header />
                <input id="search" className="form-control form" type="text" placeholder="Start Searching" name="search" onChange={ this.handleChange }></input>
					<div>
						{notFound ? this.renderNotFound() : this.renderPosts()}
					</div>
                <Footer />
            </div>
		)
	}
}

export default App;
