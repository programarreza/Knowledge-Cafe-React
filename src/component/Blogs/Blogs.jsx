import { useEffect, useState } from "react";

// load data
const Blogs = () => {

	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		fetch('blogs.json')
		.then(res => res.json())
		.then(data => setBlogs(data))
	}, [])

	console.log(blogs)

	return (
		<div>
			
		</div>
	);
};

export default Blogs;