# Cohire Coding Challenge (Frontend)

## Last Updated
04-01-2021

### Introduction 
Welcome! This coding challenge is designed to explore your React & SCSS frontend skills. You will have to create a simple SPA based off the provided mockup and make a few API calls to a public web API.

### The challenge
You have to complete the test and write any necessary code so that the search page looks like this [mockup]. All the images/icons you need are already imported into this repository. 

The discover page should enable the user to search for movies as keywords are typed into the search bar. Functionality for filtering does not need to be implemented, however the filter categories should still be expandable upon clicking. On mobile devices, the navigation bar should slide in from left to right when the user clicks on the hamburger icon. 

There will also be some UI bugs that you should spot and fix. In addition, you have to add all the responsive stylesheets for the app to run smoothly on mobile devices.

Movie data can be queried via: 
- [theMovieDB]

Packages & Technologies used in the repo:
- `axios`
- `node-sass`
- `react-router-dom`
- `styled-components`

### Submission guide
Please create a git repository of your solution and send the link to your contact person once you are done.

### How we review
- **Design**: Were you able to translate the mockup into a web application that works well on various browsers and devices? Does the output match the mockup? This is the most important aspect. Weight: 50%
- **Functionality**: Does the search function work? Do the results load instantly as the user types? If the API backend has rate limiting enforced, how do you implement the aforementioned while also taking rate limiting into account? Weight: 25%
- **Code quality**: Is the code easy to understand and maintain? Is the coding style consistent with the language's best practices? Do you demonstrate a good grasp of JavaScript, especially ES6? Weight: 15%
- **Performance**: Does the UI render quickly? Are the choice of libraries etc appropriate for the web page? Weight: 10%

### Bonus points
- **Automated Tests** - Are there any automated frontend tests?
- **Documentation** - Is the README well written? Are the commit messages clear?
- **Reporting** - React Profiler report with demonstrated knowledge of reading / reporting performance data 
- **Production-readiness** - Is there proper error handling? Is the code ready to put into production? Code-Splitting?
- **Future-readiness** - React Hooks? Web workers? PWA? Client-side caching?

[mockup]: <https://cord-coding-challenges.s3-eu-west-1.amazonaws.com/frontend-test-mockups.zip>
[theMovieDB]: <https://www.themoviedb.org/documentation/api>
