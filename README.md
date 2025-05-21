# postreddit
Some typescript helper functions for posting to reddit using snoowrap with Promise type modifications. Probably unsafe.

## Setup

### Create a .env file in the root of your project with:
```env
USER_AGENT=YourAppName/1.0.0 by YourRedditUsername
REDDIT_CLIENT_ID=your_reddit_client_id
REDDIT_CLIENT_SECRET=your_reddit_client_secret
REDDIT_USERNAME=your_reddit_username
REDDIT_PASSWORD=your_reddit_password
```

These values are obtained by creating a Reddit App at [https://www.reddit.com/prefs/apps](https://www.reddit.com/prefs/apps)

## fun
```ts
await RedditPoster.postText('test', 'Hello Reddit', 'This is my first post!');

await RedditPoster.postLink('test', 'Check this out', 'https://example.com');

await RedditPoster.commentOnPost('abc123', 'Nice post!');

const postId = extractPostId('https://www.reddit.com/r/test/comments/abc123/example_post/');
console.log(postId); // "abc123"
```

Each method logs the success to the console with the post or comment URL. Errors are caught and logged with a helpful message.

## npm install

```bash

npm install git+http://github.com/louislouist/postreddit.git
```


