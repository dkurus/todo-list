const projectList = (() =>{
    let list = [
        'Default',
        'calculus',
        'coding',
        'chores'
    ];
    const add = projectName => list = [...list, projectName];
    const remove = projectName => list = list.filter(item => item !== projectName)
    const getList = () => [...list];
    
    return {
        add,
        remove,
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
    projectList.add(newProjectInput.value);
    console.log(projectList.getList());
})

document.body.addEventListener('click', e => {
    if(e.target.getAttribute('data-projectName') == null){return}
    const targetProject = e.target.getAttribute('data-projectName');
    projectList.remove(targetProject)
} )


export {projectList};