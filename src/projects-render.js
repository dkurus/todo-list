import { tasksList } from "./state-logic";

const makeProjectList = () => {
    const projectsWrapper = document.createElement('div');
    projectsWrapper.classList.add('projectNav');
    
    const projectsTitle = document.createElement('p');
    projectsTitle.innerHTML = 'this is the project list';

    //should also be dynamic 
    //need a "newProject button"
    // need to display default project
    const projectDisplayList = document.createElement('ul');
    const renderProjectItems = () => {
        const allCurrentProjects = projectList.getList();
        allCurrentProjects.forEach(project => {
            const listItem = document.createElement('li');
            listItem.innerHTML = project;
            listItem.setAttribute('class', 'projectItem')
        })
    }

    const newProjectForm = document.createElement('form');

    const newProjectBtn = document.createElement('button');
    newProjectBtn.setAttribute('id', 'newProjectSubmit');
    newProjectBtn.innerHTML = '+';

    const projectInput = document.createElement('input');
    projectInput.setAttribute('placeHolder', 'add a new project');
    projectInput.setAttribute('type', 'text')
    projectInput.setAttribute('id', 'projects')
   
    
    const contentWrapper = document.querySelector('.contentWrapper');
    console.log(contentWrapper);
    contentWrapper.appendChild(projectsWrapper);

    projectsWrapper.appendChild(projectsTitle);
    projectsWrapper.appendChild(projectDisplayList);
    projectsWrapper.appendChild(newProjectForm);
    
    newProjectForm.appendChild(projectInput);
    newProjectForm.appendChild(newProjectBtn);
    
}

const renderEventFunc = () => {

}

export{makeProjectList}