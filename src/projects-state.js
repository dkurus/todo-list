const projectList = (() =>{
    let list = [
        'calculus',
        'coding',
        'chores'
    ];
    const add = projectName => list = [...list, projectName];
    const getList = () => [...list];

    return {
        add,
        getList
    }
})();

const projectIdHandler = (()=> {

})()

document.body.addEventListener('submit', e => {
    e.preventDefault();
    if(e.target.closest('form').getAttribute('id') !== 'newProjectForm'){return}
    const newProjectInput = document.querySelector('#newProjectsInput');
    if (newProjectInput.value === ''){return};
    if (projectList.getList().includes(newProjectInput.value)){
        alert('that project already exists!')
        return
    }
    const projectUl = document.querySelector('#projectUl');
    projectUl.innerHTML = '';
    projectList.add(newProjectInput.value);
    console.log(projectList.getList());
      
})


export {projectList};