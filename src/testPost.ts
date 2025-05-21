import { postToSubreddit } from './postToReddit';

(async () => {
	await postToSubreddit('test', 'Hello Reddit!', 'This is a test post.');
})();
