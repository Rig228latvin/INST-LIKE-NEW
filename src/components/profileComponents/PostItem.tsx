import { FC } from 'react'
import { Post } from '~/models/post'

interface IPost {
	post: Post
}

const PostItem: FC<IPost> = ({ post }) => {
	return (
		<div>
			<span>{post.user.username}</span>
			<img src={post.imgUrl} alt='' />
		</div>
	)
}

export default PostItem
