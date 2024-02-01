import { FC } from 'react'
import PostItem from '~/components/profileComponents/PostItem'
import { Post } from '~/models/post'

interface IPostsList {
	posts: Post[]
}

const PostsList: FC<IPostsList> = ({ posts }) => {
	return (
		<div>
			{posts.map(hui => (
				<PostItem post={hui} />
			))}
		</div>
	)
}

export default PostsList
