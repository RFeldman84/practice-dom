
let itemNumber = 6;
document.querySelector('.insert-item-box > button').onclick = function(){
  let newLI = document.createElement('li');
  newLI.innerText = `ITEM ${itemNumber++}`;
  document.querySelector('.insert-item-box > ul').appendChild(newLI); // for some reason .append also works here, even though it's a jQuery method

  // console.log('it worked!')
}