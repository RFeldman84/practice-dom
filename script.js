
let itemNumber = 6;
document.querySelector('.insert-item-box > button').onclick = function(){
  let newLI = document.createElement('li');
  newLI.innerText = `ITEM ${itemNumber++}`;
  document.querySelector('.insert-item-box > ul').append(newLI);
  // console.log('it worked!')
}