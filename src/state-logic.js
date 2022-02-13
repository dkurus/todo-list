const tasksList = (() => {
    let tasksArr = [
        {
            name: 'name1',
            description: 'des1',
            dueDate: 'due1',
            id: 0
        },
        {
            name: 'name2',
            description: 'des2',
            dueDate: 'due2',
            id: 1

        }
    ];
    const add = (taskObj) => {
        tasksArr.push(taskObj);
    };
    //change to recreate new array? so that we follow immutability principles
    const remove = (taskID) => {
        tasksArr.forEach((element, index) => {
            if (element.id == taskID){
                tasksArr.splice(index, 1);
            };
        });
    };
    const getCurrentArr = () => [...tasksArr];

    const getTaskById = id => tasksArr.filter(taskObj => id === taskObj.id);

    return {
        add,
        remove,
        getCurrentArr,
        getTaskById
    };
})();

//a controller to manage the tasks
const taskController = (() => {
    const create = (name, description, note, project = 'default', priority, dueDate) => {
        return {
            name,
            description,
            note,
            project,
            priority,
            dueDate
        };
    };
    const edit = (taskID) => {
        console.log('editing task');
    }; 

    return {
        create,
        edit,
    };

})();

const taskIdController = (() => {
    let list = [];
    const createID = () => {
        //if list is empty,highestID start at -1, so newID begins at 0
        const highestID = (list.length === 0 ? -1 : list[list.length-1]);
        list.push(highestID+1);
        return highestID += 1;
    };
    const assignID = (obj) => {
        obj.id = createID(list);
    };

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
        const taskObj = taskController.create(task.name, task.description, task.notes, 'default', 'important', task.dueDate);
        taskIdController.assignID(taskObj);
        tasksList.add(taskObj);
    };

    const deleteTask = (taskID) => {
        taskIdController.removeID(taskID);
        tasksList.remove(taskID);
    }
   

    return {
        createTask,
        deleteTask
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


export {taskController, tasksList, taskEventFuncs, taskIdController, getNewTaskFormValues, newTaskEventAdder};