import { taskIdController, projectList} from "./state-logic";
import { makeProjectList } from "./projects-render";

const initialPageLoad = () => {
    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('contentWrapper');
    

    const pageHeader = document.createElement('header');
    pageHeader.classList.add('pageHeader');
    pageHeader.innerHTML = 'this is the header';
      
    const taskContentWrapper = document.createElement('div');
    
    const taskListHeader = document.createElement('header');
    taskListHeader.innerHTML = 'active project Name';
    
    const taskListInnerWrap = document.createElement('div');
    taskListInnerWrap.setAttribute('class', 'tasksInnerWrap');

    const newTaskWrapper = document.createElement('div');
    
    const newTaskBtn = document.createElement('button');
    newTaskBtn.innerHTML = ('New Task');

    const newTaskCard = document.createElement('div');
    newTaskCard.classList.add('newTaskCard');
    const newTaskForm = document.createElement('form');
    newTaskForm.setAttribute('id', 'newTaskForm');
    
    const newTaskName = document.createElement('input')
    newTaskName.setAttribute('type', 'text');
    newTaskName.setAttribute('name', 'taskName');
    newTaskName.setAttribute('placeholder', 'e.g., Pay internet bill');
    newTaskName.setAttribute('required', '');

    const newTaskDescription = document.createElement('input')
    newTaskDescription.setAttribute('type', 'text');
    newTaskDescription.setAttribute('name', 'taskDescription');
    newTaskDescription.setAttribute('placeholder', 'description');

    const newTaskNotes = document.createElement('textArea')
    newTaskNotes.setAttribute('type', 'text');
    newTaskNotes.setAttribute('name', 'taskNotes');
    newTaskNotes.setAttribute('placeholder', 'comments');

    const selectProjectInput = document.createElement('select');
    selectProjectInput.setAttribute('id', 'whichProject');
    selectProjectInput.setAttribute('name', 'whichProject');

    const labelProjectInput = document.createElement('label');
    labelProjectInput.setAttribute('for', 'whichProject');
    labelProjectInput.innerHTML = 'Project: '

    const getProjectOptionElements = () => {
        const currentList = projectList.getList(); //should be array
        return currentList.map(listItem => {
            const currentItem = document.createElement('option');
            currentItem.setAttribute('value', listItem);
            currentItem.innerHTML = listItem;
            return currentItem;
        })
    }

    const priorityInput = document.createElement ('select');
    priorityInput.setAttribute('id', 'priorityInput');

    const labelPriorityInput = document.createElement('label');
    labelPriorityInput.setAttribute('for', 'priorityInput');
    labelPriorityInput.innerHTML = 'Priority'

    const priorityOptions = [
        'none',
        'priority 1',
        'priority 2',
        'priority 3'
    ]

    const priorityOptionElements = priorityOptions.map(itemName => {
        const currentOption = document.createElement('option');
        currentOption.setAttribute('value', itemName);
        currentOption.innerHTML = itemName;
        return currentOption;
    })


    const newTaskDueDate = document.createElement ('input');
    newTaskDueDate.setAttribute('name', 'dueDate')
    newTaskDueDate.setAttribute('type', 'date');

    const newTaskDateLabel = document.createElement('label');
    newTaskDateLabel.setAttribute('for', 'dueDate')
    newTaskDateLabel.innerHTML = 'Due date:'

    const newTaskSubmit = document.createElement('button');
    newTaskSubmit.setAttribute('id','newTaskSubmit');
    newTaskSubmit.setAttribute('type','submit');
    newTaskSubmit.innerHTML = 'save';

    const newTaskCancelBtn = document.createElement('button');
    newTaskCancelBtn.setAttribute('id','newTaskCancel');
    newTaskCancelBtn.setAttribute('type','button');
    newTaskCancelBtn.innerHTML = 'cancel';

    document.body.appendChild(contentWrapper);

    contentWrapper.appendChild(pageHeader);
    makeProjectList();
    contentWrapper.appendChild(taskContentWrapper);

    
    taskContentWrapper.appendChild(taskListHeader);
    taskContentWrapper.appendChild(taskListInnerWrap);
    taskContentWrapper.appendChild(newTaskWrapper);

    newTaskWrapper.appendChild(newTaskBtn);
    newTaskWrapper.appendChild(newTaskCard);

    
    newTaskCard.appendChild(newTaskForm)
    newTaskForm.appendChild(newTaskName);
    newTaskForm.appendChild(newTaskDescription);
    newTaskForm.appendChild(newTaskNotes);
    
    newTaskForm.appendChild(labelProjectInput)
    newTaskForm.appendChild(selectProjectInput);
    getProjectOptionElements().forEach(element => {
        selectProjectInput.appendChild(element);
    });


    newTaskForm.appendChild(labelPriorityInput);
    newTaskForm.appendChild(priorityInput);
    console.log(priorityOptionElements);
    priorityOptionElements.forEach(element =>{
        priorityInput.appendChild(element);
    })

    newTaskForm.appendChild(newTaskDateLabel);
    newTaskForm.appendChild(newTaskDueDate);
    newTaskForm.appendChild(newTaskSubmit);
    newTaskForm.appendChild(newTaskCancelBtn); 
}

export {initialPageLoad}

//ok so we added priority and project into dom form.. now we need to update state.. or we can work on the project list.
//ok project list first, just the ability to add new projects and update the newTask form. 