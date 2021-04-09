import React, { useState } from 'react';
import './Post.css';
import NoReact from '../../img/like-0.svg';
import Like from '../../img/like.svg';
import Comment from '../../img/comment.svg';
import Share from '../../img/share.svg';
import ReactBox from '../ReactBox/ReactBox';


const Post = (props) => {
    const {author, authorImg, authorProfile, postImg, imgAlt} = props.post;
    const [reaction, setReaction] = useState({isReacted: false, icon: NoReact, iconName: 'NoReact'});
    const [disabled, setDisabled] = useState(false);
    const setReactionIcon = (icon, name, react) => setReaction({isReacted: react === undefined ? true : false, icon: icon, iconName: name});
    const handleReactBtn = () => {
        reaction.isReacted ? setReactionIcon(NoReact, 'NoReact', false) : setReactionIcon(Like, 'Like');
    }
    const toggleDisable = () =>{
        setDisabled(true)

        setTimeout(() => {
            setDisabled(false)
        }, 200)
    }


    return (
        <div className="card">
            <div className="card-head">
                <a href={authorProfile} target="_blank" className="card-author-box">
                    <img src={authorImg} alt={author} className="card-author-img"/>
                </a>
                <a href={authorProfile} target="_blank" className="card-name">{author}</a>
            </div>
            <div className="card-body">
                <div className="card-post-box">
                    <img src={postImg} alt={imgAlt} className="card-post-img"/>
                </div>
            </div>
            <div className="card-footer">
                <button className={`react-btn ${disabled ? 'disable' : ''} ${reaction.isReacted ? reaction.iconName.toLowerCase() : ''}`} onClick={() => {handleReactBtn(); toggleDisable()}}>
                    <img src={reaction.icon} alt="React"/> {(reaction.isReacted && reaction.iconName) || 'Like'}
                </button>
                <ReactBox reaction={reaction} setReactionIcon={setReactionIcon} disabled={disabled} toggleDisable={toggleDisable}></ReactBox>
                <button className="comment-box">
                    <img src={Comment} alt="comment"/> Comment
                </button>
                <button className="share-box">
                    <img src={Share} alt="share"/> Share
                </button>
            </div>
        </div>
    );
};

export default Post;