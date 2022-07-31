# Config

Set an environment variable `NPM_TOKEN` which is a Github Personal Access Token
to enable you to download some internal types and private packages.


# Installing

```bash
yarn install
```

# Running storybook

```bash
yarn run storybook
```

The browser should open at http://localhost:6006

# Publishing

To publish a new version use `npm version`, e.g.

```bash
npm version patch|minor|major
npm publish
```
