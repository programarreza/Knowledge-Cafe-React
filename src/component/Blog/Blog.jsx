import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog, handleBookmarks, handleMarkAsRead }) => {

	// console.log(blog)
	const {ID, Title, Cover, author_img, author_name, reading_time, posted_data, hashtags } = blog;

	return (
		<div className='mb-20'>
			<img className='w-full' src={Cover} alt={`Cover picture of the title ${Title}`} />
			<div className='flex justify-between items-center'>
				<div className='flex justify-between items-center'>
					<div className='flex mt-8 mb-4'>
						<img className='w-20 rounded-[60px]' src={author_img} alt="" />
						<div className='ml-6'>
							<h2 className='text-2xl font-bold'>{author_name}</h2>
							<p className='font-semibold'>{posted_data}</p>
						</div>
					</div>

				</div>

				<div className='flex items-center'>
					<span>{reading_time} min read</span>
					<button onClick={() => handleBookmarks(blog)}
						className='ml-2 text-red-400 text-2xl'>
						<FaBookmark />
					</button>
				</div>
			</div>
			<h4 className="text-4xl mb-4">{Title}</h4>
			<p>
				{
					hashtags.map((hash, index) => <span key={index}><a href="#"> {hash} </a></span>)
				}
			</p>
	<button className='text-purple-800 font-bold underline' onClick={() => handleMarkAsRead(reading_time, ID)}>Mark as Read</button>
		</div>
	);
};

Blog.propTypes = {
	blog: PropTypes.object.isRequired,
	handleBookmarks: PropTypes.func.isRequired,
	handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;