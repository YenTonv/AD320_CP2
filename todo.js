/*
 * Name: Yen Ton
 * Date: October 25, 2023
 *
 * This is the JS to implement the UI for my To-Do List
 */
"use strict";

/**
 * Wait for the page to fully load before executing JavaScript.
 */
window.addEventListener("load", function () {

  const addButton = document.getElementById("add-button");

  const inputTask = document.getElementById("task-input");

  const prioritySelect = document.getElementById("task-priority");

  /**
   * Function to add a new task.
   */
  function addTask() {

    const taskText = inputTask.value.trim();

    const taskPriority = prioritySelect.value;

    if (taskText !== "") {

      const taskItem = document.createElement("li");

      // Create checkbox input element
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", function () {
        
        /**
         * Event handler for checkbox change.
         * @param {Event} event - The change event.
         * @returns {void}
         */
        if (checkbox.checked) {
          // Mark the task as done
          taskItem.style.textDecoration = "line-through";
        } else {
          // Mark the task as not done
          taskItem.style.textDecoration = "none";
        }
      });

      // Create task label element
      const taskLabel = document.createElement("label");
      taskLabel.textContent = taskText;

      // Create remove button element
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", function () {
        
        /**
         * Event handler for remove button click.
         * @param {Event} event - The click event.
         * @returns {void}
         */
        taskItem.parentNode.removeChild(taskItem);
      });

      // Append elements to task item
      taskItem.appendChild(checkbox);
      taskItem.appendChild(taskLabel);
      taskItem.appendChild(removeButton);

      // Place the task in the appropriate column based on priority
      const taskList = getTaskListByPriority(taskPriority);
      taskList.appendChild(taskItem);
      inputTask.value = "";
    }
  }

  // Add a new task when the "Add" button is clicked
  addButton.addEventListener("click", addTask);

  // Add a new task when Enter key is pressed in the input field
  inputTask.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  /**
   * Get the task list element by priority.
   * @param {string} priority - The priority level ("High", "Medium", or "Low").
   * @returns {HTMLElement} The task list element.
   */
  function getTaskListByPriority(priority) {
    switch (priority) {
      case "High":
        return document.getElementById("task-list-high");
      case "Medium":
        return document.getElementById("task-list-medium");
      case "Low":
        return document.getElementById("task-list-low");
      default:
        return null;
    }
  }
});

