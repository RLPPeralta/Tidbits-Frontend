import React, { useContext, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";
import CommentContext from "../contexts/CommentContext";
import RecipeContext from "../contexts/RecipeContext";

const AddComment = () => {
  let params = useParams();

  const [addComment, setAddComment] = useState({
    RecipeRecipeId: params.recipeId,
    commentTitle: "",
    recipeId: "",
  });
  let recipeId = params.recipeId;

  let { createComment } = useContext(CommentContext);
  let navigate = useNavigate();

  function handleChange(event) {
    setAddComment((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    createComment(addComment)
      .then(() => {
        navigate(`/recipe/${recipeId}`);
      })
      .catch((error) => {
        console.log(error);
        navigate("/signin");
      });
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <div className="">
            <Form.Control
              className="custom-search-input"
              placeholder="type your comment here (must be signed in)"
              type="text"
              name="commentTitle"
              value={addComment.commentTitle}
              onChange={handleChange}
            />

            <Button class="buttonSearchComment" type="submit">Submit</Button>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddComment;