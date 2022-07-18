import "./container.css"
import { useState } from 'react';

function VideoBox(props){
    const [likecount, setLikecount] = useState(0);
    function addlikecount(){
        setLikecount(likecount+1);
    }
    function adddislikecount(){
        setLikecount(likecount-1)
    }
    return (
        <div className="videobox">
            <div >
                <Like count={likecount} addlikefunc={addlikecount} adddislikefunc={adddislikecount}/>
            </div>
            <iframe title={props.data.id} width="240" height="200" src={props.data.url.replace("watch?v=","embed/")}></iframe>
            <p className="title-style">{props.data.title}</p>
            <div className="delete-button-box">
                <button className="delete-button" onClick={()=>{props.funcdelete(props.data.id)}}>Delete</button>            
            </div>
        </div>
    )
}
function Like(props){
    let likestyle = props.count >= 0? "greenlike" : "redlike";
    return (
        <div className="like-box">
            <img className="button-like" onClick={props.addlikefunc} id="image" width="30" height="30" src="https://pngimg.com/uploads/like/small/like_PNG8.png" alt="london" />
            <span className={likestyle}>{props.count}</span>
            <img className="button-dislike" onClick={props.adddislikefunc} id="image" width="30" height="30" src="https://pngimg.com/uploads/dislike/dislike_PNG53.png" alt="london" />
            
        </div>
    )
}
function Addform(props){
    return (
        <div id="addform" className="addform">
            <div className="title-video">
                <span>Title: </span>
                <input id="title-input" placeholder="Please input Title..."></input>
            </div>
            <div className="title-video">
                <span>URL: </span>
                <input id="url-input" placeholder="Please input URL..."></input>
            </div>
            <div>
                <button className="cancel-button" onClick={()=>{
                    let addformel = document.getElementById("addform");
                    addformel.style.display = "none";
                }}>Cancel</button>
                <button className="cancel-button" onClick={()=>{
                    let title = document.getElementById("title-input");
                    let url = document.getElementById("url-input");
                    props.addvideofunc(title.value, url.value);
                }}>Add</button>
            </div>
        </div>
    )
}

function Container(props){
    const [videolist, setVideolist] = useState(props.data)
    function deleteVideo(id) {
        setVideolist(videolist.filter(e => e.id !== id))
    }
    function addVideo(title, url) {
        let newvideo = {"id" : 1, "title" : title, "url" : url, "rating" : 20};
        setVideolist(props.data.concat(newvideo));
    }
    return (
        <div>
            <div className="sear-add-chbox">
                <button onClick={()=>{
                    let addformel = document.getElementById("addform");
                    addformel.style.display = "block";
                }}>Add</button>
                <Addform addvideofunc={addVideo}/>
            </div>
            <div className="container">
                {videolist.map(e=> <VideoBox key={e.id} data={e} funcdelete={deleteVideo}/>)}
            </div>
        </div>
    )
}

export default Container;