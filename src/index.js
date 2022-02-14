import { taskController, tasksList, taskEventFuncs, taskIdController, getNewTaskFormValues, newTaskEventAdder } 
from "./state-logic";
import {initialPageLoad} from "./landing-page";
import { newTaskSubmitEventHandler, renderAllTasksSimpleView, focusViewEventHandler } from "./task-render";
import './styles.css';

initialPageLoad();
newTaskEventAdder();
newTaskSubmitEventHandler();
focusViewEventHandler();
renderAllTasksSimpleView();
tasksList.getCurrentArr();