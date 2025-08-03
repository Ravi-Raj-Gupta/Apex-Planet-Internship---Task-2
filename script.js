
document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === '' || email === '') {
        document.getElementById('formMessage').innerText = 'All fields are required!';
        document.getElementById('formMessage').style.color = 'red';
    } else if (!email.match(emailPattern)) {
        document.getElementById('formMessage').innerText = 'Please enter a valid email!';
        document.getElementById('formMessage').style.color = 'red';
    } else {
        document.getElementById('formMessage').innerText = 'Form submitted successfully!';
        document.getElementById('formMessage').style.color = 'green';
        this.reset();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    if (task === '') return;

    const li = document.createElement('li');
    li.textContent = task;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(removeBtn);
    document.getElementById('taskList').appendChild(li);

    taskInput.value = '';
}
