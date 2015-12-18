import React from 'react';
import Router from 'react-router';
import routers from './routes';

Router.run(routes, Router.HistoryLocation,function(Handler){
	React.render(<Handler />,document.getElementById('app'));
});