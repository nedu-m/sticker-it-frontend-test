# The Task

Using the wireframes we've provided try to to create the menu for both mobile
and desktop. We don't expect you to be able to create everything to pixel
perfection in the allocated time

Must haves:

* Read the menu from `src/menu.json`
  * You might need to update it, or suggest another structure if unsuitable for
    your implementation
* Working menu/desktop menus (even if not feature complete)
* Use of appropriate MUI components (e.g. Button)
* Update the README.md with:
  * What you'd do if you had more time
  * What design or UX improvements you'd make?

Not required:

* Searchbar

## On completion

Send us a link to your fork so we can check it out.

# Installing

```bash
yarn install
```

# Running storybook

```bash
yarn run storybook
```

The browser should open at <http://localhost:6006>

# Second Iteration of this task

Firstly, took a crash course on Material UI and Storybook to understand the basics of both.
Never used either before, so this was a good learning experience.

So here's what I did:

* Created the menu for desktop and mobile using the MUI components

* Read from the menu.json file to populate the menu and made the sticker buttons work(they are clickable)

* Used the appropriate MUI components for the menu items

* Made the menu responsive for mobile

## What I would do if I had more time

* Deep dive into MUI to understand how to use it better

* Passing props to the components to make them more dynamic rather than abstracting and passing the data from the menu.json file

* Work on the functionality of the mobile menu

## Suggestions for improvements

* Restructure the menu.json file to make it easier to abstract the data and use it in the components

* Work on the responsiveness of the menu for mid-sized screens
