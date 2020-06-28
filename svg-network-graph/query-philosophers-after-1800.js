class SPARQLQueryDispatcher {
	constructor( endpoint ) {
		this.endpoint = endpoint;
	}

	query( sparqlQuery ) {
		const fullUrl = this.endpoint + '?query=' + encodeURIComponent( sparqlQuery );
		const headers = { 'Accept': 'application/sparql-results+json' };

		return fetch( fullUrl, { headers } ).then( body => body.json() );
	}
}

const endpointUrl = 'https://query.wikidata.org/sparql';
const sparqlQuery = `
SELECT ?a ?aLabel ?birth_date ?death_date WHERE {
  ?a wdt:P106 wd:Q4964182;
    (p:P569/psv:P569) ?birth_date_node.
  ?birth_date_node wikibase:timePrecision 9 .
  ?birth_date_node wikibase:timeValue ?birth_date.
  FILTER((YEAR(?birth_date)) > 1800 )
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
}
ORDER BY (?birth_date) (?aLabel)`;

const queryDispatcher = new SPARQLQueryDispatcher( endpointUrl );
queryDispatcher.query( sparqlQuery ).then( console.log );