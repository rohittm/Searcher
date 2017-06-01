import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';

let i = 1;


class SearchResults extends React.Component {

	constructor(props) {
        super(props);
		this.state = { results: [] }
	} 

	render () {
		return (
			<div>
				<hr />
                <ul>
				{ this.props.results.map((result) => {
					return (
								<li key={ result._id + i++}>
									<LazyLoad className="lazy">
										<img className="image" src={"http://rohitmotwani.com/photos/" + result._source.file_name} alt="Search Result" />
									</LazyLoad>
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

export default SearchResults;