const tasksList = (() => {
    let tasksArr = [
        {
            name: 'name4',
            description: 'des4',
            dueDate: 'due4',
            id: '4'
        },
        {
            name: 'name2',
            description: 'des2',
            dueDate: 'due2',
            id: '2'
        },
        {
            name: 'name1',
            description: 'des1',
            dueDate: 'due1',
            id: '1'
        }
    ];
    const create = (name, description, note, project = 'default', priority = 'default', dueDate) => {
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

const taskIdController = (() => {
    let list = ['0','1'];
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
        const taskObj = tasksList.create(task.name, task.description, task.notes, 'default', 'important', task.dueDate);
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

        targetTask.dueDate = document.querySelector("input[name='focusDueDate']").value;

        targetTask.id = taskId;

        const updatedTaskObj = tasksList.create(
            targetTask.name,
            targetTask.description,
            targetTask.notes,
            'default',
            'default',
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
        dueDate: document.querySelector("input[name='dueDate']").value,
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
}

const focusViewDeleteEvent = () => {

}

//to remove task and id from lists
document.body.addEventListener('click', e => {
    if(e.target.getAttribute('id') !== 'focusViewDelete'){return}
    const targetTask = e.target.closest('[data-idfocus]');
    const targetId = targetTask.getAttribute('data-idfocus');
    taskEventFuncs.deleteTask(targetId);
    console.table(tasksList.getCurrentArr(), taskIdController.getList());
})


document.body.addEventListener('click', e => {
    if (e.target.getAttribute('id')!=='focusViewSubmit'){return};
    const targetTask = e.target.closest('[data-idfocus]');
    const targetId = targetTask.getAttribute('data-idfocus');
    taskEventFuncs.editTask(targetId);
})


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


document.body.addEventListener('keyup', e => {
    //to run, it has to be an input element inside the project nav 
    if (e.target.closest('.projectNav') == null && e.target.tagName !== 'INPUT'){return}
    const projectValue = e.target.value;
    projectList.add(projectValue);
    console.log(projectList.getList());    
})
export {tasksList, taskEventFuncs, taskIdController, getNewTaskFormValues, newTaskEventAdder, projectList};