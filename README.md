# Tap House Bourbon Loyalty site

The site for www.taphousega.com: a single page with the loyalty rules, this month's bonus-points bottles, and our Tap House Picks on the shelf.

## Changing the bottles

Everything about the bottles is in **`bottles.js`**. You don't need to touch any other file.

On GitHub:
1. Open `bottles.js` and click the pencil (Edit).
2. Change, add or delete a bottle. Each bottle is one line between `{` and `},`.
3. Click **Commit changes**. The site updates by itself in a minute or two.

To add a photo: open the `img/bottles` folder, click **Add file → Upload files**, and upload the photo. Then use its file name in `photo: "..."`.

Examples:
- Mark a bottle sold out: add `soldOut: true,` to its line.
- Every bottle on the site is a Tap House Pick, so give each new bottle `pick: true,` (that shows the gold tag).
- Rename the bonus section for a new month: change `bonusTitle` near the top.
- Put a Tap House Pick on 10x points: add `points: "10x Points",` to its line. It shows in the 10x section too. Remove it when the month ends.

## Other files

- `index.html`: the page text (rules, hours, address)
- `styles.css`: colors and layout
- `app.js`: builds the bottle cards from `bottles.js`
- `img/`: logo and bottle photos
