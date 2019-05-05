const bodyParser = require( 'body-parser' );
const express = require( 'express' );
const app = express();
const ct = require( './controller.js' );

app.use( bodyParser.json() );


// Endpoints
app.get( '/api/gym_members/', ct.read );
app.get( '/api/gym_members/:first_name', ct.read)
app.post( '/api/gym_members/', ct.create );
// app.put( '/api/gym_members/:id', ct.update );
// app.delete( '/api/gym_members/:id', ct.delete );


const port = 4001;
app.listen( port, () => { console.log( `Listening on port ${port}` ); } );

