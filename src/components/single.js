import React from 'react';

let i = 1;

class Single extends React.Component {
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
						<img className="image" src={"http://rohitmotwani.com/photos/" + result._source.file_name} alt={result._source.file_name + i++} />
							) }) }
				</ul>
			</div>
		)
	}
}

export default Single;