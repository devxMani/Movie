import PropTypes from 'prop-types';

function SearchBar({ searchMovie, fetchMovieData }) {
  return (
    <div className="main flex justify-center py-5 px-4">
      <input
        type="text"
        placeholder="Search"
        value={searchMovie}
        onChange={(e) => {
          searchMovie(e.target.value);
        }}
        className="rounded-l-lg w-80 bg-gray-200 placeholder-gray-400 px-2 py-2 outline-none border-2
border-gray-500 text-black"
      />

      <button
        onClick={fetchMovieData}
        className="bg-[#40407a] shadow-md px-4 text-white rounded-r-lg border-b-2 border-t-2
border-gray-500 border-r-2"
      >
        {}
        Search
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  searchMovie: PropTypes.func.isRequired,
  setSearchMovie: PropTypes.func.isRequired,
  fetchMovieData: PropTypes.func.isRequired,
};

export default SearchBar;
