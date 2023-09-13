import PropTypes from 'prop-types';
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
	// console.log(bookmarks);
	return (
		<>
		<div className="md:w-1/3 bg-gray-100">
			<h1 className="text-2xl text-center">Bookmarked Blogs: {bookmarks.length}</h1> 
			{
				bookmarks.map(bookmark => <Bookmark key={bookmark.ID} bookmark={bookmark}></Bookmark>)
			}
		</div>
		</>
		
	);
};


Bookmarks.propTypes = {
	bookmarks: PropTypes.array.isRequired,
}

export default Bookmarks;