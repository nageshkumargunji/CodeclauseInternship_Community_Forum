const MyMessage=({message})=>{
    if(message?.attachements?.length>0){
    return (
        <img
        src={message.attachements[0].file}
        alt="message-attachment"
        className="message-image"
        style={{float:'right'}}
        ></img>
    )
    }
    return (
        <div className="message" style={{float:'right',marginRight:'18px',color:'white',backgroundColor:'#3B2A50'}} >
Mymessage
        </div>
    )
    }
    export default MyMessage;