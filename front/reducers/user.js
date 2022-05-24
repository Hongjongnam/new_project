import { createAction ,  handleActions } from 'redux-actions'

const initialState = {
    me : { // isLogin 이 false 경우 me라는 객체가 필요가없음  
        // me가 뭐냐면 isLogin이 true 일경우 해당정보를 담는 객체
        id:null,
        email:null,
        nickname:null,
        provider:null, // 사용하는 플랫폼 마다 다르게 설정해줄수있음  카카오 로그인이나 뭐 구글 또는 로컬에서 로그인했으면 local 이런식으로 됨
        
        
        // 나중에 회원정보같은거 가져올때 me만 가져오면 됨 
        
    },
    isLogin:false,
    error:null,
    loadding:false,
}

const user = (state = initialState ,action ) => {
    switch (action) {
        default:
            return state;
            
    }
}

user()

/*
user() 함수를 호출하면 나오는 결과값 

const initialState = {
    me : {
        id:null,
        email:null,
        nickname:null,
        provider:null,
        
    },
    isLogin:false,
}
 

*/

export default user 