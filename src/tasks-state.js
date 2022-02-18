const tasksList = (() => {
    let tasksArr = [];
    const create = (name, description, note, project, priority, dueDate) => {
        return {
            name,
            description,
            note,
            project,
            priority,
            dueDate
        };
    };

    const add = taskObj => tasksArr = [...tasksArr, taskObj];

    const remove = taskId => {
        tasksArr = tasksArr.filter(taskObj => taskObj.id !== taskId);
    }
    const getCurrentArr = () => [...tasksArr];

    const getTaskById = id => tasksArr.filter(taskObj => id === taskObj.id);

    const sortList = () => {
        tasksArr.sort ((a,b) => {
            if (a.id < b.id) {return -1}
        })
    }
    
    return {
        create,
        add,
        remove,
        getCurrentArr,
        getTaskById,
        sortList
    };
})();

//whats the problem. how can we delete tasks without an id system? we could go by name but what if they make duplicates. remove ability to make duplicates? lets first consider this. what features do we want? when the user clicks a project it should simply show all the tasks associated with it. the user should also be able to delete projects. and edit the projects name. in which case each project label should come with 2 buttons, edit and delete. i think i will make it so that duplicate project names cannot be added. and then target projects in state and dom with the project names
const taskIdController = (() => {
    let list = [];
    const createID = () => {
        //if list is empty,highestID start at -1, so newID begins at 0
        const highestIdPlusOne = ((list.length === 0 ? -1 : list[list.length-1]) + 1).toString();
        list.push(highestIdPlusOne)
        return (highestIdPlusOne);
    };
    const assignID = obj => obj.id = createID();
    

    const removeID = (taskID) => {
        list = list.filter(eachID => eachID !== taskID);
    }
    const getList = () => {console.log(list)}
    return {
        assignID,
        removeID,
        getList
    };
})()

const taskEventFuncs = (() => {
    const createTask = () => {
        const task = getNewTaskFormValues();
        const taskObj = tasksList.create(task.name, task.description, task.notes, task.project, task.priority, task.dueDate);
        taskIdController.assignID(taskObj);
        tasksList.add(taskObj);
    };

    const deleteTask = (taskId) => {
        taskIdController.removeID(taskId);
        tasksList.remove(taskId);
    }
   
    //to delete taskObj, create new one, and keep same id val
    //one thing i wonder though, is will this implementation show keep the tasks in order for the dom? lets consider. new tasks will look at the idList, and get an id thats 1+ the highest. edit task doesn't touch the idList. deleteTask, will delete the id of corresponding task. 
    const editTask = taskId => {
        const [targetTask] = tasksList.getTaskById(taskId);
        //ok so we have the target task stored, so now we need to form input values
        // what are we trying to do? we want to create a new task obj to replace the old one.. what does this mean..? we have to target the oldTask and delete it by id. then we create a newTask and append it to the task list. followed by sorting the taskList
        targetTask.name = document.querySelector("input[name='focusTaskName']").value;

        targetTask.description = document.querySelector("input[name='focusTaskDescription']").value;

        targetTask.notes = document.querySelector("textarea[name='focusTaskNotes']").value;

        targetTask.project = 'hi'
        // document.querySelector('#editProjectInput').value;

        targetTask.priority = document.querySelector('#editpriorityinput').value;
       
        targetTask.dueDate = document.querySelector("input[name='focusDueDate']").value;

        targetTask.id = taskId;

        const updatedTaskObj = tasksList.create(
            targetTask.name,
            targetTask.description,
            targetTask.notes,
            targetTask.project,
            targetTask.priority,
            targetTask.dueDate,
        )
        //we don't need reference to oldTask anymore and we don't want duplicate tasks
        tasksList.remove(taskId);

        //the new obj should have same id as old
        updatedTaskObj.id = taskId;
        tasksList.add(updatedTaskObj)

        //the order of taskLists needs to be maintained for dom
        tasksList.sortList();
       
        console.log (tasksList.getCurrentArr())
        
    }
    return {
        createTask,
        deleteTask,
        editTask
    };
})();
// const projectsList = (() => {
//     const arrList = [];
//     const getProjectList = () => {console.log('reduce taskList to get projectNames w/o duplicates and push into arrList')};
//     const getArrList = () => { console.log(arrList);}
// })();


//dom method -  getTaskID =  return element.queryselect.getattribute(data-id: x)

const getNewTaskFormValues = () => {
    return  {
        name: document.querySelector("input[name='taskName']").value,
        description: document.querySelector("input[name='taskDescription']").value,
        notes: document.querySelector("textArea[name='taskNotes']").value,
        project: document.querySelector("#whichProject").value,
        priority: document.querySelector("#priorityInput").value,
        dueDate: document.querySelector("input[name='dueDate']").value
    }
}

const newTaskEventAdder = () => {
    const saveBtn = document.querySelector("button[id='newTaskSubmit']");
    saveBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(document.querySelector("input[name='taskName']").value === ''){return};
        taskEventFuncs.createTask();
        document.querySelector("form[id='newTaskForm']").reset();
    });
    console.log(tasksList.getCurrentArr());
}


//to remove task and id from lists
document.body.addEventListener('click', e => {
    if(e.target.getAttribute('id') !== 'focusViewDelete'){return}
    const targetTask = e.target.closest('[data-idfocus]');
    const targetId = targetTask.getAttribute('data-idfocus');
    taskEventFuncs.deleteTask(targetId);
})


document.body.addEventListener('click', e => {
    if (e.target.getAttribute('id')!=='focusViewSubmit'){return};
    const targetTask = e.target.closest('[data-idfocus]');
    const targetId = targetTask.getAttribute('data-idfocus');
    taskEventFuncs.editTask(targetId);
})


export {tasksList, taskEventFuncs, taskIdController, getNewTaskFormValues, newTaskEventAdder};