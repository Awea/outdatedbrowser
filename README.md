# Outdated Browser
A small utility to identify old browsers and toggle a modal.

This repository is a copy of [burocratik/outdated-browser
](https://github.com/burocratik/outdated-browser#develop) adapted to works with webpack without extra configuration (exemple: exports-loader).

## Installation
`npm install @awea/outdatedbrowser`

**or**

`yarn add @awea/outdatedbrowser`

## Usage example

```html
<div id="outdated">
  <a" href="http://outdatedbrowser.com/en" target="_blank">Mettre&nbsp;à&nbsp;jour&nbsp;maintenant</a>
</div>
```

```js
import outdatedBrowser from '@awea/outdatedbrowser'

let $outdated = document.querySelector('#outdated')
outdatedBrowser($outdated, 'Edge')
```
