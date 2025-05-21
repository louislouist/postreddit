import 'snoowrap';

declare module 'snoowrap' {
	interface Snoowrap {
		submitSelfpost(options: {
			subredditName: string;
			title: string;
			text: string;
		}): Promise<any>;

		submitLink(options: {
			subredditName: string;
			title: string;
			url: string;
		}): Promise<any>;

		submitMediaPost(options: {
			subredditName: string;
			title: string;
			imagePath: string;
		}): Promise<any>;
	}
}
