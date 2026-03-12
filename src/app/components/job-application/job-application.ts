import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-application',
  imports: [ReactiveFormsModule],
  templateUrl: './job-application.html',
  styleUrl: './job-application.css',
})
export class JobApplication {
form!:FormGroup;
  constructor(private fb:FormBuilder){
    this.form = this.fb.group({
      candidateName:"",
      workExperiences:this.fb.array([])
    })
  }


  get workExperiences(){
    return this.form.get('workExperiences') as FormArray
  }


  addWorkExperience(){
    this.workExperiences.push(this.fb.control('',Validators.required));
  }

  removeWorkExperience(index:number){
    this.workExperiences.removeAt(index);
  }

  saveDetails(){
    console.log(this.form.value)
  }

}
