import React from 'react';

class Searchbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: ''
        };
    };

    handleUserInput(e) {
	  this.setState({
	    userInput: e.target.value
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
                        {/*<div className="col-xs-2" style={{float : 'left'}}>    
                            <button onClick={this.clicked} className="btn btn-default" type="button"><i className="glyphicon glyphicon-search"></i></button>
                        </div>*/}  
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
