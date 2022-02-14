const tasksList = (() => {
    let tasksArr = [
        {
            name: 'name1',
            description: 'des1',
            dueDate: 'due1',
            id: '0'
        },
        {
            name: 'name2',
            description: 'des2',
            dueDate: 'due2',
            id: '1'

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
    //problem: setAttribute forces data-att to be string. when we create tasks it will always need a unique id... what if we only add new id's. even when deleting old ones we don't change anything. lets consider editing ids. the user has form open and it has event listeners. what would they do/ dom: change the values without changing the order of tasks    state: change the state. the way the dom is rendered just iterates over the array. what if we went in numerical task order. 
    // the problem is how to keep the tasklist in order while editing.i think... the answer lays in the id. no wait. even if i get the Id right the object will be pushed into the end of the array. unless i can.. sort.. the array by project id value. 
    // so if i manage the id correctly (edit: keeps same id) add(gen new id) delete(test to see what needs to happen) then we can sort the array before generating it. when should the list be sorted? it won't go out of order unless we edit i think. so around then. it should happen in the state module.once thats all sorted (hah) the taskList can be cleared and regen'd and it should be in order. 
    //ok so  createId needs to be an int. everything else can be a string. tbh i think its easier for id to be a string right now. but as i add more features i may need id to be an int to play around with it. 
    let list = ['0','1'];
    const createID = () => {
        //if list is empty,highestID start at -1, so newID begins at 0
        const highestIdPlusOne = ((list.length === 0 ? -1 : list[list.length-1]) + 1).toString();
        list.push(highestIdPlusOne)
        return (highestIdPlusOne);
    };
    const assignID = (obj) => {
        obj.id = createID();
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