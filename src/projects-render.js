import { tasksList } from "./tasks-state";
import { projectList } from "./projects-state";

const makeProjectList = () => {
    const projectsWrapper = document.createElement('div');
    projectsWrapper.classList.add('projectNav');
    
    const projectsTitle = document.createElement('p');
    projectsTitle.innerHTML = 'this is the project list';

    //should also be dynamic 
    //need a "newProject button"
    // need to display default project
    const projectDisplayList = document.createElement('ul');
    projectDisplayList.setAttribute('id', 'projectUl')
    const newProjectForm = document.createElement('form');
    newProjectForm.setAttribute('id', 'newProjectForm');

    const newProjectBtn = document.createElement('button');
    newProjectBtn.setAttribute('id', 'newProjectSubmit');
    newProjectBtn.innerHTML = '+';

    const projectInput = document.createElement('input');
    projectInput.setAttribute('placeHolder', 'add a new project');
    projectInput.setAttribute('type', 'text');
    projectInput.setAttribute('id', 'newProjectsInput');
   
    
    const contentWrapper = document.querySelector('.contentWrapper');
    contentWrapper.appendChild(projectsWrapper);

    projectsWrapper.appendChild(projectsTitle);
    projectsWrapper.appendChild(projectDisplayList);
    projectsWrapper.appendChild(newProjectForm);
    
    newProjectForm.appendChild(projectInput);
    newProjectForm.appendChild(newProjectBtn);
}

const renderProjectItems = () => {
    let listContainer = document.querySelector('#projectUl')
    const allCurrentProjects = projectList.getList();
    //what am i tryna doo? i want a function that takes a project string item, and uses it to create a li element and append it.
    const renderProjectItem = project => {
        const listItem = document.createElement('li');
        listItem.innerHTML = project;
        listItem.setAttribute('class', 'projectItem')
        return listItem;
    }
    const projectRemoveButton = project => {
        const removeBtn = document.createElement('button');
        removeBtn.innerHTML = 'x';
        removeBtn.setAttribute('data-projectName', project);
        return removeBtn;
    }

    allCurrentProjects.forEach(project => {
      const itemWrapper = document.createElement('div')
      itemWrapper.setAttribute('class', 'projectItemWrap');
      itemWrapper.appendChild(renderProjectItem(project));
      itemWrapper.appendChild(projectRemoveButton(project));
      listContainer.appendChild(itemWrapper);
    })
}

const deleteProjectItems = () => { 
    const projectUl = document.querySelector('#projectUl');
    projectUl.innerHTML = '';
}

// how should we create and display the project list? we will have to be able to delete them as well and handle those cases. probably similiar to the way we handled tasks. that means the projects will need an id as well..

document.body.addEventListener('submit', e => {
    e.preventDefault();
    if(e.target.closest('form').getAttribute('id') !== 'newProjectForm'){return}
    deleteProjectItems();
    renderProjectItems();
    e.target.closest('form').reset(); 
})

// how should i delete... i think actually, just use regenerate task list? after clearing the dom?
document.body.addEventListener('click', e => {
    if(e.target.getAttribute('data-projectName') == null){return}
    deleteProjectItems();
    renderProjectItems();
})






export{makeProjectList, renderProjectItems}