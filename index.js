
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {

  ls = document.querySelector('#grand-node')
  return ls


}

function increaseRankBy(n) {

  const lis = document.getElementById('app').querySelectorAll('.ranked-list')

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + 1).toString()
  }


}
