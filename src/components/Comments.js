import React from 'react';
import CommentContext from '../contexts/CommentContext';
import { Link } from 'react-router-dom';

const Comments = () => {
    return (
        <CommentContext.Consumer>
        {
            ({ comment }) => {
                return <div>
                    <h2>Comments</h2>
                    <Link to="/comments/new">Add New Comment</Link>
                    {console.log(comment)}
                    <div>
                        {comment.map((c) => {
                            return (
                                <div key={c.commentId}>
                                    <h2>{c.commentTitle} | {c.RecipeRecipeId}</h2>
                                    <p>{c.UserUserId}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
        }
        </CommentContext.Consumer>
    );
}

export default Comments;