const form = document.querySelector('.form');
const thanks = document.querySelector('.thanks');
if (form) {
    form.onsubmit = e => {
        e.preventDefault();
        validateData();
    }
} else if (thanks) {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            const body = document.querySelector('body')
            const message = showMessage('You`ll be redirect to our website home page', null, false);
            const footer = document.querySelector('footer');
            body.insertBefore(message, footer);
        }, 3000)
    })
}

function validateData() {
    const name = document.querySelector('#FirstName').value;
    const lastName = document.querySelector('#LastName').value;
    const email = document.querySelector('#Email').value;
    const zipCode = document.querySelector('#ZipCode').value;
    const company = document.querySelector('#Company').value;
    const regexMail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const regexCP = /^(?:0[1-9]\d{3}|[1-8]\d{4}|5[0-2]\d{3})$/;
    const main = document.querySelector('main');
    if (!name || !lastName || !email || !zipCode || !company) {
        showMessage('Oops! We need more information! All the fields are required 😅', main);
        return
    } else if (!regexMail.test(email)) {
        showMessage('Oops! Check your email please 😉', main);
        return
    } else if (!regexCP.test(zipCode)) {
        showMessage('Oops! Check your Zip code please 😉', main);
        return
    }
    form.submit();
}

function showMessage(message, insertInto, isError = true) {
    const p = document.createElement('p');
    p.textContent = message;
    const div = document.createElement('div');
    div.appendChild(p);
    if (isError) {
        if (!document.querySelector('.error')) {
            div.classList.add('error');
            insertInto.appendChild(div);
            setTimeout(() => {
                div.remove()
            }, 6000);
        }
    } else {
        div.classList.add('message');
        return div;
    }
}