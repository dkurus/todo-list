import { taskController, tasksList, taskEventFuncs, taskIdController, getNewTaskFormValues, newTaskEventAdder } 
from "./tasks-state";
import { projectList } from "./projects-state";
import {initialPageLoad} from "./landing-page";
import { newTaskSubmitEventHandler, renderAllTasksSimpleView, focusViewEventHandler, focusViewCloseEvents} from "./task-render";
import { makeProjectList, renderProjectItems } from "./projects-render";
import './styles.css';


initialPageLoad();
newTaskEventAdder();
newTaskSubmitEventHandler();
focusViewEventHandler();
focusViewCloseEvents();
renderAllTasksSimpleView();
tasksList.getCurrentArr();
renderProjectItems();