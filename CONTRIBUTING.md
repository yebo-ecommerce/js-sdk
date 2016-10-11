# Yebo JS SDK Contributing Guide
We are always looking for improvements in this library and your contribuition is really important for us. To start contributing please follow this guide to make sure that your contribution will be usefull.

## Table of contents
* [Issue Reporting](#issue-reporting)
* [Pull Request](#pull-request)
* [Development](#development)
* [Attribution](#attribution)

# Issue Reporting
* The issue list of this repo is exclusively for bug reports and feature requests. Non-conforming issues will be closed immediately.
  * For questions please join our Slack organization and go to the channel dedicated to this library.
* Try to search for your issue, it may have already been answered or even fixed in the development branch.
* It is required that you clearly describe the steps necessary to reproduce the issue you are running into. Issues with no clear repro steps will not be triaged.
* If your issue is resolved but still open, don’t hesitate to close it. In case you found a solution by yourself, it could be helpful to explain how you fixed it.

# Pull Request
* The master branch is basically just a snapshot of the latest stable release. All development should be done in dedicated branches. Do not submit PRs against the master branch.
  * We use the branching model [GitFlow](https://datasift.github.io/gitflow/IntroducingGitFlow.html), feel free to create dedicated branchs for your work such as `feature/new-feature`, `hotfix/bug`.
* It's OK to have multiple small commits as you work on the PR - we will let GitHub automatically squash it before merging.
* Make sure `npm test` passes. (see development setup)
* If adding new feature:
  * Add accompanying test case.
  * Provide convincing reason to add this feature. Ideally you should open a suggestion issue first and have it greenlighted before working on it.
* If fixing a bug:
  * Provide detailed description of the bug in the PR.
  * Add appropriate test coverage if applicable.

# Development
You will need the Node.js version 6+, this library does not have any native dependency.

## After cloned the repo you will need to install the dependencies with `npm install`

## Important NPM scripts:
* `npm test` - Test the library
* `npm build` - Generate the `dist/` folder with the compiled files.

## If you want to use docker:
* `docker run --rm -v $(PWD):/sdk -w /sdk node npm install` - To install the dependencies
* `docker run --rm -v $(PWD):/sdk -w /sdk node npm test` - To to run the tests

# Attribution
This Contributing Guide is based on the Contribution Guide of [Vue.js](https://github.com/vuejs/vue/) that can be found [here](https://github.com/vuejs/vue/blob/dev/.github/CONTRIBUTING.md).
