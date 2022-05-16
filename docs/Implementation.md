# Implementation steps 

```bash
mkdir app
ng new chaincompare -p cc --directory app
# with routing and scss
cd app
ng add @ng-bootstrap/ng-bootstrap
npm install bootstrap@5.1.3

ng add @fortawesome/angular-fontawesome
```

add to angular.json:

```json
  "scripts": [
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
  ],
```

add to styles.css:

```css
@import 'assets/variables';

/* Importing Bootstrap SCSS file. */
@import '~bootstrap/scss/bootstrap';
```

## update angular

```bash
ng update @angular/cli @angular/core
```

## add components

```bash
ng g c header
```

## add data grid

<https://ag-grid.com/angular-data-grid/getting-started/>

```bash
npm install --save ag-grid-community ag-grid-angular
npm install
```

## build json-concat

```bash
npm install json-concat --save
```