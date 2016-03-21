[{
    code: "<table><tbody><tr><th>Pasta</th><td>noodles</td><td>10 dollars</td></tr><tr><td>Pasta</td><td>noodles</td><td>10 dollars</td></tr><tr><td>Pasta</td><td>noodles</td><td>10 dollars</td></tr></tbody></table>",
    steps: ["fail"]
},{
    code: "<table><thead><tr><th>Meal</th><th>Ingredients</th><th>Price</th></tr></thead><tbody><tr><td>Pasta</td><td>noodles</td><td>10 dollars</td></tr><tr><td>Pasta</td><td>noodles</td><td>10 dollars</td></tr><tr><td>Pasta</td><td>noodles</td><td>10 dollars</td></tr></tbody></table>",
    steps: ["pass"]
},{
    code: "<table><thead><tr><th>Meal</th><th>Ingredients</th><th>Price</th></tr></thead><tbody><tr><td>Pasta</td><td>noodles</td><td>10 dollars</td></tr></tbody></table>",
    steps: ["Nice! Make sure you add at least three rows."]
},{
    code: "<table><thead><td>Pasta</td><td>noodles</td><td>10 dollars</td><tr><td>Pasta</td><td>noodles</td><td>10 dollars</td></tr><tr><td>Pasta</td><td>noodles</td><td>10 dollars</td></tr></thead></table>",
    steps: ["It looks like you have <td> tags that aren't inside a <tr>?"]
}, {
    code: "<table><tbody><td>Pasta</td><td>noodles</td><td>10 dollars</td><tr><td>Pasta</td><td>noodles</td><td>10 dollars</td></tr><tr><td>Pasta</td><td>noodles</td><td>10 dollars</td></tr></tbody></table>",
    steps: ["It looks like you have <td> tags that aren't inside a <tr>?"]
},{
    code: "<table><tr><td>Pasta</td><td>noodles</td><td>10 dollars</td></tr><tr><td>Pasta</td><td>noodles</td><td>10 dollars</td></tr><tr><td>Pasta</td><td>noodles</td><td>10 dollars</td></tr><tbody></tbody></table>",
    steps: ["Each of your <tr> tags should be inside either a <thead> or a <tbody>, depending if they are header rows or body rows."]
},
{
    code: "<table><thead><tr><th>Meal</th><th>Ingredients</th><th>Price</th></tr></thead><tbody><tr><th>Pasta</th><th>noodles</th><th>10 dollars</th></tr><tr><th>Pasta</th><th>noodles</th><th>10 dollars</th></tr><tr><th>Pasta</th><th>noodles</th><th>10 dollars</th></tr></tbody></table>",
    steps: ["You're using <th> cells inside your <tbody> rows, which isn't correct. Do you remember the other tag that you're meant to use for the cells inside the <tbody>? Hint: you're storing 'tabular data' in them."]
},
{
    code: "<table><tbody><tr><td>Pasta</td><td>noodles</td><td>10 dollars</td></tr></tbody><tbody><tr><td>Pasta</td><td>noodles</td><td>10 dollars</td></tr><tr><td>Pasta</td><td>noodles</td><td>10 dollars</td></tr></tbody></table>",
    steps: ["You should only have one <tbody> tag inside a <table> tag, and all your <tr>s go inside that single <tbody>."]
},
{
    code: "<table><thead><tr><td>Pasta</td><td>noodles</td><td>10 dollars</td></tr></thead><thead><tr><td>Pasta</td><td>noodles</td><td>10 dollars</td></tr><tr><td>Pasta</td><td>noodles</td><td>10 dollars</td></tr></thead></table>",
    steps: ["You should only have one <thead> tag inside a <table> tag, and it should contain only the header rows. The <tbody> tag should contain the data rows."]
},
{
    code: "<table><thead><tr><th>Pasta</th><th>noodles</th><th>10 dollars</th></tr><tr><th>Pasta</th><th>noodles</th><th>10 dollars</th></tr><tr><th>Pasta</th><th>noodles</th><th>10 dollars</th></tr></thead></table>",
    steps: ["It looks like you changed the contents of the `<thead>`. You shouldn't have to change anything in there. Remember, you can press the \"Start Over\" button if you have to."]
},
{
    code: "<table><thead><tr><td>Pasta</td><td>noodles</td><td>10 dollars</td></tr><tr><td>Pasta</td><td>noodles</td><td>10 dollars</td></tr><tr><td>Pasta</td><td>noodles</td><td>10 dollars</td></tr></thead></table>",
    steps: ["It looks like you changed the contents of the `<thead>`. You shouldn't have to change anything in there. Remember, you can press the \"Start Over\" button if you have to."]
}, 
{
    code: "<table><thead></thead><tbody></tbody></table>",
    steps: ["It looks like you changed the contents of the `<thead>`. You shouldn't have to change anything in there. Remember, you can press the \"Start Over\" button if you have to."]
}]