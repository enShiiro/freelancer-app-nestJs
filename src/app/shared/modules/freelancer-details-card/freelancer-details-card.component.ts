import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { DELETE_USER, GET_FREELANCER_LIST } from 'src/app/store/dashboard/dashboard.action';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserUpdateModalComponent } from '../user-update-modal/user-update-modal.component';

@Component({
  selector: 'app-freelancer-details-card',
  templateUrl: './freelancer-details-card.component.html',
  styleUrls: ['./freelancer-details-card.component.scss']
})
export class FreelancerDetailsCardComponent implements OnInit {

  @Input() data ;
  constructor(
    private store: Store,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  onDelete(){
    this.store.dispatch(new DELETE_USER(this.data._id)).subscribe(res=>{
      if(res){
        this.store.dispatch(new GET_FREELANCER_LIST);
      }
    })
  }
  onEdit(){
    const dialogRef = this.dialog.open(UserUpdateModalComponent , {minWidth: '400px' , data: this.data})
    dialogRef.afterClosed().subscribe(res=>{
      if(res){
        this.store.dispatch(new GET_FREELANCER_LIST)
      }
    })
  }
}
