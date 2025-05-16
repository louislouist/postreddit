import snoowrap from 'snoowrap';
import dotenv from 'dotenv';

dotenv.config();

const reddit = new snoowrap({
	userAgent: process.env.USER_AGENT!,
	clientId: process.env.REDDIT_CLIENT_ID!,
	clientSecret: process.env.REDDIT_CLIENT_SECRET!,
	username: process.env.REDDIT_USERNAME!,
	password: process.env.REDDIT_PASSWORD!,
});


// function resolveBluebird<T>(p: Promise<any>): Promise<T> {
// 	return p as unknown as Promise<T>;
// }

export async function postToSubreddit(
	subreddit: string,
	title: string,
	content: string,
) {
	try {
		const raw = (await reddit.submitSelfpost as any)({
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
