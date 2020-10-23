import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngxs/store';
import { UPDATE_USER } from 'src/app/store/dashboard/dashboard.action';

@Component({
  selector: 'app-user-update-modal',
  templateUrl: './user-update-modal.component.html',
  styleUrls: ['./user-update-modal.component.scss']
})
export class UserUpdateModalComponent implements OnInit {
  skillSets: string[] = ['Java', 'Javascript', 'Html', 'Css', 'Phyton', 'C#'];
  isLoading : boolean = false;

  updateForm : FormGroup;
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store : Store,
    public dialog: MatDialog,
    private dialogRef: MatDialogRef<UserUpdateModalComponent>

  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.updateForm = this.fb.group({
      username: [this.data ? this.data.username : '' , Validators.required],
      email: [this.data ? this.data.email : '', Validators.compose([
        Validators.email,
        Validators.required
      ])],
      phoneNumber: [this.data ? this.data.phoneNumber : '' , Validators.compose([
        Validators.maxLength(10),
        Validators.required,
        Validators.minLength(7)
      ])],
      hobby:[this.data ? this.data.hobby : '', Validators.required],
      skillsets: [this.data ? this.data.skillSets : '']
    })
  }

  onSubmit(){
    this.isLoading = true;
    if(this.updateForm.valid){
      const payload  = {
        email: this.updateForm.value.email,
        username: this.updateForm.value.username,
        phoneNumber: this.updateForm.value.phoneNumber,
        hobby: this.updateForm.value.hobby,
        skillSets: this.updateForm.value.skillsets
      }
      this.store.dispatch(new UPDATE_USER(payload)).subscribe(res=>{
        if(res.Dashboard.updateUser.isSuccess){
          this.isLoading = false;
          this.dialogRef.close(true)
        }
      })
    }
  }
}
