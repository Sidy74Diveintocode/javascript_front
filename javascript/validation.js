const form = document.getElementById('form');
const tr = document.getElementsByClassName("contact_line")
const e_message = document.createElement("p");
const text = document.createTextNode("les e-mails ne correspondent pas");
e_message.appendChild(text);
e_message.style.color = '#d14539';
console.log(tr[tr.length - 1])
insertAfter(e_message, tr[tr.length - 1]);
e_message.style.display = 'none';


form.email_confirm.addEventListener('input', () => {

  if (form.email.value !== form.email_confirm.value) {
    form.email_confirm.style.backgroundColor = 'rgba(230,169,171,.5)';
    e_message.style.display = 'inline';
  }
  else {
    form.email_confirm.style.backgroundColor = '';
    e_message.style.display = 'none';
  }
})
//Start: Insert Afert Node 
function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
//End: Insert Afert Node
