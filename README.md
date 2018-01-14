## README - angularjs-exportcvs

### Project requirement
   - npm > 3.x.x

### Environment setup

  - `git clone https://github.com/pratikq23/angularjs-exportcsv`
  - `cd angularjs-exportcsv`
  - `npm install`
  - `npm run`

### To use this directive in your code

  - 1. Copy app/directive/exportToCsv.js to your directives folder
  - 2. Add this to your module
  ```javascript
  angular.module('myApp', [
    'tableCSV',
  ]).
  ```
  - 3. Include this to your index.html or import the directive, whatever is your project architecture:
  ```html
  <script src='directive/exportToCsv.js'></script>
  ```
  - 4. Add this to a button tag:
  ```html
  <button export-to-csv>Generate Report</button>
  ```


Enjoy the export file functionality