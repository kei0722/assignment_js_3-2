'use strict';

const todoList = [];

document.getElementById('add-btn').addEventListener('click', () => {

	const tr = document.createElement('tr');
	const statusButton = document.createElement('button');
	const deleteButton = document.createElement('button');
	const tbody = document.querySelector('tbody');
	const addTr = tbody.appendChild(tr);

	let todoListId = todoList.length;

	const todo = {
		id: todoListId,
		comment: document.getElementById('input-task').value,
		status: '作業中',
		deleteBtn: '削除',
	};

	todoList.push(todo);

	const tdId = document.createElement('td');
	const tdComment = document.createElement('td');
	const tdStatus = document.createElement('td');
	const tdDeleteBtn = document.createElement('td');

	tdId.textContent = todo.id;
	tdComment.textContent = todo.comment;

	statusButton.textContent = todo.status;
	tdStatus.appendChild(statusButton);

	deleteButton.textContent = todo.deleteBtn;
	deleteButton.className = 'delete-button';
	tdDeleteBtn.appendChild(deleteButton);

	addTr.appendChild(tdId);
	addTr.appendChild(tdComment);
	addTr.appendChild(tdStatus);
	addTr.appendChild(tdDeleteBtn);

	document.getElementById('input-task').value = "";

	tdDeleteBtn.addEventListener('click', () => {
		
		todoList.splice(Number(todoListId.textContent), 1);
		tbody.removeChild(tr);

		for (let i = 0; i < todoList.length; i++) {
			todoList[i].id = i;
			tdId.textContent = todoList[i].id;
			tbody.children[i].firstChild.textContent = i;
		}
	});
});

