
function List(){
   
    const fruits = [{id: 1, name: "apples", calories: 95},
                    {id: 2, name: "banana", calories: 45},
                    {id: 3, name: "orange", calories: 105},
                    {id: 4, name: "coconut", calories: 150},
                    {id: 5, name: "pineapple", calories: 37}];
    
   // fruits.sort((a , b) => a.name.localeCompare(b.name));   //ALPHABATICAL
   // fruits.sort((a , b) => b.name.localeCompare(a.name));   // REVERSE ALPHABATICAL

   // fruits.sort((a , b) => a.calories - b.calories); // NUMERIC
    fruits.sort((a , b) => b.calories - a.calories); // REVERSE NUMERIC

    const listItems = fruits.map(fruit => <li key={fruit.id}>
                                              {fruit.name}: &nbsp;
                                              <b>{fruit.calories}</b></li>);

    return(<ol>{listItems}</ol>);
}

export default List 