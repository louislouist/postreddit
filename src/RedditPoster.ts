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

export class RedditPoster {
	static async postText(
		subreddit: string,
		title: string,
		content: string
	): Promise<string | null> {
		try {
			const raw = await (reddit.submitSelfpost as any)({
				subredditName: subreddit,
				title,
				text: content,
			});

			const submission = raw as snoowrap.Submission;
			console.log(`Text post submitted: ${submission.url}`);
			return submission.url;
		} catch (err) {
			console.error('❌ Error posting text:', err);
			return null;
		}
	}

	static async postLink(
		subreddit: string,
		title: string,
		url: string
	): Promise<string | null> {
		try {
			const raw = await (reddit.submitLink as any)({
				subredditName: subreddit,
				title,
				url,
			});

			const submission = raw as snoowrap.Submission;
			console.log(`Link post submitted: ${submission.url}`);
			return submission.url;
		} catch (err) {
			console.error('❌ Error posting link:', err);
			return null;
		}
	}

	static async commentOnPost(
		postId: string,
		comment: string
	): Promise<string | null> {
		try {
			// Cast getSubmission as any to avoid recursive promise issues
			const rawSubmission = await (reddit.getSubmission as any)(postId).fetch();
			const submission = rawSubmission as snoowrap.Submission;

			// Likewise for reply
			const rawComment = await (submission.reply as any)(comment);
			const postedComment = rawComment as snoowrap.Comment;

			console.log(`Comment posted: https://reddit.com${postedComment.permalink}`);
			return `https://reddit.com${postedComment.permalink}`;
		} catch (err) {
			console.error('❌ Error posting comment:', err);
			return null;
		}
	}

	static isConfigured(): boolean {
		return !!(
			process.env.REDDIT_CLIENT_ID &&
			process.env.REDDIT_CLIENT_SECRET &&
			process.env.REDDIT_USERNAME &&
			process.env.REDDIT_PASSWORD &&
			process.env.USER_AGENT
		);
	}
}

export function extractPostId(url: string): string | null {
	const match = url.match(/\/comments\/(\w+)\//);
	return match?.[1] ?? null;
}
