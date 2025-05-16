import { reddit } from './redditClient';

export async function postToSubreddit(
	subreddit: string,
	title: string,
	content: string,
	isLinkPost = false
) {
	const post = isLinkPost ?
		await reddit.submitLink({
			subredditName: subreddit,
			title,
			url: content,
		})
		: await reddit.submitSelfpost({
			subredditName: subreddit,
			title,
			text: content,
		});

	console.log(`✅ Posted to r/${subreddit}: ${post.url}`);
}
