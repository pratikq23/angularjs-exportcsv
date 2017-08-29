project requirement
npm > 3.x.x
git clone https://github.com/pratikq23/angularjs-exportcsv.git

cd angularjs-exportcsv

npm install

npm start 



To use this directive in your code
1.copy exportToCsv.js to your folder

2.Add this to ypur module 
angular.module('myApp', [
  'tableCSV',
]).

3.Include this <script src='directive/exportToCsv.js'></script> index.html

4.Add tag <button export-to-csv>Generate Report</button>


Enjoy the export file functionality