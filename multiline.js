const fruitList = 
  "<ul>" +
    "<li>Kiwi</li>" +
    "<li>Lime</li>" +
    "<li>Pineapple</li>" +
  "</ul>";

const vegetableList = `
  <ul>
    <li>Cilantro</li>
    <li>Pepper</li>
    <li>Carrot</li>
  </ul>
`;

document.querySelector('.fruits').innerHTML = fruitList;
document.querySelector('.vegetables').innerHTML = vegetableList;
