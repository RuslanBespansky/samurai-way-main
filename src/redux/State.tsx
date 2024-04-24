// import {rerenderEntireTree} from '../redux/Render'


let rerenderEntireTree =()=>{
console.log("hello")
}

export const subscribe=(callback:()=>void)=>{
  rerenderEntireTree = callback;
}





type MessageType = {
  id: number;
  message: string;
};

type DialogsDataType = {
  id: number;
  name: string;
};

export type PostDataType = {
  id: number;
  message: string;
  like: number;

};




type ProfilePageType = {
  postData: Array<PostDataType>;
  newPostText:string;
};

type DialogsPageType = {
  messages: Array<MessageType>;
  dialogsData: Array<DialogsDataType>;
};

type SidebarType = {};

export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
  sidebar: SidebarType;
};

// export let state: RootStateType = {
//   profilePage: {
//     postData: [
//       { id: 1, message: "Hi, how are you?", like: 15 },
//       { id: 2, message: "It's  my firs post", like: 8 },
//       { id: 3, message: "It's  me", like: 23 },
//       { id: 4, message: "HELLO", like: 5 },
//     ],
//     newPostText:'it.rus'
//   },
//   dialogsPage: {
//     messages: [
//       { id: 1, message: "Hi" },
//       { id: 2, message: "How are you?" },
//       { id: 3, message: "Hello" },
//     ],
//     dialogsData: [
//       { id: 1, name: "Ruslan" },
//       { id: 2, name: "Max" },
//       { id: 3, name: "Inna" },
//       { id: 4, name: "Artur" },
//       { id: 5, name: "Lena" },
//       { id: 6, name: "Veronika" },
//     ],
   
//   },
  

//   sidebar: {},
// };


// export const addPost = (postMessage: string) => {
//   let newPost:PostDataType = {
//     id: 5,
//     message: postMessage,
//     like: 0,
//   };

//   state.profilePage.postData.push(newPost);
//   state.profilePage.newPostText=""
//   rerenderEntireTree(state);
// };


// export const changeNewPostText = (newText: string) => {
//   state.profilePage.newPostText = newText;
//   rerenderEntireTree(state);
//   };





//store


  export type StoreType={
    _state:RootStateType
    changeNewPostText: (newText: string)=>void
    addPost:(postMessage: string)=>void
    getState:()=>RootStateType
    _rerenderEntireTree:()=>void
    subscribe:(callback:()=>void)=>void

  }
  
  const store:StoreType={
     _state: {
      profilePage: {
        postData: [
          { id: 1, message: "Hi, how are you?", like: 15 },
          { id: 2, message: "It's  my firs post", like: 8 },
          { id: 3, message: "It's  me", like: 23 },
          { id: 4, message: "HELLO", like: 5 },
        ],
        newPostText:'it.rus'
      },
      dialogsPage: {
        messages: [
          { id: 1, message: "Hi" },
          { id: 2, message: "How are you?" },
          { id: 3, message: "Hello" },
        ],
        dialogsData: [
          { id: 1, name: "Ruslan" },
          { id: 2, name: "Max" },
          { id: 3, name: "Inna" },
          { id: 4, name: "Artur" },
          { id: 5, name: "Lena" },
          { id: 6, name: "Veronika" },
        ],
       
      },
      
    
      sidebar: {},
    },
    changeNewPostText (newText: string) {
      this._state.profilePage.newPostText = newText;
      this._rerenderEntireTree();
      },
      addPost(postMessage: string) {
        let newPost:PostDataType = {
          id: 5,
          message: postMessage,
          like: 0,
        };
      
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText=""
        this._rerenderEntireTree();
      },
       _rerenderEntireTree(){
        console.log("hello")
        },
        
      subscribe(callback){
          this._rerenderEntireTree = callback;
        },

      getState(){
        return this._state
      }
  }


export default store;
