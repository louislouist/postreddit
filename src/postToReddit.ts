import { reddit } from "./redditClient";

function postLink(subreddit: string, title: string, url: string) {
	return reddit.submitLink({
		subredditName: subreddit,
		title,
		url,
	});
}

function postSelf(subreddit: string, title: string, text: string) {
	return reddit.submitSelfpost({
		subredditName: subreddit,
		title,
		text,
	});
}

export async function postToSubreddit(
	subreddit: string,
	title: string,
	content: string,
	isLinkPost = false
) {
	const post = isLinkPost
		? postLink(subreddit, title, content)
		: postSelf(subreddit, title, content);


	console.log(`✅ Posted to r/${subreddit}: ${title}`);
}
