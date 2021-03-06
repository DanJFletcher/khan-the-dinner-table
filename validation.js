/*******************
 * Regex Checks
 * *****************/
var regex = [
        {
            // used for checking unclosed <td> tags - this should pass.
            re: /(?=<td>).*(?=<td>).*(?=<td>)/
        }
    ];
    

staticTest($._("Add rows of meals"), function() {
    var result = null;
    var descrip = $._("This is a webpage to show the dinner menu for a restaurant. We've created the initial table with three columns for the meal, ingredients, and price. Now, add three rows of data to the table, one row for each meal.");
    
    var displayP = "<tbody>\n  <_>\n    <_>...</_>\n    <_>...</_>\n    <_>...</_>\n  </_>\n</tbody>";
    
    var addedRowsP = {'tbody tr:not(:empty)': 3};
    
    // we only check for one <td> to be pressent so that we can give the grader a passing
    // object. 
    // the count is checked along with the regex so we can pass unclosed <td> tags.
    // - Dan Fletcher (https://github.com/DanJFletcher)
    var addedCellsP = 'tbody tr td:not(:empty)';
    
    result = allPass(htmlMatch(addedRowsP), htmlMatch(addedCellsP));
    
    var addedCellsNotInRowP = {'thead tr td:not(:empty)': 9};
    var addedCellsNotInRow2P = {'thead tr th:not(:empty)': 9};
    var addedOneRowP = {'tbody tr td:not(:empty)': 3};
    var multipleTBodysP = {'table tbody': 2};
    var headerCellsInTBodyP = 'tbody th';
    var multipleHeadsP = {'table thead': 2};
    var tableTBodyP    = 'table tbody';
    var rowsNotInP    = 'table > tr';
    var cellsNotInRowP     = 'table tbody > td';
    var cellsNotInRow2P    = 'table > td';
    var cellsNotInRow3P     = 'table thead > td';
    
    // detect changes to <thead>
    var theadP = '<thead><tr><th>Meal</th><th>Ingredients</th><th>Price</th></tr></thead>';
    var changedthead = $doc.context.body.innerHTML.replace( /\n/g, " " ).split( " ").join("").indexOf(theadP) === -1;
    console.log($doc.context.body.innerHTML.replace( /\n/g, " " ).split( " ").join("").indexOf(theadP));
     
    if (fails(result)) {
        if (changedthead) {
            result = fail($._("It looks like you changed the contents of the `<thead>`. You shouldn't have to change anything in there. Remember, when you add data for a table, it goes inside the `<tbody>`. You can also press the \"Start Over\" button if you have to."));
        } else if (htmlMatches(headerCellsInTBodyP)) {
            result = fail($._("You're using <th> cells inside your <tbody> rows, which isn't correct. Do you remember the other tag that you're meant to use for the cells inside the <tbody>? Hint: you're storing 'tabular data' in them."));
        } else if (htmlMatches(addedOneRowP)) {
            result = fail($._("Nice! Make sure you add at least three rows."));
        }
    } 
    if (htmlMatches(multipleTBodysP)) {
        result = fail($._("You should only have one <tbody> tag inside a <table> tag, and all your <tr>s go inside that single <tbody>."));
    } else if (htmlMatches(multipleHeadsP)) {
        result = fail($._("You should only have one <thead> tag inside a <table> tag, and it should contain only the header rows. The <tbody> tag should contain the data rows."));
    } else if (htmlMatches(cellsNotInRowP) || htmlMatches(cellsNotInRow2P) || htmlMatches(cellsNotInRow3P)) {
        result = fail($._("It looks like you have <td> tags that aren't inside a <tr>?"));
    } else if (htmlMatches(rowsNotInP)) {
        result = fail($._("Each of your <tr> tags should be inside either a <thead> or a <tbody>, depending if they are header rows or body rows."));        
    }
    if (passes(result)) {
        if (regex[0].re.test($doc.context.body.innerHTML) && htmlMatches({"tr td": 9})) {
            result = pass(); 
        } else {
            result = fail();
        }
    }
    
    assertMatch(result, descrip, displayP);
});
