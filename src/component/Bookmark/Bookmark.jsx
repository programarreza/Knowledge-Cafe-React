import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
	console.log(bookmark);

	const {Title} = bookmark;
	console.log(Title);
	return (
		<div className='bg-white p-4 m-4 rounded-xl'>
			<h1 className='text-xl'>{Title}</h1>
		</div>
	);
};

Bookmark.propTypes = {
	bookmark: PropTypes.array
}

export default Bookmark;