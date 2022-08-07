var regStatus = true;

// START CREATING END STYLING
var body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = '#2eb1ac';
body.style.fontFamily = '"Helvetica Neue", Helvetica, Arial, sans-serif';
body.style.color = '#333';
body.style.lineHeight = '1';
body.style.margin = '0';
body.style.padding = '0';
body.style.overflow = 'hidden';

var elContainer = document.createElement('div');
body.appendChild(elContainer);
elContainer.style.maxWidth = '1150px';
elContainer.style.margin = '0 auto';
elContainer.style.padding = '0 10px';
elContainer.style.display = 'flex';
elContainer.style.justifyContent = 'center';
elContainer.style.alignItems = 'center';
elContainer.style.height = '100vh';
elContainer.style.position = 'relative';

//WELCOME BOX

var elWelcomeBox = document.createElement('div');
elContainer.appendChild(elWelcomeBox);
elWelcomeBox.style.position = 'absolute';
elWelcomeBox.style.width = '600px';
elWelcomeBox.style.height = '400px';
elWelcomeBox.style.display = 'flex';
elWelcomeBox.style.justifyContent = 'center';
elWelcomeBox.style.alignItems = 'center';
// elWelcomeBox.style.display = 'none';

var elWelcomeBoxInner = document.createElement('div');
elWelcomeBox.appendChild(elWelcomeBoxInner);
elWelcomeBoxInner.style.width = '100%';

var elWelcomeBoxTitle = document.createElement('h2');
elWelcomeBoxInner.appendChild(elWelcomeBoxTitle);
elWelcomeBoxTitle.style.fontSize = '30px';
elWelcomeBoxTitle.style.margin = '0';
elWelcomeBoxTitle.style.padding = '0';
elWelcomeBoxTitle.style.textAlign = 'center';
elWelcomeBoxTitle.style.color = '#f8f8f8';
elWelcomeBoxTitle.textContent = 'Assalomu alaykum';
elWelcomeBoxTitle.style.textShadow = '0 0 5px #fffff5';


var elWelcomeBoxParagrph = document.createElement('p');
elWelcomeBoxInner.appendChild(elWelcomeBoxParagrph);
elWelcomeBoxParagrph.style.fontSize = '17px';
elWelcomeBoxParagrph.style.margin = '0';
elWelcomeBoxParagrph.style.padding = '0';
elWelcomeBoxParagrph.style.textAlign = 'center';
elWelcomeBoxParagrph.style.color = '#e9e9e9';
elWelcomeBoxParagrph.textContent = 'iltimos ro\'yhatdan o\'ting , yoki shahsiy hisobingizga kiring';
elWelcomeBoxParagrph.style.width = '100%';

var elWelcomeBoxButtonBox = document.createElement('div');
elWelcomeBoxInner.appendChild(elWelcomeBoxButtonBox);
elWelcomeBoxButtonBox.style.display = 'flex';
elWelcomeBoxButtonBox.style.justifyContent = 'center';
elWelcomeBoxButtonBox.style.alignItems = 'center';
elWelcomeBoxButtonBox.style.marginTop = '10px';
elWelcomeBoxButtonBox.style.position = 'relative';

                                                           //Sign Up BTn

var elSignInButton = document.createElement('button');
elWelcomeBoxButtonBox.appendChild(elSignInButton);
elSignInButton.textContent = `Ro'yhatdan o'tish`;
elSignInButton.style.marginTop = '0';
elSignInButton.type = 'button';
elSignInButton.style.backgroundColor = '#2ca09c';
elSignInButton.style.border = 'none';
elSignInButton.style.borderRadius = '5px';
elSignInButton.style.color = '#fff3e0';
elSignInButton.style.textShadow = '0 0 7px #d6d6d6';
elSignInButton.style.fontSize = '1.2em';
elSignInButton.style.boxShadow = '0 0 7px #d6d6d6';
elSignInButton.style.padding = '6px 12px';
elSignInButton.style.cursor = 'default';
elSignInButton.onmouseover = function() {
  elSignInButton.style.boxShadow = '0 0 7px #d6d6d6';
}
elSignInButton.onmouseleave = function() {
  elSignInButton.style.boxShadow = '0 0 7px #d6d6d6';
}


var elSignUpButton = document.createElement('button');
elWelcomeBoxButtonBox.appendChild(elSignUpButton);
elSignUpButton.textContent = `Kirish`;
elSignUpButton.style.marginTop = '0';
elSignUpButton.style.marginLeft = '15px';
elSignUpButton.style.backgroundColor = 'transparent';
elSignUpButton.style.border = 'none';
elSignUpButton.style.borderRadius = '5px';
elSignUpButton.style.color = '#fff3e0';
elSignUpButton.style.textShadow = '0 0 7px #d6d6d6';
elSignUpButton.style.fontSize = '1.2em';
elSignUpButton.style.boxShadow = '0 0 7px #d6d6d6';
elSignUpButton.style.padding = '6px 12px';
elSignUpButton.style.cursor = 'pointer';
elSignUpButton.type = 'button';
elSignUpButton.onmouseover = function() {
  elSignUpButton.style.boxShadow = '0 0 15px #d6d6d6';
  elSignUpButton.style.transition = 'all 0.1s ease-in-out';
}
elSignUpButton.onmouseleave = function() {
  elSignUpButton.style.boxShadow = '0 0 7px #d6d6d6';
  elSignUpButton.style.transition = 'all 0.1s ease-in-out';
}

elSignUpButton.onclick = function() {
  elSignInButton.style.backgroundColor = 'transparent';
  elSignInButton.style.cursor = 'pointer';
  elSignInButton.onmouseover = function() {
    elSignInButton.style.boxShadow = '0 0 15px #d6d6d6';
    elSignInButton.style.transition = 'all 0.1s ease-in-out';
  }
  elSignInButton.onmouseleave = function() {
    elSignInButton.style.boxShadow = '0 0 7px #d6d6d6';
    elSignInButton.style.transition = 'all 0.1s ease-in-out';
  }

  elSignUpButton.style.backgroundColor = '#2ca09c';
  elSignUpButton.style.cursor = 'default';
  elSignUpButton.onmouseover = function() {
    elSignUpButton.style.boxShadow = '0 0 7px #d6d6d6';
  }
  elSignUpButton.onmouseleave = function() {
    elSignUpButton.style.boxShadow = '0 0 7px #d6d6d6';
  }
  elWelcomeFormBox.style.display = 'none';
  elWelcomeFormBoxSignIN.style.display = 'flex';
  elWelcomeSecondFormBox.style.display = 'none';
  elSignInFormBoxButton.style.display = 'none';
  elWelcomeFormBtnBox.style.display = 'flex';
  elWelcomeFormBoxLastLeft.style.display = 'none';
  elWelcomeBoxBtnBoxLine.style.display = 'none';
  userNameValue = 'Otamurod';
  userLastNameValue = 'Akbarov';
  userName.textContent = userNameValue + ' ' + userLastNameValue;
  userNickName.textContent = 'asn_me';
  var balanceMain = Math.floor(Math.random() * (10000000 - 1) + 1);
  userMoney.textContent = balanceMain;
  userMoney = balanceMain;
}

elSignInButton.onclick = function() {
  elSignUpButton.style.backgroundColor = 'transparent';
  elSignUpButton.style.cursor = 'pointer';
  elSignUpButton.onmouseover = function() {
    elSignUpButton.style.boxShadow = '0 0 15px #d6d6d6';
    elSignUpButton.style.transition = 'all 0.1s ease-in-out';
  }
  elSignUpButton.onmouseleave = function() {
    elSignUpButton.style.boxShadow = '0 0 7px #d6d6d6';
    elSignUpButton.style.transition = 'all 0.1s ease-in-out';
  }

  elSignInButton.style.backgroundColor = '#2ca09c';
  elSignInButton.style.cursor = 'default';
  elSignInButton.onmouseover = function() {
    elSignInButton.style.boxShadow = '0 0 7px #d6d6d6';
  }
  elSignInButton.onmouseleave = function() {
    elSignInButton.style.boxShadow = '0 0 7px #d6d6d6';
  }

  elWelcomeFormBox.style.display = 'flex';
  elWelcomeFormBoxSignIN.style.display = 'none';
  elWelcomeSecondFormBox.style.display = 'flex';
  elSignInFormBoxButton.style.display = 'block';
  elWelcomeFormBtnBox.style.display = 'none';
  elWelcomeFormBoxLastLeft.style.display = 'block';
  elWelcomeBoxBtnBoxLine.style.display = 'block';
  userNameValue = elWelcomeFormBoxLeftFirstInput.value;
  userLastNameValue = elWelcomeFormBoxRightInput.value;
  userName.textContent = userNameValue + ' ' + userLastNameValue;
  userNickName.textContent = elWelcomeFormBoxLeftSecondInput.value.toLowerCase();
}                                                             //Sign In BTn

var elWelcomeForm = document.createElement('form');
elWelcomeBoxInner.appendChild(elWelcomeForm);
// elWelcomeForm.action = 'https://echo.htmlacademy.ru';
elWelcomeForm.method = 'post';

// sing up section

var elWelcomeFormBox = document.createElement('div');
elWelcomeForm.appendChild(elWelcomeFormBox);
elWelcomeFormBox.style.display = 'flex';
elWelcomeFormBox.style.alignItems = 'center';
elWelcomeFormBox.style.justifyContent = 'space-between';
elWelcomeFormBox.style.marginTop = '13px';
elWelcomeFormBox.style.position = 'relative';

var elWelcomeBoxButtonBoxLine = document.createElement('div');
elWelcomeFormBox.appendChild(elWelcomeBoxButtonBoxLine);
elWelcomeBoxButtonBoxLine.style.position = 'absolute';
elWelcomeBoxButtonBoxLine.style.width = '100%';
elWelcomeBoxButtonBoxLine.style.height = '1px';
elWelcomeBoxButtonBoxLine.style.backgroundColor = '#d6d6d6';
elWelcomeBoxButtonBoxLine.style.marginTop = '-70px';

var elWelcomeFormBoxLeft = document.createElement('div');
elWelcomeFormBox.appendChild(elWelcomeFormBoxLeft);

var elWelcomeFormBoxLeftTitle = document.createElement('h3');
elWelcomeFormBoxLeft.appendChild(elWelcomeFormBoxLeftTitle);
elWelcomeFormBoxLeftTitle.style.fontSize = '18px';
elWelcomeFormBoxLeftTitle.style.margin = '0';
elWelcomeFormBoxLeftTitle.style.padding = '0';
elWelcomeFormBoxLeftTitle.textContent = `Ismingizni kiriting`;
elWelcomeFormBoxLeftTitle.style.color = '#fff3e0';


var elWelcomeFormBoxLeftFirstInput = document.createElement('input');
elWelcomeFormBoxLeft.appendChild(elWelcomeFormBoxLeftFirstInput);
elWelcomeFormBoxLeftFirstInput.type = 'text';
elWelcomeFormBoxLeftFirstInput.focus();
elWelcomeFormBoxLeftFirstInput.setAttribute('maxlength', 20);
elWelcomeFormBoxLeftFirstInput.style.border = 'none';
elWelcomeFormBoxLeftFirstInput.style.borderRadius = '5px';
elWelcomeFormBoxLeftFirstInput.style.backgroundColor = 'transparent';
elWelcomeFormBoxLeftFirstInput.style.boxShadow = '0 0 7px #d6d6d6';
elWelcomeFormBoxLeftFirstInput.style.padding = '7px 12px';
elWelcomeFormBoxLeftFirstInput.style.fontSize = '1.1em';
elWelcomeFormBoxLeftFirstInput.style.marginTop = '4px';
elWelcomeFormBoxLeftFirstInput.style.outline = 'none';
elWelcomeFormBoxLeftFirstInput.style.color = '#d6d6d6';
elWelcomeFormBoxLeftFirstInput.onmousemove = function() {
  elWelcomeFormBoxLeftFirstInput.style.boxShadow = '0 0 15px #d6d6d6';
  elWelcomeFormBoxLeftFirstInput.style.transition = 'all 0.1s ease-in-out';
}
elWelcomeFormBoxLeftFirstInput.onmouseleave = function() {
  elWelcomeFormBoxLeftFirstInput.style.boxShadow = '0 0 7px #d6d6d6';
  elWelcomeFormBoxLeftFirstInput.style.transition = 'all 0.1s ease-in-out';
}
elWelcomeFormBoxLeftFirstInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    elSignInFormBoxButton.click();
  }
});


var elWelcomeFormBoxLeft = document.createElement('div');
elWelcomeFormBox.appendChild(elWelcomeFormBoxLeft);

var elWelcomeFormBoxRightTitle = document.createElement('h3');
elWelcomeFormBoxLeft.appendChild(elWelcomeFormBoxRightTitle);
elWelcomeFormBoxRightTitle.style.fontSize = '18px';
elWelcomeFormBoxRightTitle.style.margin = '0';
elWelcomeFormBoxRightTitle.style.padding = '0';
elWelcomeFormBoxRightTitle.textContent = `Familyangizni kiriting`;
elWelcomeFormBoxRightTitle.style.color = '#fff3e0';


var elWelcomeFormBoxRightInput = document.createElement('input');
elWelcomeFormBoxLeft.appendChild(elWelcomeFormBoxRightInput);
elWelcomeFormBoxRightInput.type = 'text';
elWelcomeFormBoxRightInput.setAttribute('maxlength', 20);
elWelcomeFormBoxRightInput.style.border = 'none';
elWelcomeFormBoxRightInput.style.borderRadius = '5px';
elWelcomeFormBoxRightInput.style.backgroundColor = 'transparent';
elWelcomeFormBoxRightInput.style.boxShadow = '0 0 7px #d6d6d6';
elWelcomeFormBoxRightInput.style.padding = '7px 12px';
elWelcomeFormBoxRightInput.style.fontSize = '1.1em';
elWelcomeFormBoxRightInput.style.marginTop = '4px';
elWelcomeFormBoxRightInput.style.outline = 'none';
elWelcomeFormBoxRightInput.style.transition = 'all 0.1s ease-in-out';
elWelcomeFormBoxRightInput.style.color = '#d6d6d6';
elWelcomeFormBoxRightInput.onmousemove = function() {
  elWelcomeFormBoxRightInput.style.boxShadow = '0 0 15px #d6d6d6';
  elWelcomeFormBoxRightInput.style.transition = 'all 0.1s ease-in-out';
}
elWelcomeFormBoxRightInput.onmouseleave = function() {
  elWelcomeFormBoxRightInput.style.boxShadow = '0 0 7px #d6d6d6';
  elWelcomeFormBoxRightInput.style.transition = 'all 0.1s ease-in-out';
}
elWelcomeFormBoxRightInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    elSignInFormBoxButton.click();
  }
});

// second section

var elWelcomeSecondFormBox = document.createElement('div');
elWelcomeForm.appendChild(elWelcomeSecondFormBox);
elWelcomeSecondFormBox.style.display = 'flex';
elWelcomeSecondFormBox.style.alignItems = 'center';
elWelcomeSecondFormBox.style.justifyContent = 'space-between';
elWelcomeSecondFormBox.style.marginTop = '17px';
elWelcomeSecondFormBox.style.position = 'relative';

var elWelcomeBoxButtonBoxLine = document.createElement('div');
elWelcomeSecondFormBox.appendChild(elWelcomeBoxButtonBoxLine);
elWelcomeBoxButtonBoxLine.style.position = 'absolute';
elWelcomeBoxButtonBoxLine.style.width = '100%';
elWelcomeBoxButtonBoxLine.style.height = '1px';
elWelcomeBoxButtonBoxLine.style.backgroundColor = '#d6d6d6';
elWelcomeBoxButtonBoxLine.style.marginTop = '-70px';

var elWelcomeFormBoxLeft = document.createElement('div');
elWelcomeSecondFormBox.appendChild(elWelcomeFormBoxLeft);

var elWelcomeFormBoxLeftTitle = document.createElement('h3');
elWelcomeFormBoxLeft.appendChild(elWelcomeFormBoxLeftTitle);
elWelcomeFormBoxLeftTitle.style.fontSize = '18px';
elWelcomeFormBoxLeftTitle.style.margin = '0';
elWelcomeFormBoxLeftTitle.style.padding = '0';
elWelcomeFormBoxLeftTitle.textContent = `Nikingizni kiriting`;
elWelcomeFormBoxLeftTitle.style.color = '#fff3e0';


var elWelcomeFormBoxLeftSecondInput = document.createElement('input');
elWelcomeFormBoxLeft.appendChild(elWelcomeFormBoxLeftSecondInput);
elWelcomeFormBoxLeftSecondInput.type = 'text';
elWelcomeFormBoxLeftSecondInput.setAttribute('maxlength', 20);
elWelcomeFormBoxLeftSecondInput.style.border = 'none';
elWelcomeFormBoxLeftSecondInput.style.borderRadius = '5px';
elWelcomeFormBoxLeftSecondInput.style.backgroundColor = 'transparent';
elWelcomeFormBoxLeftSecondInput.style.boxShadow = '0 0 7px #d6d6d6';
elWelcomeFormBoxLeftSecondInput.style.padding = '7px 12px';
elWelcomeFormBoxLeftSecondInput.style.fontSize = '1.1em';
elWelcomeFormBoxLeftSecondInput.style.marginTop = '4px';
elWelcomeFormBoxLeftSecondInput.style.outline = 'none';
elWelcomeFormBoxLeftSecondInput.style.transition = 'all 0.1s ease-in-out';
elWelcomeFormBoxLeftSecondInput.style.color = '#d6d6d6';
elWelcomeFormBoxLeftSecondInput.toLowerCase;
elWelcomeFormBoxLeftSecondInput.onmousemove = function() {
  elWelcomeFormBoxLeftSecondInput.style.boxShadow = '0 0 15px #d6d6d6';
  elWelcomeFormBoxLeftSecondInput.style.transition = 'all 0.1s ease-in-out';
}
elWelcomeFormBoxLeftSecondInput.onmouseleave = function() {
  elWelcomeFormBoxLeftSecondInput.style.boxShadow = '0 0 7px #d6d6d6';
  elWelcomeFormBoxLeftSecondInput.style.transition = 'all 0.1s ease-in-out';
}
elWelcomeFormBoxLeftSecondInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    elSignInFormBoxButton.click();
  }
});

var elWelcomeFormBoxLeft = document.createElement('div');
elWelcomeSecondFormBox.appendChild(elWelcomeFormBoxLeft);

var elWelcomeFormBoxLeftTitle = document.createElement('h3');
elWelcomeFormBoxLeft.appendChild(elWelcomeFormBoxLeftTitle);
elWelcomeFormBoxLeftTitle.style.fontSize = '18px';
elWelcomeFormBoxLeftTitle.style.margin = '0';
elWelcomeFormBoxLeftTitle.style.padding = '0';
elWelcomeFormBoxLeftTitle.textContent = `Parolingizni kiriting`;
elWelcomeFormBoxLeftTitle.style.color = '#fff3e0';


var elWelcomeFormBoxRightSecondInput = document.createElement('input');
elWelcomeFormBoxLeft.appendChild(elWelcomeFormBoxRightSecondInput);
elWelcomeFormBoxRightSecondInput.type = 'password';
elWelcomeFormBoxRightSecondInput.setAttribute('maxlength', 20);
elWelcomeFormBoxRightSecondInput.style.border = 'none';
elWelcomeFormBoxRightSecondInput.style.borderRadius = '5px';
elWelcomeFormBoxRightSecondInput.style.backgroundColor = 'transparent';
elWelcomeFormBoxRightSecondInput.style.boxShadow = '0 0 7px #d6d6d6';
elWelcomeFormBoxRightSecondInput.style.padding = '7px 12px';
elWelcomeFormBoxRightSecondInput.style.fontSize = '1.1em';
elWelcomeFormBoxRightSecondInput.style.marginTop = '4px';
elWelcomeFormBoxRightSecondInput.style.outline = 'none';
elWelcomeFormBoxRightSecondInput.style.transition = 'all 0.1s ease-in-out';
elWelcomeFormBoxRightSecondInput.style.color = '#d6d6d6';
elWelcomeFormBoxRightSecondInput.onmousemove = function() {
  elWelcomeFormBoxRightSecondInput.style.boxShadow = '0 0 15px #d6d6d6';
  elWelcomeFormBoxRightSecondInput.style.transition = 'all 0.1s ease-in-out';
}
elWelcomeFormBoxRightSecondInput.onmouseleave = function() {
  elWelcomeFormBoxRightSecondInput.style.boxShadow = '0 0 7px #d6d6d6';
  elWelcomeFormBoxRightSecondInput.style.transition = 'all 0.1s ease-in-out';
}
elWelcomeFormBoxRightSecondInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    elSignInFormBoxButton.click();
  }
});

//btn section

var elWelcomeBtnFormBox = document.createElement('div');
elWelcomeForm.appendChild(elWelcomeBtnFormBox);
elWelcomeBtnFormBox.style.display = 'flex';
elWelcomeBtnFormBox.style.alignItems = 'center';
elWelcomeBtnFormBox.style.justifyContent = 'space-between';
elWelcomeBtnFormBox.style.marginTop = '17px';
elWelcomeBtnFormBox.style.position = 'relative';

var elWelcomeBoxBtnBoxLine = document.createElement('div');
elWelcomeBtnFormBox.appendChild(elWelcomeBoxBtnBoxLine);
elWelcomeBoxBtnBoxLine.style.position = 'absolute';
elWelcomeBoxBtnBoxLine.style.width = '100%';
elWelcomeBoxBtnBoxLine.style.height = '1px';
elWelcomeBoxBtnBoxLine.style.backgroundColor = '#d6d6d6';
elWelcomeBoxBtnBoxLine.style.marginTop = '-70px';

var elWelcomeFormBoxLastLeft = document.createElement('div');
elWelcomeBtnFormBox.appendChild(elWelcomeFormBoxLastLeft);

var elWelcomeFormBoxLeftTitle = document.createElement('h3');
elWelcomeFormBoxLastLeft.appendChild(elWelcomeFormBoxLeftTitle);
elWelcomeFormBoxLeftTitle.style.fontSize = '18px';
elWelcomeFormBoxLeftTitle.style.margin = '0';
elWelcomeFormBoxLeftTitle.style.padding = '0';
elWelcomeFormBoxLeftTitle.textContent = `Pulingizni kiriting (sonda)`;
elWelcomeFormBoxLeftTitle.style.color = '#fff3e0';


var elWelcomeFormBoxLeftLastInput = document.createElement('input');
elWelcomeFormBoxLastLeft.appendChild(elWelcomeFormBoxLeftLastInput);
elWelcomeFormBoxLeftLastInput.type = 'number';
elWelcomeFormBoxLeftLastInput.setAttribute('maxlength', 13 );
elWelcomeFormBoxLeftLastInput.style.border = 'none';
elWelcomeFormBoxLeftLastInput.style.borderRadius = '5px';
elWelcomeFormBoxLeftLastInput.style.backgroundColor = 'transparent';
elWelcomeFormBoxLeftLastInput.style.boxShadow = '0 0 7px #d6d6d6';
elWelcomeFormBoxLeftLastInput.style.padding = '7px 12px';
elWelcomeFormBoxLeftLastInput.style.fontSize = '1.1em';
elWelcomeFormBoxLeftLastInput.style.marginTop = '4px';
elWelcomeFormBoxLeftLastInput.style.outline = 'none';
elWelcomeFormBoxLeftLastInput.style.transition = 'all 0.1s ease-in-out';
elWelcomeFormBoxLeftLastInput.style.color = '#d6d6d6';
elWelcomeFormBoxLeftLastInput.onmousemove = function() {
  elWelcomeFormBoxLeftLastInput.style.boxShadow = '0 0 15px #d6d6d6';
  elWelcomeFormBoxLeftLastInput.style.transition = 'all 0.1s ease-in-out';
}
elWelcomeFormBoxLeftLastInput.onmouseleave = function() {
  elWelcomeFormBoxLeftLastInput.style.boxShadow = '0 0 7px #d6d6d6';
  elWelcomeFormBoxLeftLastInput.style.transition = 'all 0.1s ease-in-out';
}
elWelcomeFormBoxLeftLastInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    elSignInFormBoxButton.click();
  }
});

var elSignInFormBoxButton = document.createElement('button');
elWelcomeBtnFormBox.appendChild(elSignInFormBoxButton);
elSignInFormBoxButton.textContent = `Ro'yhatdan o'tish`;
elSignInFormBoxButton.style.marginTop = '17px';
elSignInFormBoxButton.type = 'button';
elSignInFormBoxButton.style.backgroundColor = 'transparent';
elSignInFormBoxButton.style.border = 'none';
elSignInFormBoxButton.style.borderRadius = '5px';
elSignInFormBoxButton.style.color = '#fff3e0';
elSignInFormBoxButton.style.textShadow = '0 0 7px #d6d6d6';
elSignInFormBoxButton.style.fontSize = '1.2em';
elSignInFormBoxButton.style.boxShadow = '0 0 7px #d6d6d6';
elSignInFormBoxButton.style.padding = '8px 22px';
elSignInFormBoxButton.style.cursor = 'pointer';
elSignInFormBoxButton.type = 'button';
elSignInFormBoxButton.onmouseover = function() {
  elSignInFormBoxButton.style.boxShadow = '0 0 13px #d6d6d6';
}
elSignInFormBoxButton.onmouseleave = function() {
  elSignInFormBoxButton.style.boxShadow = '0 0 7px #d6d6d6';
}

var openStatus = true;
var userNameValue = elWelcomeFormBoxLeftFirstInput.value;
var userLastNameValue = elWelcomeFormBoxRightInput.value;

elSignInFormBoxButton.onclick = function() {
  if (elWelcomeFormBoxLeftFirstInput.value === ''|| elWelcomeFormBoxLeftFirstInput.value === null || elWelcomeFormBoxLeftFirstInput.value === undefined || Number(elWelcomeFormBoxLeftFirstInput.value) || elWelcomeFormBoxLeftFirstInput.value.indexOf(' ') >= 0 || elWelcomeFormBoxLeftFirstInput.value.length < 2 || elWelcomeFormBoxLeftFirstInput.value.length > 20) {
    elWelcomeFormBoxLeftFirstInput.style.boxShadow = '0 0 7px #f14d4d';
    elWelcomeFormBoxLeftFirstInput.placeholder = 'Ismingizni kiriting';
    elWelcomeFormBoxLeftFirstInput.value = '';
    openStatus = false;
  } else {
    elWelcomeFormBoxLeftFirstInput.style.boxShadow = '0 0 7px #d6d6d6';
    elWelcomeFormBoxLeftFirstInput.placeholder = '';
    openStatus = true;
    if (elWelcomeFormBoxRightInput.value === ''|| elWelcomeFormBoxRightInput.value === null || elWelcomeFormBoxRightInput.value === undefined || Number(elWelcomeFormBoxRightInput.value) || elWelcomeFormBoxRightInput.value.indexOf(' ') >= 0 || elWelcomeFormBoxRightInput.value.length < 2 || elWelcomeFormBoxRightInput.value.length > 20) {
      elWelcomeFormBoxRightInput.style.boxShadow = '0 0 7px #f14d4d';
      elWelcomeFormBoxRightInput.placeholder = 'Familyangizni kiriting';
      elWelcomeFormBoxRightInput.value = '';
          openStatus = false;
    } else {
      elWelcomeFormBoxRightInput.style.boxShadow = '0 0 7px #d6d6d6';
      elWelcomeFormBoxRightInput.placeholder = '';
      openStatus = true;
      if (elWelcomeFormBoxLeftSecondInput.value === ''|| elWelcomeFormBoxLeftSecondInput.value === null || elWelcomeFormBoxLeftSecondInput.value === undefined || elWelcomeFormBoxLeftSecondInput.value.indexOf(' ') >= 0 || elWelcomeFormBoxLeftSecondInput.value.length < 2 || elWelcomeFormBoxLeftSecondInput.value.length > 20) {
        elWelcomeFormBoxLeftSecondInput.style.boxShadow = '0 0 7px #f14d4d';
        elWelcomeFormBoxLeftSecondInput.placeholder = 'Nikingizni kiriting';
        elWelcomeFormBoxLeftSecondInput.value = '';
            openStatus = false;
      } else {
        elWelcomeFormBoxLeftSecondInput.style.boxShadow = '0 0 7px #d6d6d6';
        elWelcomeFormBoxLeftSecondInput.placeholder = '';
        openStatus = true;
        if (elWelcomeFormBoxRightSecondInput.value === ''|| elWelcomeFormBoxRightSecondInput.value === null || elWelcomeFormBoxRightSecondInput.value === undefined || elWelcomeFormBoxRightSecondInput.value.indexOf(' ') >= 0 || elWelcomeFormBoxRightSecondInput.value.length < 8 || elWelcomeFormBoxRightSecondInput.value.length > 20) {
          elWelcomeFormBoxRightSecondInput.style.boxShadow = '0 0 7px #f14d4d';
          elWelcomeFormBoxRightSecondInput.placeholder = 'Parolingizni kiriting';
          elWelcomeFormBoxRightSecondInput.value = '';
          openStatus = false;
        } else {
          elWelcomeFormBoxRightSecondInput.style.boxShadow = '0 0 7px #d6d6d6';
          elWelcomeFormBoxRightSecondInput.placeholder = '';
          openStatus = true;
          if (elWelcomeFormBoxLeftLastInput.value === ''|| elWelcomeFormBoxLeftLastInput.value === null || elWelcomeFormBoxLeftLastInput.value === undefined || isNaN(elWelcomeFormBoxLeftLastInput.value) || elWelcomeFormBoxLeftLastInput.value.indexOf(' ') >= 0 || elWelcomeFormBoxLeftLastInput.value.length < 0 || elWelcomeFormBoxLeftLastInput.value.length > 20) {
            elWelcomeFormBoxLeftLastInput.style.boxShadow = '0 0 7px #f14d4d';
            elWelcomeFormBoxLeftLastInput.placeholder = 'Pulingizni kiriting';
            elWelcomeFormBoxLeftLastInput.value = '';
            openStatus = false;
          } else {
            elWelcomeFormBoxLeftLastInput.style.boxShadow = '0 0 7px #d6d6d6';
            elWelcomeFormBoxLeftLastInput.placeholder = '';
            openStatus = true;
          }
        }
      }
    }
  }

  if (openStatus === true) {
    elWelcomeBox.style.display = 'none';
    elMain.style.display = 'block';
  }
  userNameValue = elWelcomeFormBoxLeftFirstInput.value;
  userLastNameValue = elWelcomeFormBoxRightInput.value;
  userName.textContent = userNameValue + ' ' + userLastNameValue;
  userNickName.textContent = elWelcomeFormBoxLeftSecondInput.value.toLowerCase();
  userMoney.textContent = elWelcomeFormBoxLeftLastInput.value;
  userMoney = elWelcomeFormBoxLeftLastInput.value;
}                                                              //Sign In BTn

//SIGN IN SECTION

var elWelcomeFormBoxSignIN = document.createElement('div');
elWelcomeForm.appendChild(elWelcomeFormBoxSignIN);
elWelcomeFormBoxSignIN.style.display = 'flex';
elWelcomeFormBoxSignIN.style.alignItems = 'center';
elWelcomeFormBoxSignIN.style.justifyContent = 'space-between';
elWelcomeFormBoxSignIN.style.marginTop = '10px';
elWelcomeFormBoxSignIN.style.display = 'none';

var elWelcomeBoxButtonBoxLine = document.createElement('div');
elWelcomeFormBoxSignIN.appendChild(elWelcomeBoxButtonBoxLine);
elWelcomeBoxButtonBoxLine.style.position = 'absolute';
elWelcomeBoxButtonBoxLine.style.width = '100%';
elWelcomeBoxButtonBoxLine.style.height = '1px';
elWelcomeBoxButtonBoxLine.style.backgroundColor = '#d6d6d6';
elWelcomeBoxButtonBoxLine.style.marginTop = '-70px';

var elWelcomeFormBoxLeft = document.createElement('div');
elWelcomeFormBoxSignIN.appendChild(elWelcomeFormBoxLeft);

var elWelcomeFormBoxLeftTitle = document.createElement('h3');
elWelcomeFormBoxLeft.appendChild(elWelcomeFormBoxLeftTitle);
elWelcomeFormBoxLeftTitle.style.fontSize = '18px';
elWelcomeFormBoxLeftTitle.style.margin = '0';
elWelcomeFormBoxLeftTitle.style.padding = '0';
elWelcomeFormBoxLeftTitle.textContent = `Nikingizni kiriting`;
elWelcomeFormBoxLeftTitle.style.color = '#fff3e0';

var elWelcomeFormBoxLeftSecondSecInput = document.createElement('input');
elWelcomeFormBoxLeft.appendChild(elWelcomeFormBoxLeftSecondSecInput);
elWelcomeFormBoxLeftSecondSecInput.type = 'text';
elWelcomeFormBoxLeftSecondSecInput.value = 'ans_me';
elWelcomeFormBoxLeftSecondSecInput.style.border = 'none';
elWelcomeFormBoxLeftSecondSecInput.style.borderRadius = '5px';
elWelcomeFormBoxLeftSecondSecInput.style.backgroundColor = 'transparent';
elWelcomeFormBoxLeftSecondSecInput.style.boxShadow = '0 0 7px #d6d6d6';
elWelcomeFormBoxLeftSecondSecInput.style.padding = '7px 12px';
elWelcomeFormBoxLeftSecondSecInput.style.fontSize = '1.1em';
elWelcomeFormBoxLeftSecondSecInput.style.marginTop = '4px';
elWelcomeFormBoxLeftSecondSecInput.style.outline = 'none';
elWelcomeFormBoxLeftSecondSecInput.style.transition = 'all 0.1s ease-in-out';
elWelcomeFormBoxLeftSecondSecInput.style.color = '#d6d6d6';
elWelcomeFormBoxLeftSecondSecInput.onmousemove = function() {
  elWelcomeFormBoxLeftSecondSecInput.style.boxShadow = '0 0 15px #d6d6d6';
  elWelcomeFormBoxLeftSecondSecInput.style.transition = 'all 0.1s ease-in-out';
}
elWelcomeFormBoxLeftSecondSecInput.onmouseleave = function() {
  elWelcomeFormBoxLeftSecondSecInput.style.boxShadow = '0 0 7px #d6d6d6';
  elWelcomeFormBoxLeftSecondSecInput.style.transition = 'all 0.1s ease-in-out';
}
elWelcomeFormBoxLeftSecondSecInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    elSignUpBottomBtn.click();
  }
});


var elWelcomeFormBoxLeft = document.createElement('div');
elWelcomeFormBoxSignIN.appendChild(elWelcomeFormBoxLeft);

var elWelcomeFormBoxLeftTitle = document.createElement('h3');
elWelcomeFormBoxLeft.appendChild(elWelcomeFormBoxLeftTitle);
elWelcomeFormBoxLeftTitle.style.fontSize = '18px';
elWelcomeFormBoxLeftTitle.style.margin = '0';
elWelcomeFormBoxLeftTitle.style.padding = '0';
elWelcomeFormBoxLeftTitle.textContent = `Parolingizni kiriting`;
elWelcomeFormBoxLeftTitle.style.color = '#fff3e0';


var elWelcomeFormBoxLeftInput = document.createElement('input');
elWelcomeFormBoxLeft.appendChild(elWelcomeFormBoxLeftInput);
elWelcomeFormBoxLeftInput.type = 'password';
elWelcomeFormBoxLeftInput.value = 'no_password';
elWelcomeFormBoxLeftInput.style.border = 'none';
elWelcomeFormBoxLeftInput.style.borderRadius = '5px';
elWelcomeFormBoxLeftInput.style.backgroundColor = 'transparent';
elWelcomeFormBoxLeftInput.style.boxShadow = '0 0 7px #d6d6d6';
elWelcomeFormBoxLeftInput.style.padding = '7px 12px';
elWelcomeFormBoxLeftInput.style.fontSize = '1.1em';
elWelcomeFormBoxLeftInput.style.marginTop = '4px';
elWelcomeFormBoxLeftInput.style.outline = 'none';
elWelcomeFormBoxLeftInput.style.transition = 'all 0.1s ease-in-out';
elWelcomeFormBoxLeftInput.style.color = '#d6d6d6';
elWelcomeFormBoxLeftInput.onmousemove = function() {
  elWelcomeFormBoxLeftInput.style.boxShadow = '0 0 15px #d6d6d6';
  elWelcomeFormBoxLeftInput.style.transition = 'all 0.1s ease-in-out';
}
elWelcomeFormBoxLeftInput.onmouseleave = function() {
  elWelcomeFormBoxLeftInput.style.boxShadow = '0 0 7px #d6d6d6';
  elWelcomeFormBoxLeftInput.style.transition = 'all 0.1s ease-in-out';
}
elWelcomeFormBoxLeftInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    elSignUpBottomBtn.click();
  }
});

//BTN SECTION

var elWelcomeFormBtnBox = document.createElement('div');
elWelcomeForm.appendChild(elWelcomeFormBtnBox);
elWelcomeFormBtnBox.style.display = 'flex';
elWelcomeFormBtnBox.style.alignItems = 'center';
elWelcomeFormBtnBox.style.justifyContent = 'center';
elWelcomeFormBtnBox.style.marginTop = '10px';
elWelcomeFormBtnBox.style.display = 'none';

var elSignUpBottomBtn = document.createElement('button');
elWelcomeFormBtnBox.appendChild(elSignUpBottomBtn);
elSignUpBottomBtn.textContent = `Kirish`;
elSignUpBottomBtn.style.marginTop = '0';
elSignUpBottomBtn.style.backgroundColor = 'transparent';
elSignUpBottomBtn.style.border = 'none';
elSignUpBottomBtn.style.borderRadius = '5px';
elSignUpBottomBtn.style.color = '#fff3e0';
elSignUpBottomBtn.style.textShadow = '0 0 7px #d6d6d6';
elSignUpBottomBtn.style.fontSize = '1.2em';
elSignUpBottomBtn.style.boxShadow = '0 0 7px #d6d6d6';
elSignUpBottomBtn.style.padding = '8px 12px';
elSignUpBottomBtn.style.cursor = 'pointer';
elSignUpBottomBtn.type = 'button';
elSignUpBottomBtn.onmouseover = function() {
  elSignUpBottomBtn.style.boxShadow = '0 0 15px #d6d6d6';
  elSignUpBottomBtn.style.transition = 'all 0.1s ease-in-out';
}
elSignUpBottomBtn.onmouseleave = function() {
  elSignUpBottomBtn.style.boxShadow = '0 0 7px #d6d6d6';
  elSignUpBottomBtn.style.transition = 'all 0.1s ease-in-out';
}
elSignUpBottomBtn.onclick = function() {
  if (elWelcomeFormBoxLeftSecondSecInput.value === ''|| elWelcomeFormBoxLeftSecondSecInput.value === null || elWelcomeFormBoxLeftSecondSecInput.value === undefined || elWelcomeFormBoxLeftSecondSecInput.value.indexOf(' ') >= 0 || elWelcomeFormBoxLeftSecondSecInput.value.length < 2 || elWelcomeFormBoxLeftSecondSecInput.value.length > 15) {
    elWelcomeFormBoxLeftSecondSecInput.style.boxShadow = '0 0 7px #f14d4d';
    elWelcomeFormBoxLeftSecondSecInput.placeholder = 'Nikingizni kiriting';
    elWelcomeFormBoxLeftSecondSecInput.value = '';
    openStatus = false;
  } else if (!(elWelcomeFormBoxLeftInput.value === 'ans_me')) {
    openStatus = false;
    elWelcomeFormBoxLeftSecondSecInput.style.boxShadow = '0 0 7px #f14d4d';
    elWelcomeFormBoxLeftSecondSecInput.placeholder = 'Noto\'g\'ri nik';
    elWelcomeFormBoxLeftSecondSecInput.value = '';
  } else {
    elWelcomeFormBoxLeftSecondSecInput.style.boxShadow = '0 0 7px #d6d6d6';
    elWelcomeFormBoxLeftSecondSecInput.placeholder = '';
    openStatus = true;
  }
  if (elWelcomeFormBoxLeftInput.value === ''|| elWelcomeFormBoxLeftInput.value === null || elWelcomeFormBoxLeftInput.value === undefined || elWelcomeFormBoxLeftInput.value.indexOf(' ') >= 0 || elWelcomeFormBoxLeftInput.value.length < 8 || elWelcomeFormBoxLeftInput.value.length > 15) {
    elWelcomeFormBoxLeftInput.style.boxShadow = '0 0 7px #f14d4d';
    elWelcomeFormBoxLeftInput.placeholder = 'Parolingizni kiriting';
    elWelcomeFormBoxLeftInput.value = '';
    openStatus = false;
  } else if (!(elWelcomeFormBoxLeftInput.value === 'no_password')) {
    elWelcomeFormBoxLeftInput.value = '';
    openStatus = false;
  }
  else {
    elWelcomeFormBoxLeftInput.style.boxShadow = '0 0 7px #d6d6d6';
    elWelcomeFormBoxLeftInput.placeholder = '';
    openStatus = true;
  }

  if (openStatus === true) {
    elWelcomeBox.style.display = 'none';
    elMain.style.display = 'block';
  }
}

// END WELCOME BOX

var elMain = document.createElement('div');
elContainer.appendChild(elMain);
elMain.style.height = '100vh';
elMain.style.width = '100%';
elMain.style.display = 'none';

var elHeader = document.createElement('div');
elMain.appendChild(elHeader);
elHeader.style.display = 'flex';
elHeader.style.justifyContent = 'space-between';
elHeader.style.alignItems = 'center';

var elUserBox = document.createElement('div');
elHeader.appendChild(elUserBox);
elUserBox.style.display = 'flex';
elUserBox.style.justifyContent = 'space-between';
elUserBox.style.alignItems = 'center';
elUserBox.style.marginTop = '10px';

var userImg = document.createElement('img');
elUserBox.appendChild(userImg);
userImg.style.width = '52px';
userImg.style.height = '52px';
userImg.src = './img/user.png';
userImg.alt = 'user';
userImg.style.cursor = 'pointer';
userImg.style.borderRadius = '50%';
userImg.style.opacity = '.8';
userImg.onmousemove = function() {
  userImg.style.opacity = '1';
}
userImg.onmouseleave = function() {
  userImg.style.opacity = '.8';
}

var userMain = document.createElement('div');
elUserBox.appendChild(userMain);
userMain.style.marginTop = '1px';

var userName = document.createElement('h2');
userMain.appendChild(userName);
userName.style.fontSize = '1.1rem';
userName.style.margin = '0';
userName.style.padding = '0';
userName.style.color = '#f8f8f8';
userName.style.userSelect = 'none';

var userNickName = document.createElement('h2');
userMain.appendChild(userNickName);
userNickName.style.fontSize = '.9rem';
userNickName.style.margin = '0';
userNickName.style.padding = '0';
userNickName.style.color = '#e2e2e2da';
userNickName.style.textShadow = '0 0 6px #d6d6d6';
userNickName.style.userSelect = 'none';

// USER BALNCE BOX

var elUserBalanceBox = document.createElement('div');
elHeader.appendChild(elUserBalanceBox);
elUserBalanceBox.style.display = 'flex';
elUserBalanceBox.style.justifyContent = 'space-between';
elUserBalanceBox.style.alignItems = 'center';
elUserBalanceBox.style.marginTop = '10px';

var userBalanceImg = document.createElement('img');
elUserBalanceBox.appendChild(userBalanceImg);
userBalanceImg.style.width = '40px';
userBalanceImg.style.height = '40px';
userBalanceImg.src = './img/user-money.png';
userBalanceImg.alt = 'user';
userBalanceImg.style.cursor = 'pointer';
userBalanceImg.style.borderRadius = '50%';
userBalanceImg.style.opacity = '.8';
userBalanceImg.style.marginRight = '6px';

var userMain = document.createElement('div');
elUserBalanceBox.appendChild(userMain);
userMain.style.marginTop = '1px';

var userBlanceName = document.createElement('h2');
userMain.appendChild(userBlanceName);
userBlanceName.textContent = 'balansingiz';
userBlanceName.style.fontSize = '.9rem';
userBlanceName.style.margin = '0';
userBlanceName.style.padding = '0';
userBlanceName.style.color = '#e2e2e2da';
userBlanceName.style.textShadow = '0 0 6px #d6d6d6';
userBlanceName.style.userSelect = 'none';

var userMoney = document.createElement('h2');
userMain.appendChild(userMoney);
userMoney.style.fontSize = '1.1rem';
userMoney.style.margin = '0';
userMoney.style.padding = '0';
userMoney.style.color = '#f8f8f8';
userMoney.style.userSelect = 'none';
userMoney.style.marginTop = '4px';

//CHANGE SECTION

var elChange = document.createElement('div');
elMain.appendChild(elChange);
elChange.style.display = 'flex';
elChange.style.justifyContent = 'space-between';
elChange.style.alignItems = 'center';
elChange.style.maxWidth = '800px';
elChange.style.margin = '0 auto';

var leftCountryBox = document.createElement('div');
elChange.appendChild(leftCountryBox);
leftCountryBox.style.display = 'flex';
leftCountryBox.style.justifyContent = 'space-between';
leftCountryBox.style.alignItems = 'center';

var mainSelect = document.createElement('select');
leftCountryBox.appendChild(mainSelect);
mainSelect.style.width = '100%';
mainSelect.style.height = '40px';
mainSelect.style.border = 'none';
mainSelect.style.borderRadius = '5px';
mainSelect.style.backgroundColor = 'transparent';
mainSelect.style.color = '#e2e2e2da';
mainSelect.style.fontSize = '1.1rem';
mainSelect.style.margin = '0';
mainSelect.style.padding = '0';
mainSelect.style.userSelect = 'none';
mainSelect.style.outline = 'none';
mainSelect.style.cursor = 'pointer';
mainSelect.style.marginRight = '10px';
mainSelect.style.boxShadow = '0 0 6px #d6d6d6';

var array = ["O'zbekiston","Rossiya"];

for (var i = 0; i < array.length; i++) {
  var option = document.createElement("option");
  option.value = array[i];
  option.text = array[i];
  mainSelect.appendChild(option);
}

var leftCountryBoxTitle = document.createElement('h2');
leftCountryBox.appendChild(leftCountryBoxTitle);
leftCountryBoxTitle.textContent = 'dan';
leftCountryBoxTitle.style.color = '#e2e2e2da';

// end left country box

var searchBtnBox = document.createElement('div');
elChange.appendChild(searchBtnBox);
searchBtnBox.style.display = 'flex';
searchBtnBox.style.justifyContent = 'center';
searchBtnBox.style.alignItems = 'center';

var searchBtn = document.createElement('button');
searchBtnBox.appendChild(searchBtn);
searchBtn.textContent = 'Qidirish';
searchBtn.style.padding = '9px 12px';
searchBtn.style.border = 'none';
searchBtn.style.borderRadius = '5px';
searchBtn.style.backgroundColor = 'transparent';
searchBtn.style.color = '#e2e2e2da';
searchBtn.style.fontSize = '1.1rem';
searchBtn.style.boxShadow = '0 0 6px #d6d6d6';
searchBtn.style.cursor = 'pointer';
searchBtn.onmousemove = function () {
  searchBtn.style.boxShadow = '0 0 13px #d6d6d6';

}
searchBtn.onmouseout = function () {
  searchBtn.style.boxShadow = '0 0 6px #d6d6d6';
}

// start left country box

var rightCountryBox = document.createElement('div');
elChange.appendChild(rightCountryBox);
rightCountryBox.style.display = 'flex';
rightCountryBox.style.justifyContent = 'space-between';
rightCountryBox.style.alignItems = 'center';

var mainRightSelect = document.createElement('select');
rightCountryBox.appendChild(mainRightSelect);
mainRightSelect.style.width = '100%';
mainRightSelect.style.height = '40px';
mainRightSelect.style.border = 'none';
mainRightSelect.style.borderRadius = '5px';
mainRightSelect.style.backgroundColor = 'transparent';
mainRightSelect.style.color = '#e2e2e2da';
mainRightSelect.style.fontSize = '1.1rem';
mainRightSelect.style.margin = '0';
mainRightSelect.style.padding = '0';
mainRightSelect.style.userSelect = 'none';
mainRightSelect.style.outline = 'none';
mainRightSelect.style.cursor = 'pointer';
mainRightSelect.style.marginRight = '10px';
mainRightSelect.style.boxShadow = '0 0 6px #d6d6d6';

var array = ["O'zbekiston","Rossiya"];

for (var i = 0; i < array.length; i++) {
  var option = document.createElement("option");
  option.value = array[i];
  option.text = array[i];
  mainRightSelect.appendChild(option);
}

var leftCountryBoxTitle = document.createElement('h2');
rightCountryBox.appendChild(leftCountryBoxTitle);
leftCountryBoxTitle.textContent = 'ga';
leftCountryBoxTitle.style.color = '#e2e2e2da';

// search btn function

var transTitle = '';

var saleStatus = false;

mainSelectValue = mainSelect.value;
mainRightSelectValue = mainRightSelect.value;
searchBtn.onclick = function () {
  mainSelectValue = mainSelect.value;
  mainRightSelectValue = mainRightSelect.value;
  if (mainSelectValue === mainRightSelectValue) {
    elTicketUzbToRus.style.display = 'none';
    alert('Respublika aro reyslar mavjud emas');
  }
  if (mainSelectValue === `O'zbekiston` && mainRightSelectValue === `Rossiya`) {
    elTicketUzbToRusMainLeftParagrph.textContent = 'O\'zbekiston dan Rossiya ga';
    elTicketUzbToRusMainLeftTime.textContent = 'uchish vaqti: 12:00 (+5 GMT)';
    elTicketUzbToRusMainCenterParagrph.textContent = 'reys davomiyligi: 4 soat';
    elTicketUzbToRusMainEndParagrph.textContent = 'Narxi 4.000000';
    elTicketUzbToRusMainEndBuyBtn.onclick = function () {
      if (userMoney < 4000000) {
        alert(`Chiptani sotib olishingizga ${4000000 - userMoney} UZS yetmayapdi`);
        saleStatus = false;
      }
      else {
        alert(`Chiptani sotib oldingiz`);
        // // userMoney - 4000000;
        // userMoney = userMoney - 4000000;
      }
    }
    elTicketUzbToRus.style.display = 'flex';
  }


  // rus to uzb

  if (mainSelectValue === `Rossiya` && mainRightSelectValue === `O'zbekiston`) {
    elTicketUzbToRusMainLeftParagrph.textContent = 'Rossiya dan O\'zbekiston ga';
    elTicketUzbToRusMainLeftTime.textContent = 'uchish vaqti: 18:00 (+3 GMT)';
    elTicketUzbToRusMainCenterParagrph.textContent = 'reys davomiyligi: 4 soat';
    elTicketUzbToRusMainEndParagrph.textContent = 'Narxi 4.250000';
    elTicketUzbToRusMainEndBuyBtn.onclick = function () {
      if (userMoney < 4250000) {
        alert(`Chiptani sotib olishingizga ${4250000 - userMoney} UZS yetmayapdi`);
        saleStatus = false;
      }
      else {
        alert(`Chiptani sotib oldingiz`);
        userMoney = userMoney - 4250000;
        userMoney - 4250000;
      }
    }
    elTicketUzbToRus.style.display = 'flex';
  }
  mainSelectValue = mainSelect.value;
  mainRightSelectValue = mainRightSelect.value;
}

var userTestMoney = 0;

var elTicketBox = document.createElement('div');
elMain.appendChild(elTicketBox);
elTicketBox.style.height = '100%';
elTicketBox.style.overflowY = 'auto';
elTicketBox.style.margin = '0 80px';
elTicketBox.style.padding = '0 10px 0 10px';

var elTicketBoxTitle = document.createElement('h2');
elTicketBox.appendChild(elTicketBoxTitle);
elTicketBoxTitle.textContent = 'Mavjud Avia Chiptalar';
elTicketBoxTitle.style.color = '#e2e2e2da';
elTicketBoxTitle.style.fontSize = '1.2rem';
elTicketBoxTitle.style.textAlign = 'center';
elTicketBoxTitle.style.textShadow = '0 0 2px #d6d6d6';

//USB TO RUS

var elTicketUzbToRus = document.createElement('div');
elTicketBox.appendChild(elTicketUzbToRus);
elTicketUzbToRus.style.display = 'none';
elTicketUzbToRus.style.justifyContent = 'space-between';
elTicketUzbToRus.style.alignItems = 'center';
elTicketUzbToRus.style.marginTop = '15px';
elTicketUzbToRus.style.marginBottom = '15px';
elTicketUzbToRus.style.width = '100%';
elTicketUzbToRus.style.boxShadow = '0 0 6px #d6d6d6';
elTicketUzbToRus.style.borderRadius = '10px';
elTicketUzbToRus.style.padding = '10px 0 10px 0';

var elTicketUzbToRusMain = document.createElement('div');
elTicketUzbToRus.appendChild(elTicketUzbToRusMain);
elTicketUzbToRusMain.style.display = 'flex';
elTicketUzbToRusMain.style.alignItems = 'center';
elTicketUzbToRusMain.style.justifyContent = 'space-between';
elTicketUzbToRusMain.style.marginLeft = '10px';

var elTicketUzbToRusMainLeft = document.createElement('div');
elTicketUzbToRusMain.appendChild(elTicketUzbToRusMainLeft);

var elTicketUzbToRusMainLeftParagrph = document.createElement('p');
elTicketUzbToRusMainLeft.appendChild(elTicketUzbToRusMainLeftParagrph);
// elTicketUzbToRusMainLeftParagrph.textContent = 'O\'zbekiston dan Rossiya ga';
elTicketUzbToRusMainLeftParagrph.style.color = '#e2e2e2da';
elTicketUzbToRusMainLeftParagrph.style.fontSize = '1.1rem';
elTicketUzbToRusMainLeftParagrph.style.padding = '0';

var elTicketUzbToRusMainLeftTime = document.createElement('p');
elTicketUzbToRusMainLeft.appendChild(elTicketUzbToRusMainLeftTime);
// elTicketUzbToRusMainLeftTime.textContent = 'uchish vaqti: 12:00 (+5 GMT)';
elTicketUzbToRusMainLeftTime.style.color = '#e2e2e2da';
elTicketUzbToRusMainLeftTime.style.marginTop = '-4px';

//right side

var elTicketUzbToRusMainRight = document.createElement('div');
elTicketUzbToRusMain.appendChild(elTicketUzbToRusMainRight);

var elTicketUzbToRusMainCenterParagrph = document.createElement('p');
elTicketUzbToRusMainRight.appendChild(elTicketUzbToRusMainCenterParagrph);
// elTicketUzbToRusMainCenterParagrph.textContent = 'reys davomiyligi: 4 soat';
elTicketUzbToRusMainCenterParagrph.style.color = '#e2e2e2da';
elTicketUzbToRusMainCenterParagrph.style.marginLeft = '40px';

var elTicketUzbToRusMainRight = document.createElement('div');
elTicketUzbToRusMain.appendChild(elTicketUzbToRusMainRight);

var elTicketUzbToRusMainRighhtParagrph = document.createElement('p');
elTicketUzbToRusMainRight.appendChild(elTicketUzbToRusMainRighhtParagrph);
elTicketUzbToRusMainRighhtParagrph.textContent = 'Qulay Narx';
elTicketUzbToRusMainRighhtParagrph.style.color = '#e2e2e2da';
elTicketUzbToRusMainRighhtParagrph.style.marginLeft = '40px';

//end side

var elTicketUzbToRusMainEnd = document.createElement('div');
elTicketUzbToRus.appendChild(elTicketUzbToRusMainEnd);
elTicketUzbToRusMainEnd.style.display = 'flex';
elTicketUzbToRusMainEnd.style.alignItems = 'center';
elTicketUzbToRusMainEnd.style.justifyContent = 'space-between';


var elTicketUzbToRusMainEndParagrph = document.createElement('h2');
elTicketUzbToRusMainEnd.appendChild(elTicketUzbToRusMainEndParagrph);
// elTicketUzbToRusMainEndParagrph.textContent = 'Narxi 4.000000';

var elTicketUzbToRusMainEndBuyBtn = document.createElement('button');
elTicketUzbToRusMainEnd.appendChild(elTicketUzbToRusMainEndBuyBtn);
elTicketUzbToRusMainEndBuyBtn.textContent = 'Sotib Olish';
elTicketUzbToRusMainEndBuyBtn.style.backgroundColor = 'transparent';
elTicketUzbToRusMainEndBuyBtn.style.margin = '0 11px 0 15px';
elTicketUzbToRusMainEndBuyBtn.style.color = '#e2e2e2da';
elTicketUzbToRusMainEndBuyBtn.style.fontSize = '1.1rem';
elTicketUzbToRusMainEndBuyBtn.style.border = 'none';
elTicketUzbToRusMainEndBuyBtn.style.borderRadius = '5px';
elTicketUzbToRusMainEndBuyBtn.style.padding = '5px 10px';
elTicketUzbToRusMainEndBuyBtn.style.cursor = 'pointer';
elTicketUzbToRusMainEndBuyBtn.style.textShadow = '0 0 2px #d6d6d6';
elTicketUzbToRusMainEndBuyBtn.style.boxShadow = '0 0 7px #d6d6d6';
elTicketUzbToRusMainEndBuyBtn.style.transition = 'all 0.1s ease-in-out';
elTicketUzbToRusMainEndBuyBtn.onmousemove = function() {
  elTicketUzbToRusMainEndBuyBtn.style.boxShadow = '0 0 11px #d6d6d6';
}
elTicketUzbToRusMainEndBuyBtn.onmouseout = function() {
  elTicketUzbToRusMainEndBuyBtn.style.boxShadow = '0 0 7px #d6d6d6';
}
// END CREATING END STYLING