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

async function postToSubreddit() {
	try {
		const submission = reddit.submitSelfpost({
			subredditName: 'test',
			title: 'Hello from TypeScript + snoowrap!',
			text: 'This is a test post made from a backend tool.',
		}) as unknown as snoowrap.Submission;

		console.log(`Posted: ${submission.url}`);
	} catch (err) {
		console.error('Error posting to subreddit:', err);
	}
}

postToSubreddit();


// import { postToSubreddit } from './postToReddit';
//
// (async () => {
// 	await postToSubreddit('test', 'Hello Reddit!', 'This is a test post.');
// })();
