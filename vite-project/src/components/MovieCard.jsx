import PropTypes from 'prop-types';

function MovieCard({ allMovieData }) {
  return (
    <div>
      <div className="main flex flex-wrap px-4 lg:px-10">
        {allMovieData.map((item) => {
          const { Poster, Title, Year } = item;

          return (
            <div className="p-2 child lg:w-1/4 w-full" key={item.id}>
              <div className="sub-child bg-[#002e4b] p-3 rounded-2xl">
                <img
                  className="w-full rounded-lg mb-2"
                  src={Poster}
                  alt="img"
                />
                <h2 className="text-white text-xl font-bold">{Title}</h2>
                <h2 className="text-white text-lg mb-2">Year{Year}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  allMovieData: PropTypes.array.isRequired,
};

export default MovieCard;
