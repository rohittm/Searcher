import React from 'react';
import elasticsearch from 'elasticsearch'

let client = new elasticsearch.Client({
	host: 'localhost:9200',
	log: 'trace'
})

class Searchbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput : []
        };
    };

    handleUserInput( event ) {
	  const search_query = event.target.value

		client.search({
			q: search_query,
            size: 50
		}).then(function ( body ) {
			this.setState({ results: body.hits.hits })
		}.bind(this), function ( error ) {
			console.trace( error.message );
		});
	}

    clicked() {
        var x,y,src;
        x=document.getElementById("search");
        y=x.value;
        src = 'http://localhost:9200/photos2/photo/_search?q=keywords:'+y;
        console.log(src);
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-xs-4"></div>
                <div className="col-xs-4">
                    <div className="row">
                        <div className="col-xs-12">            
                                <input id="search" className="form-control" type="search" placeholder="Enter Anything" name="search" onKeyPress={this.clicked} onChange={this.handleUserInput.bind(this)} value={this.state.userInput}></input>
                        </div>
                        <SearchResults results={ this.state.results } />
                    </div>
                </div>
                <div className="col-xs-4"></div>
                <br />
                <h1>{this.state.userInput}</h1>
            </div>
        );
    }
}

    
export default Searchbox;
