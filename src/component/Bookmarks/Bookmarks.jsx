import PropTypes from 'prop-types';
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
	// console.log(bookmarks);
	return (
		<>
			<div className="md:w-1/3 bg-gray-100">
				<h2 className="text-2xl text-center text-[#6047EC] border-b-8 border-white py-3 mb-4">Spent time on read : {readingTime} min</h2>
				<h1 className="text-2xl text-center">Bookmarked Blogs: {bookmarks.length}</h1>
				{
					bookmarks.map(bookmark => <Bookmark key={bookmark.ID} bookmark={bookmark} ></Bookmark>)
				}
			</div>
		</>

	);
};


Bookmarks.propTypes = {
	bookmarks: PropTypes.array.isRequired,
	readingTime: PropTypes.number
}

export default Bookmarks;