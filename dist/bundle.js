'use strict';

var style = { backgroundColor: 'orange', color: 'white', fontFamily: 'verdana' };

ReactDOM.render(React.createElement(
	'h1',
	{ id: 'title', className: 'header', style: { backgroundColor: 'orange', color: 'white', fontFamily: 'verdana' } },
	'Hello World'
), document.getElementById('react-container'));
