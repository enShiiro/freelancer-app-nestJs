import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { CREATE_USER } from 'src/app/store/dashboard/dashboard.action';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  skillSets: string[] = ['Java', 'Javascript', 'Html', 'Css', 'Phyton', 'C#'];
  registerForm: FormGroup

  isLoading: boolean = false;
  isSuccess: boolean = false;
  constructor(
    private fb : FormBuilder,
    private router: Router,
    private store : Store
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.email,
        Validators.required
      ])],
      phoneNumber: ['' , Validators.compose([
        Validators.maxLength(10),
        Validators.required,
        Validators.minLength(7)
      ])],
      hobby:['', Validators.required],
      skillsets: ['']
    })
  }

  navigateToDashboard(){
    this.router.navigate(["/freelancer"])
  }

  onSubmit(){
    this.isLoading = true;
    const payload = {
      email: this.registerForm.value.email,
      username: this.registerForm.value.username,
      phoneNumber: this.registerForm.value.phoneNumber,
      hobby: this.registerForm.value.hobby,
      skillSets: this.registerForm.value.skillsets
    }

    this.store.dispatch(new CREATE_USER(payload)).subscribe(res=>{
      console.log('create user: ' , res.Dashboard.createUser.isSuccess);
      this.isLoading = false;
      if(res.Dashboard.createUser.isSuccess){
        this.isSuccess = true;
        setTimeout(() => {
          this.isSuccess = false;
        }, 1000);
      }
      
    })
  }
}
