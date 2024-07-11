const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let isValid = true;
  
  if (!nameValidate()) isValid = false;
  if (!emailValidate()) isValid = false;
  if (!phoneValidate()) isValid = false;
  if (!messageValidate()) isValid = false;
  
  if (isValid) {
    form.submit();
  }
});

function setError(index) {
  campos[index].style.border = '2px solid #e63636';
  spans[index].style.display = 'block';
}

function removeError(index) {
  campos[index].style.border = '';
  spans[index].style.display = 'none';
}

function nameValidate() {
  if (campos[0].value.length < 3) {
    setError(0);
    return false;
  } else {
    removeError(0);
    return true;
  }
}

function emailValidate() {
  if (!emailRegex.test(campos[1].value)) {
    setError(1);
    return false;
  } else {
    removeError(1);
    return true;
  }
}

function phoneValidate() {
  if (campos[2].value.length < 10 || campos[2].value.length > 11) {
    setError(2);
    return false;
  } else {
    removeError(2);
    return true;
  }
}

document.getElementById('telefone').addEventListener('input', function (e) {
  this.value = this.value.replace(/\D/g, '');
});

function messageValidate() {
  const mensagem = document.getElementById('message');
  const mensagemSpan = spans[3];

  if (mensagem.value.trim() === '') {
    mensagem.style.border = '2px solid #e63636';
    mensagemSpan.style.display = 'block';
    return false;
  } else {
    mensagem.style.border = '';
    mensagemSpan.style.display = 'none';
    return true;
  }
}
