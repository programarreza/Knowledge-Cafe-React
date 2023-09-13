import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

// load data
const Blogs = ({handleBookmarks, handleMarkAsRead}) => {

	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		fetch('blogs.json')
			.then(res => res.json())
			.then(data => setBlogs(data))
	}, [])

	// console.log(blogs)

	return (
		<div className="md:w-2/3">
			<h1>Blogs : {blogs.length}</h1>
			{
				blogs.map(blog => <Blog 
					key={blog.ID}
					blog={blog}
					handleBookmarks={handleBookmarks}
					handleMarkAsRead={handleMarkAsRead}
				></Blog>)
			}
		</div>
	);
};

Blogs.propTypes = {
	handleBookmarks: PropTypes.func.isRequired,
	handleMarkAsRead: PropTypes.func.isRequired
}

export default Blogs;