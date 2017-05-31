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
		this.state = { results: [], search_query: '*' }
        this.handleChange = this.handleChange.bind(this);
	} 

	handleChange ( event ) {
		var search_query = event.target.value;
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
                                    <input id="search" className="form-control" type="text" placeholder="Start Searching" name="search" onChange={ this.handleChange }></input>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-4"></div>
                    <br />
                    </div>
                    <div className="test bclass">
                        <SearchResults results={ this.state.results } />
						<button type="button" className="btn btn-default">Load More</button>
                    </div>
                <Footer />
            </div>
		)
	}
}

export default App;
