var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		imageUrl: 'https://img00.deviantart.net/63d3/i/2015/113/e/d/harry_potter_movie_poster_fanart_by_sparco2-d5rz6ra.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		imageUrl: 'http://1.fwcdn.pl/po/68/80/6880/7398343.5.jpg'
	},
	{
		id: 3,
		title: 'Pulp Fiction',
		desc: 'Film gangsterski',
		imageUrl: 'https://cdn.europosters.eu/image/750webp/1721.webp'
	},
	{
		id: 4,
		title: 'E.T.',
		desc: 'Film o kosmicie',
		imageUrl: 'https://originalvintagemovieposters.com/wp-content/uploads/2015/01/ET-3825-697x1024.jpg'
	}
	
];

/* 
var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.imageUrl},
		)
	);		
});

var element = 
React.createElement('div', {},
	React.createElement('h1', {}, 'Lista filmów'),
	React.createElement('ul', {}, moviesElements)
);

		
ReactDOM.render(element, document.getElementById('app')); 
*/


// NOWY KOD


// Klasa Movie
var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },

  render: function () {
    return (
      React.createElement('li', {},
        React.createElement(MovieTitle, {movieTitle: this.props.movie.title}),
        React.createElement(MovieDesc, {movieDesc: this.props.movie.desc}),
        React.createElement(MovieImage, {movieImage: this.props.movie.imageUrl})
      )
    );
  }
});

//Klasa MoviesList
var MoviesList = React.createClass({
  propTypes: {
    moviesList: React.PropTypes.array.isRequired
  },

  render: function () {
    var itemMovie = this.props.moviesList.map(function (item) {
      return React.createElement(Movie, {movie: item, key: item.id})
    });
    return (
      React.createElement('ul', {}, itemMovie)
    );
  }
});

//Klasa MovieTitle
var MovieTitle = React.createClass({
  propTypes: {
    movieTitle: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      React.createElement('h2', {}, this.props.movieTitle)
    );
  }
});

//Klasa MovieDescription
var MovieDesc = React.createClass({
  propTypes: {
    movieDesc: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      React.createElement('p', {}, this.props.movieDesc)
    );
  }
});

//Klasa MovieImage
var MovieImage = React.createClass({
  propTypes: {
    movieImage: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      React.createElement('img', {src: this.props.movieImage})
    );
  }
});

var app = React.createClass({
  render: function () {
    return (
      React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement(MoviesList, {moviesList: movies})
      )
    );
  }
});

ReactDOM.render(React.createElement(app), document.getElementById('app'));
