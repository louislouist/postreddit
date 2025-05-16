import 'snoowrap';

declare module 'snoowrap' {
	interface Snoowrap {
		submitSelfpost(options: {
			subredditName: string;
			title: string;
			text: string;
		}): Promise<any>; // Override recursive type
	}
}
