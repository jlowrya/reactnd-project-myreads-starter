# MyReads

Welcome to my MyReads project. MyReads is a [React](https://reactjs.org/) application that allows users to keep track of what books they have read, want to read, or are currently reading.

The project is based on the project defined by the [Udacity React NanoDegree course](https://www.udacity.com/course/react-nanodegree--nd019), the repository for which can be found [here](https://github.com/udacity/reactnd-project-myreads-starter)

## Quickstart
### Prerequisites
In order to run this code you will need [NodeJS](https://nodejs.org/en/), and the [Yarn](https://yarnpkg.com/en/) package manager.

### Instructions to run:
1. Clone the [repository](https://github.com/jlowrya/reactnd-project-myreads-starter)
2. CD into the project folder
3. Run yarn install
4. Run yarn start

### Example Install
```
$ git clone https://github.com/jlowrya/reactnd-project-myreads-starter.git
$ cd reactnd-project-myreads-starter/
$ yarn Install
$ yarn start
```

## Style guidelines
### Imports
When importing packages or other files, please separate the package imports from component imports, with the package imports being higher on the page than the component ones. See below for an example.

#### Example

```
//package imports first, at the top
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

//Component imports second, below the package imports
import Header from './Header'
import BookCase from './BookCase';
```
