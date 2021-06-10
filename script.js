'use strict';

const account1 = {
  username: 'Wasif Alam',
  password: 9999,
};

const account2 = {
  username: 'Mukta Mondal',
  password: 7777,
};

const account3 = {
  username: 'Iftikar Ahmed',
  password: 5555,
};

const account4 = {
  username: 'John Doe',
  password: 1111,
};

const accounts = [account1, account2, account3, account4];

// Elements
const inputUser = document.querySelector('.form__username');
const inputPassword = document.querySelector('.form__password');
const form = document.querySelector('.form');
const messageBox = document.querySelector('.message');
const btnLogin = document.querySelector('.form__btn');
const messageName = document.querySelector('.message__name');
const logout = document.querySelector('.message__logout');
const invalidText = document.querySelector('.form__invalid--text');
const hideIcon = document.querySelector('.form__icon--hide');
const unhideIcon = document.querySelector('.form__icon--unhide');

// GETTING ACCOUNT FUNCTION
const getAccount = function () {
  const currentAccount = accounts.find(
    (acc) => acc.username === inputUser.value
  );

  if (currentAccount?.password === +inputPassword.value) {
    messageBox.classList.remove('hidden');
    form.classList.add('hidden');
  } else {
    invalidText.style.opacity = 1;
  }

  setTimeout(() => {
    invalidText.style.opacity = 0;
  }, 2000);
  messageName.textContent = `${currentAccount?.username}`;

  if (inputUser.value === '' || inputPassword.value === '') {
    alert(`Error: Username or Password can't be empty!`);
    invalidText.style.opacity = 0;
  }
};

// LOGIN WITH CLICK
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  getAccount();
});

// LOGIN WITH ENTER BUTTON
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    getAccount();
  }
});

// UNHIDE PASSWORD
unhideIcon.addEventListener('click', function () {
  if (inputPassword.type === 'password') {
    inputPassword.type = 'text';
    unhideIcon.classList.add('hidden');
    hideIcon.classList.remove('hidden');
  }
});

// HIDE PASSWORD
hideIcon.addEventListener('click', function () {
  if (inputPassword.type === 'text') {
    inputPassword.type = 'password';
    unhideIcon.classList.remove('hidden');
    hideIcon.classList.add('hidden');
  }
});

// LOGOUT
logout.addEventListener('click', function () {
  messageBox.classList.add('hidden');
  form.classList.remove('hidden');

  inputUser.value = '';
  inputPassword.value = '';
  invalidText.style.opacity = 0;
});
