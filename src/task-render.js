import { tasksList } from "./tasks-state";
import { projectList } from "./projects-state";

//used to update project options in newtask form dynamically
const getProjectOptionElements = () => {
    const currentList = projectList.getList(); 
    return currentList.map(listItem => {
        const currentItem = document.createElement('option');
        currentItem.setAttribute('value', listItem);
        currentItem.innerHTML = listItem;
        return currentItem;
    })
}

const simpleViewCard = (taskObj) =>{
    const tasksWrapper = document.querySelector('.tasksInnerWrap')

    const card = document.createElement('div');
    card.setAttribute('class', 'taskSimpleCard');
    card.setAttribute('data-id', taskObj.id)

    const markCompleteBtn = document.createElement('button');
    markCompleteBtn.setAttribute('class', 'markCompleteBtn');

    const title = document.createElement('p');
    title.setAttribute('class', 'taskCardTitle');
    title.innerHTML = taskObj.name;

    const description = document.createElement('p');
    description.setAttribute('class', 'taskCardDescription');
    description.innerHTML = taskObj.description;

    const dueDate = document.createElement('p');
    dueDate.setAttribute('class', 'taskCardDueDate');
    dueDate.innerHTML = taskObj.dueDate;

    tasksWrapper.appendChild(card);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(dueDate);
}


const renderAllTasksSimpleView = () => {
    const taskObjs = tasksList.getCurrentArr();
    taskObjs.forEach(element => simpleViewCard(element));
}

//clears the div containing tasklist and set them up again 
const regenerateTaskList = () => {
    const taskListDisplay = document.querySelector("div[class='tasksInnerWrap']");
    taskListDisplay.innerHTML = "";
    renderAllTasksSimpleView();
    console.log(tasksList.getCurrentArr());
}

const newTaskSubmitEventHandler = () => {
    const saveBtn = document.querySelector("button[id='newTaskSubmit']");
    saveBtn.addEventListener('click', () => {regenerateTaskList()});
}

const taskFocusedViewCard = (taskId) => {
    const [taskObj] = tasksList.getTaskById(taskId);

    const focusViewWrap = document.createElement('div');
    focusViewWrap.setAttribute('class', 'focusViewWrap');

    const focusViewCard = document.createElement('div');
    focusViewCard.setAttribute('class', 'focusViewCard');
    focusViewCard.setAttribute('data-idfocus', taskId)
    
    const closeBtn = document.createElement('button');
    closeBtn.setAttribute('class', 'focusViewCloseBtn')
    closeBtn.innerHTML = ('x');

    const focusViewForm = document.createElement('form');
    focusViewForm.setAttribute('id', 'focusViewForm');
    
    const name = document.createElement('input');
    name.setAttribute('type', 'text');
    name.setAttribute('name', 'focusTaskName');
    name.setAttribute('placeholder', 'e.g., Pay internet bill');
    name.setAttribute('required', '');
    name.setAttribute('value', taskObj.name)

    const description = document.createElement('input');
    description.setAttribute('type', 'text');
    description.setAttribute('name', 'focusTaskDescription');
    description.setAttribute('placeholder', 'description');
    description.setAttribute('value', taskObj.description)
    

    const notes = document.createElement('textArea');
    notes.setAttribute('type', 'text');
    notes.setAttribute('name', 'focusTaskNotes');
    notes.setAttribute('placeholder', 'comments');
    notes.setAttribute('value', taskObj.notes);

    //cretae project and priority list. can i import it from project render?
    const projectSelect = document.createElement('select')
    projectSelect.setAttribute('id', 'editProjectInput')

    const optionElements = getProjectOptionElements();

    const projectInputLabel = document.createElement('label');
    projectInputLabel.setAttribute('for', 'editProjectInput');

    const priorityInput = document.createElement('select');
    priorityInput.setAttribute('id', 'editpriorityInput');

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

    const dueDate = document.createElement ('input');
    dueDate.setAttribute('name', 'focusDueDate')
    dueDate.setAttribute('type', 'date');
    dueDate.setAttribute('value', taskObj.dueDate);

    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'focusDueDate')
    dateLabel.innerHTML = 'Due date:'

    const deleteTask = document.createElement('button');
    deleteTask.setAttribute('id','focusViewDelete');
    deleteTask.setAttribute('type','button');
    deleteTask.innerHTML = 'delete';

    const submit = document.createElement('button');
    submit.setAttribute('id','focusViewSubmit');
    submit.setAttribute('type','submit');
    submit.innerHTML = 'save';
    
    document.body.appendChild(focusViewWrap);

    focusViewWrap.appendChild(focusViewCard);

    focusViewCard.appendChild(closeBtn);
    focusViewCard.appendChild(name);
    focusViewCard.appendChild(description);
    focusViewCard.appendChild(notes);
    focusViewCard.appendChild(projectInputLabel);
    focusViewCard.appendChild(projectSelect);
    optionElements.forEach(element => {
        element.setAttribute('class', 'editOptionElement');
        projectSelect.appendChild(element)
    })
    focusViewCard.appendChild(priorityInput);
    priorityOptionElements.forEach(element => {
        priorityInput.appendChild(element);
    })

    focusViewCard.appendChild(dueDate);
    focusViewCard.appendChild(dateLabel);
    focusViewCard.appendChild(deleteTask);
    focusViewCard.appendChild(submit);
}

const focusViewEventHandler = () => {
    const container = document.querySelector('.tasksInnerWrap');
    container.addEventListener('click', e => {
        const clickedTask = e.target.closest('[data-id]');
        const dataIdValue = clickedTask.getAttribute('data-id');
        taskFocusedViewCard(dataIdValue);
    })
}

//what do i need now? i need functions to handle the events for focus view. this will mean deleting, editing, and closing the focused view. lets start with closing. 
//close 
const focusViewCloseEvents = () => {
    document.body.addEventListener('click', e => {
        if (e.target.getAttribute('class')!== 'focusViewCloseBtn'){return}
        document.body.removeChild(e.target.closest('.focusViewWrap'));
    })

    //if they click outside the form, closes the card. b.c the wrapper spans whole page.
    document.body.addEventListener('click', e => {
        if (e.target.getAttribute('class') !== 'focusViewWrap'){return}
        document.body.removeChild(document.querySelector('.focusViewWrap'));
    })
}


//deletes the task from simpleView in dom
const focusViewDelete = (ev) => {
    const dataIdElement = ev.target.closest('[data-idfocus]');
    const dataId = dataIdElement.getAttribute('data-idfocus');
    const parentNode = document.querySelector('.tasksInnerWrap')
    //needs to delete from dom, can remove child based on taskid
    //how else? can empty dom and reload taskList
    const targetTask = document.querySelector
    (`[data-id="${dataId}"]`);
    parentNode.removeChild(targetTask);
}



document.body.addEventListener('click', ev => {
    if (ev.target.getAttribute('id') !== 'focusViewDelete'){return}
    focusViewDelete(ev);
    document.body.removeChild(document.querySelector('.focusViewWrap'))
})

document.body.addEventListener('click', ev => {
    if(ev.target.getAttribute('id')!=='focusViewSubmit'){return}
    regenerateTaskList();
    document.body.removeChild(document.querySelector('.focusViewWrap'))
})

const deleteProjectInputs = () => document.querySelector('#whichProject').innerHTML = '';

const loadProjectInputs = () => {
    const selectProjectInput = document.querySelector('#whichProject')
    getProjectOptionElements().forEach(element => {
        selectProjectInput.appendChild(element);
    });
}

//to update the project list on addition in new task form
document.body.addEventListener('submit', ev => {
    if(ev.target.closest('form').getAttribute('id') !== 'newProjectForm'){return}
    deleteProjectInputs();
    loadProjectInputs();  
} )

//to update project list on delete in new task form
document.body.addEventListener('click', ev => {
    if(ev.target.getAttribute('data-projectname') == null){return}
    deleteProjectInputs();
    loadProjectInputs();    
} )



export {renderAllTasksSimpleView, newTaskSubmitEventHandler, focusViewEventHandler, focusViewCloseEvents}