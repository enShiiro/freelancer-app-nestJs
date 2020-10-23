import { State, Selector, Action, StateContext } from '@ngxs/store'
import { CREATE_USER, GET_FREELANCER_LIST, DELETE_USER, UPDATE_USER, FIND_USER } from './dashboard.action';
import { DashboardService } from './dashboard.service';
import { map } from 'rxjs/operators'
export class DashboardStateModel {
    loading: boolean;
    createUser: {
        isSuccess:boolean,
        errorMsg: string
    };
    updateUser: {
        isLoading: boolean,
        isSuccess: boolean
    }
    searchedUser:{
        isloading: boolean,
        userList: any
    }
    freelancerList: any[];
}

@State<DashboardStateModel>({
    name: 'Dashboard',
    defaults: {
        loading: false,
        createUser: null,
        freelancerList: null,
        updateUser: null,
        searchedUser: null
    }
})

export class DashboardState {

    constructor(
        private dashboardService: DashboardService
    ) { }
    @Selector()
    static freelancerList(state: DashboardStateModel) {
        return state.freelancerList ? state.freelancerList : [];
    }

    @Selector()
    static loading(state: DashboardStateModel) {
        return state.loading;
    }
    @Selector()
    static serchedUser(state: DashboardStateModel) {
        return state.searchedUser;
    }

    @Action(GET_FREELANCER_LIST)
    public getFreelancerList({ patchState }: StateContext<DashboardStateModel>) {
        patchState({ loading: true })
        return this.dashboardService.getFreelancerList().pipe(
            map(res => {
                if (res) {
                    patchState({
                        freelancerList: res,
                        loading: false
                    })
                }
            })
        )
    }

    @Action(CREATE_USER)
    public createUser({ patchState }: StateContext<DashboardStateModel>,
        { payload }: CREATE_USER) {
        patchState({ loading: true })
        return this.dashboardService.createUser(payload).pipe(
            map(res => {
                    patchState({
                        loading: false,
                        createUser:{
                            isSuccess: res? true : false,
                            errorMsg: res? null : res.message
                        }
                    })
            })
        )
    }

    @Action(DELETE_USER)
    public deleteUser({ patchState }: StateContext<DashboardStateModel>,
        { payload }: DELETE_USER) {
        // patchState({ loading: true })
        return this.dashboardService.deleteUser(payload)
       
    }
  
    @Action(UPDATE_USER)
    public updateUser({ patchState }: StateContext<DashboardStateModel>,
        { payload }: UPDATE_USER) {
        patchState({ 
            updateUser:{
                isLoading:true,
                isSuccess: false
            } 
        })
        return this.dashboardService.updateUser(payload).pipe(
            map(res =>{
                if(res){
                    patchState({
                        updateUser:{
                            isLoading: false,
                            isSuccess:true
                        }
                    })
                }
            })
        )
       
    }
  
    @Action(FIND_USER)
    public findUser({ patchState }: StateContext<DashboardStateModel>,
        { payload }: FIND_USER) {
        patchState({ 
            searchedUser:{
                isloading:true,
                userList: null
            } 
        })
        return this.dashboardService.findUser(payload).pipe(
            map(res =>{
                console.log('search user: ' , res);
                    patchState({
                        searchedUser:{
                            isloading: false,
                            userList: res? res : null
                        }
                    })
            })
        )
    }
   
}