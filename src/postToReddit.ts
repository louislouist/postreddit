import snoowrap from 'snoowrap';
import { reddit } from './redditClient';

// function resolveBluebird<T>(p: Promise<any>): Promise<T> {
// 	return p as unknown as Promise<T>;
// }

export async function postToSubreddit(
	subreddit: string,
	title: string,
	content: string,
) {
	try {
		const raw = await (reddit.submitSelfpost as any)({
			subredditName: subreddit,
			title,
			text: content,
		});

		const submission = raw as snoowrap.Submission;

		console.log(`Posted: ${submission.url}`);
	} catch (err) {
		console.error('Error posting to subreddit:', err);
	}
}
