# K9 Discord Bot
Discord entertainment bot

This was created initially for testing out the Discord API along with other obsecure APIs to interface through Discord API. Code will be updated and refactor as needed.

## Installing
```
npm install
```
create a local.js
```javascript
/* local.js */
module.exports = {
    botid: 'BOT API KEY FROM DISCORD',
    imgurCID: 'IMGUR API CLIENT ID'
};
```
run it
```
npm start
```
## Commands
- [X] !r34-random
- [X] !r34 tag
- [ ] !pron
- [X] !meme-imgflip (imgflip API slow to respond sometimes)
- [X] !4chan-pol
- [X] !4chan-x
- [X] !4chan-wg
- [X] !4chan-s
- [X] !4chan-v
- [X] !4chan-vg
- [X] !4chan-k
- [X] !4chan-ck
- [ ] !imeme-imgur

## Work in progress
- [ ] [refactor] If-else if for command parsing is a bad structure. Upgrade to a more functional approach
- [ ] [bug] Not all arrays are checked for data
- [ ] [bug] Substring issues for empty text posts
- [ ] [upgrade] HTML parsing needed for scraping search results from sites without an API