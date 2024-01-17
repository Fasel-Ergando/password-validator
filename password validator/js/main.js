const userInput = document.querySelector('.userInput');
const openEyes = document.querySelector('.svg-openEyes svg');
const closeEyes = document.querySelector('.svg-closeEyes svg');
const lengthConstraint = document.querySelector('.lengthConstraint');
const numConstraint = document.querySelector('.numConstraint');
const lowercaseConstraint = document.querySelector('.lowercaseConstraint');
const uppercaseConstraint = document.querySelector('.uppercaseConstraint');
const symbolConstraint = document.querySelector('.symbolConstraint');

//Password display toggle
function changeInputType() {
  userInput.type = (userInput.type === 'text')?
  'password':
  'text';
}

openEyes.addEventListener('click', (e) => {
  openEyes.classList.toggle('display-none');
  closeEyes.classList.toggle('display-none');
  changeInputType();
});

closeEyes.addEventListener('click', (e) => {
  closeEyes.classList.toggle('display-none');
  openEyes.classList.toggle('display-none');
  changeInputType();
});

//REGEX PATTERNS
const lengthRegex = /[\w ]{8,}/g;
const numRegex = /(\d){1,}/g;
const lowercaseRegex = /([a-z]{1,})/g;
const uppercaseRegex = /[A-Z]{1,}/g;
const symbolRegex = /[!@#$%^&*()\-_+=[\]{}|;:'<>,.?/]{1,}/;

//Check requirements when user inputs text
userInput.addEventListener('input', (e) => {
  let userPassword = userInput.value;
  lengthRegex.lastIndex = 0;
  numRegex.lastIndex = 0;
  lowercaseRegex.lastIndex = 0;
  uppercaseRegex.lastIndex = 0;
  symbolRegex.lastIndex = 0;
    
  if (lengthRegex.test(userPassword)) {
    lengthConstraint.classList.add('matched');
  } else {
    lengthConstraint.classList.remove('matched');
  }
  
  if (numRegex.test(userPassword)) {
    numConstraint.classList.add('matched');
  } else {
    numConstraint.classList.remove('matched');
  }
  
  if (lowercaseRegex.test(userPassword)) {
    lowercaseConstraint.classList.add('matched');
  } else {
    lowercaseConstraint.classList.remove('matched');
  }
  
  if (uppercaseRegex.test(userPassword)) {
    uppercaseConstraint.classList.add('matched')
  } else {
    uppercaseConstraint.classList.remove('matched');
  }

  if (symbolRegex.test(userPassword)) {
    symbolConstraint.classList.add('matched');
  } else {
    symbolConstraint.classList.remove('matched');
  }
});
