# Contributing

**Working on your first Pull Request?** You can learn how from this *free* series
[How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

## Project setup

1. Fork and clone the repo
2. `$ npm install` to install dependencies
3. `$ npm run validate` to validate you've got it working
4. Create a branch for your PR

### Testing workflow
Have a look at `test/README.md` to see how testing works. Run `npm run watch:test` while developing. Have fun! :)

## Editor setup

Please install [editorconfig plugin](http://editorconfig.org/#download) for your preferred editor.

## Committing and Pushing changes

We follow [a convention](https://github.com/stevemao/conventional-changelog-angular/blob/master/convention.md)
for commit messages. This is so that [semantic-release](https://github.com/semantic-release/semantic-release) can automatically push a new version after a successful master build on Travis. Please follow this convention for your commit messages.
