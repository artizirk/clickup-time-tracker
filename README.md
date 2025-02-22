<p align="center"><a href="https://github.com/gwleuverink/clickup-time-tracker/releases" target="_blank"><img src="./build/icons/256x256.png" width="120" style="filter: drop-shadow(0px 6px 6px #e2e2e2)"></a></p>

<p align="center">A tool for tracking time on Clickup tasks</p>

<p align="center">Easily drag & resize events around on a calendar. Changes are synced with ClickUp in real time!</p>

<br />

<p align="center">
<a href="https://github.com/gwleuverink/clickup-time-tracker/actions/workflows/build.yml"><img src="https://github.com/gwleuverink/clickup-time-tracker/actions/workflows/build.yml/badge.svg" alt="Build workflow"></a>
<a href="https://github.com/gwleuverink/clickup-time-tracker/releases/latest"><img alt="GitHub all releases" src="https://img.shields.io/github/downloads/gwleuverink/clickup-time-tracker/total"></a>
<a href="https://github.com/sponsors/gwleuverink"><img alt="GitHub Sponsors" src="https://img.shields.io/github/sponsors/gwleuverink"></a>
</p>

<hr />

## What does it do

* Minimal context switching
* Intuitive drag & drop UI
* Orderly Week calendar view
* Great overview of gaps in your tracked hours
* Convenient keyboard shortcuts
* Changes synced with ClickUp in real-time
* Lower your cortisol levels at the end of the workday by 30% (results may vary)

<p align="center"><img src="./docs/img/screenshot.png" width="620"></p>

## Installation
You can download the latest release for your platform of choice from the [releases page](https://github.com/gwleuverink/clickup-time-tracker/releases)

This app is not signed & notarized for MacOS. This means you will get a notification that you can't open untrusted apps.

You can circumvent this by holding `option` and right click the app, then click `open`. After doing this once you can open the app normally.

### Setup credentials
When starting the app for the first time you are asked to fill in some credentials. You'll need these two:

#### ClickUp Access token
Log in to ClickUp & click on your profile pic in the bottom left. Then click `Apps`.

In the next screen you'll see a button to generate a API token. Do that and paste the output in the Time Tracker app's preferences.

#### ClickUp Team ID
You can find your team's ID in the url after you log in to your ClickUp dashboard. It's the first part after the domain. For example if you see `app.clickup.com/1234567`, then your team ID is `1234567`
## Contributions
If you'd like to contribute please check out the getting started doc [over here](./docs/development.md)
