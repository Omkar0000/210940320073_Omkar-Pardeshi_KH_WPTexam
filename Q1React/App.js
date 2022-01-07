import {useState} from "react";

export default function App() {
  const [message,setmessage]=useState("");
  const [messageList,setmessageList]=useState([]);
  const processmessage = (e) =>{
    setmessage(e.target.value);
  }

  const handlesend=()=>{
    const newList = [message,...messageList];
    setmessageList(newList);
    setmessage("");
  }
  return <div>
     <header className="bg-secondary text-light p-3">MyChatApp by Omkar Pardeshi 210940320073_KH</header>

     <div className="row my-3">
       <div className="col-10 p-1">
       <input type="text" className="form-control mt-2" value={message} placeholder="Let's chat here ..." onChange={processmessage}/>
       </div>
       <div className="col-2 p-1">
       <input type="button" className="btn btn-secondary w-100 mt-2" value="send" onClick={handlesend}/>
       </div>
       </div>
     {messageList.map((item,index)=>(
       <div className="bg-secondary bg-opacity-50 mt-1" key={index}>{item}</div>
     ))}
   </div>
}



