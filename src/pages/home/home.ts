import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    task: string;
    taskList: string[] = [];
    doneTaskList: string[] = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }


  // add task
  addTask(){
  	console.log(this.task);
    var btnValue = document.getElementById('addBtn').value;   // checks if button is for adding or saving edit changes
    if (this.task != ""){                                     // checks if input is not empty

      // for add button
      if (btnValue == "addBTN"){                              
  	    this.taskList.push(this.task);
      }

      // for saving edit changed button
      else if (btnValue == "editBTN"){            
        let index = document.getElementById('taskName').value;    // gets task index from input value
        if (index > -1) {
          this.taskList.splice(index, 1);                   // delete old task
        }
        this.taskList.push(this.task);                      // change to new task

        document.getElementById('label').innerHTML = "Task";
        document.getElementById('addBtn').innerHTML = "ADD TASK";
        document.getElementById('addBtn').value = "addBTN";
      }
    }
  	this.task = "";
  }


  // delete task
  deleteTask(del){
    console.log(del);
    let index = this.taskList.indexOf(del, 0);
      if (index > -1) {
          this.taskList.splice(index, 1);
      }
  }

  
  // update done task
  updateTask(upd){
    console.log(upd);
    this.doneTaskList.push(upd);                            // puts task to Done List
    let index = this.taskList.indexOf(upd, 0);
      if (index > -1) {
          this.taskList.splice(index, 1);                   // delete task from Task List
      }
  }



  // put done task back to task list
  redeclareTask(reTask){        
    this.taskList.push(reTask);                             // puts task back to Task List
    let index = this.doneTaskList.indexOf(reTask, 0);
      if (index > -1) {
          this.doneTaskList.splice(index, 1);               // delete task from Done List
      }
  }


  // edit task name 
  editTask(edit){ 
    console.log(edit);
    document.getElementById('label').innerHTML = "Change Task";
    document.getElementById('addBtn').innerHTML = "Save Changes";
    document.getElementById('addBtn').value = "editBTN";

    let index = this.taskList.indexOf(edit, 0);
    document.getElementById('taskName').value = index;      // set input value to its index for edit purposes
    }
}
