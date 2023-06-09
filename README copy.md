# React Template: coax-react-js

## Description
This is a custom React template, coax-react-js, which comes pre-configured with the essential settings for a quick start of a new React project.


# Quick Start

To use this template, you need to run the following command:

```console
npx create-react-app "APP_NAME" --template coax-react-js
```
Please replace "APP_NAME" with the name of your new project.

# Initial Setup
After installation, you need to update a few configuration files:

`sonar-project.properties`

Set the `sonar.projectName` property to your project's name.

```console
sonar.projectName=APP_NAME
```

`CHANGELOG.md`

Provide the initial project name and description at the top of the `CHANGELOG.md` file. It might look something like this:

```console
# APP_NAME

## Project description
add your project description here
```

# Features
This template contains the following features:
 - Router
 - tests
 - lint
 - prettier
 - pre-commit
 - git actions
 - sonar
