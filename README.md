# Covid-19 Tracker

This is a simple React app to track the COVID-19 cases from public APIs. It is modeled from the tutorial from the Javascript Mastery youtube channel.

The code is modeled very closely after the tutorial (which I used as a guide). I did fix a few bugs and clean up a few things.

## Live Demo

You can see a live demo of the site on https://react-covid19-cases-tracker.netlify.app/.

## Tutorial

Video: https://www.youtube.com/watch?v=khJlrj3Y6Ls

Code: https://github.com/adrianhajdin/project_corona_tracker

## About the data sources

The data is fetched from two primary endpoints:

A.) [Mathdroid Covid-19 API](https://github.com/mathdroid/covid-19-api) which is used to fetch the majority of the data. Everything from global data to per-country breakdowns.

B.) For a daily breakdown of data in the USA, instead we use [Covidtracking.com API](https://covidtracking.com/data/api/). This enables the line chart plot for `US`.

## Building / Running

1. Run `npm install` to install all of the dependencies.

2. Run `npm start` to run the webpage locally.

## Deploying to Netlify

To host a version of this project on the web, you can simply use [Netlify](https://app.netlify.com/).

Sign up for an account (such as linking your Github) and then follow their instructions to deploy
