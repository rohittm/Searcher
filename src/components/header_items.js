import React from 'react';

var i=0;
var heads = ['About', 'Contact'];

var navLinks = heads.map(function(head){
      return (
        <li key={(i++).toString()}>
            <a href={'/' + head}>
                {head}
            </a>{'  '} 
        </li>
      );
    });

export default navLinks;