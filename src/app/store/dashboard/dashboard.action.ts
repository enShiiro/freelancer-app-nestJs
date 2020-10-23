
const PREFIX = 'DASHBOARD';

export class CREATE_USER{
    static readonly type = `[${PREFIX}] CREATE USER`;
    constructor(public payload){}
}

export class GET_FREELANCER_LIST{
    static readonly type = `[${PREFIX}] GET FREELANCER LIST`;
}

export class DELETE_USER{
    static readonly type = `[${PREFIX}] DELETE USER`;
    constructor(public payload){}

}

export class UPDATE_USER{
    static readonly type = `[${PREFIX}] UPDATE USER`;
    constructor(public payload){}

}

export class FIND_USER{
    static readonly type = `[${PREFIX}] FIND USER`;
    constructor(public payload){}

}
