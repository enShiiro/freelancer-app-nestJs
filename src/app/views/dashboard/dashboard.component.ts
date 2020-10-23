import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { GET_FREELANCER_LIST, FIND_USER } from 'src/app/store/dashboard/dashboard.action';
import { DashboardState } from 'src/app/store/dashboard/dashboard.state';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Select(DashboardState.loading) loading$;
  @Select(DashboardState.freelancerList) freelancerList$;
  @Select(DashboardState.serchedUser) searchedUser$;
  onSearch: boolean = false;
  searchForm : FormGroup
  constructor(
    private store: Store,
    private router: Router,
    private fb : FormBuilder
  ) { }
  
  ngOnInit() {
    this.initForm();``
    this.getFreelancerList();
  }

  initForm(){
    this.searchForm = this.fb.group({
      search: ['']
    })
  }
  getFreelancerList(){
    this.store.dispatch(new GET_FREELANCER_LIST);
  }
  navigateToRegistration(){
    this.router.navigate(["../"])
  }
  clearSearchInput(){
    this.searchForm.controls.search.setValue(null)
  }

  onSubmit(){
    this.onSearch = true;
    const user = this.searchForm.value.search;
    console.log(user);
    
    this.store.dispatch(new FIND_USER(user)).subscribe(res=>{
      console.log('res: ' ,res.Dashboard.searchedUser);
      
    })
  }
}
