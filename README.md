# CIDEA Lab Website

Website for the CIDEA Lab (Charlotte · Intelligent, Data-Driven, Educational, Analytics) in the College of Computing and Informatics at UNC Charlotte.

It is plain HTML, CSS, and JavaScript — no frameworks and no build step. Open `index.html` in a browser to view it, and host it on any static web host.

## Files

```
.
├── index.html          Home
├── research.html       Research themes and funding
├── people.html         Director, co-directors, and members
├── publications.html   Selected publications
├── news.html           Updates
├── contact.html        Contact information and form
└── assets/
    ├── styles.css      All styling (colors are at the very top)
    ├── script.js       Menu button and contact form
    ├── logo.png        Full logo (homepage hero)
    ├── icon.png        Bulb mark (header, footer, tab)
    └── favicon.png     Browser-tab icon
```

---

## How to edit — no coding experience needed

You only need a text editor (even Notepad or TextEdit works, but a free editor like VS Code is nicer). Each page is one file. Find the text you want to change, type over it, and save. To see your change, open the file in a browser. Below are the most common edits, with copy-and-paste examples.

### Change wording on a page
Open the page (for example `index.html`), find the sentence, and edit the words between the `>` and `<`. For example, to change the homepage headline, find:

```html
<h1>Research on learning, powered by data.</h1>
```

and replace the text between `<h1>` and `</h1>`.

### Change the colors
All colors live at the top of `assets/styles.css`, so you change them in one place:

```css
--green:    #006b3f;   /* main green */
--gold:     #c4a64e;   /* gold accent */
```

Replace the color code (the part starting with `#`) and save. Every page updates.

### Add or edit a person (people.html)
Each person is one block. To add someone, copy an existing block and change the details. A member block looks like this:

```html
<div class="person">
  <div class="avatar">TD</div>
  <div class="name">Thanmay Mohandas Das</div>
  <div class="role">Researcher</div>
  <div class="links"><a href="mailto:tdas2@charlotte.edu">Email</a></div>
</div>
```

- `TD` are the initials shown when there is no photo. Change them to the new person's initials.
- Change the name, the role (for example `PhD Student`, `MS Student`, or `Undergraduate Researcher`), and the email.

**To show a photo instead of initials**, put an image tag inside the avatar. Save the photo in `assets/` (for example `assets/people/jane-doe.jpg`) and use:

```html
<div class="avatar">TD<img src="assets/people/jane-doe.jpg" alt="Jane Doe" onerror="this.remove()"></div>
```

If the photo is missing or the link breaks, it automatically falls back to the initials.

### Add a publication (publications.html)
Copy one publication block and edit it:

```html
<div class="pub">
  <div class="venue">Conference or Journal · Year</div>
  <div class="title"><a href="LINK-TO-PAPER">Title of the paper</a></div>
  <div class="authors">Author One, Author Two</div>
  <div class="tags"><span class="tag">Topic</span><span class="tag">Topic</span></div>
</div>
```

If there is no link yet, remove the `<a ...>` and `</a>` and just leave the title text.

### Add a news update (news.html)
Copy one news block and edit it:

```html
<div class="news-item">
  <div class="news-date">Month Year</div>
  <div>
    <h3>Headline</h3>
    <p>One or two sentences about the update.</p>
  </div>
</div>
```

### Replace the logo
Replace `assets/logo.png` (full logo) and `assets/icon.png` (the bulb only) with your own files, keeping the same file names. `icon.png` should be roughly square.

### A note on the menu and footer
The top menu and the footer appear on every page, so they are written into each `.html` file. If you change a menu or footer link, make the same change in all six files.

---

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Publishing on GitHub Pages

1. Create a repository and add these files (the `.html` files and the `assets` folder).
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source: Deploy from a branch**, choose branch **main** and folder **/ (root)**, and save.
4. After about a minute, the site is available at `https://<username>.github.io/<repository>/`.

To use a custom domain, set it under the same **Settings → Pages** screen and add the DNS record provided by your host.
