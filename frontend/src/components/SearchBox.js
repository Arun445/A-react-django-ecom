import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSpring, animated as a, config } from "react-spring";

function SearchBox() {
  let history = useHistory();

  const [keyword, setKeyword] = useState("");
  const [searchStatus, displaySearch] = useState(false);
  const myRef = React.createRef();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      history.push(`/?keyword=${keyword}&page=1`);
      setKeyword("");
      displaySearch(false);
    }
  };

  const contentProps = useSpring({
    opacity: searchStatus ? 1 : 0,
    marginLeft: searchStatus ? 0 : -200,
  });
  const contentPropsNo = useSpring({
    opacity: searchStatus ? 1 : 0,
    marginLeft: searchStatus ? 0 : -230,
  });

  const selecting = () => {
    displaySearch((search) => !search);
  };

  useEffect(() => {
    if (searchStatus) {
      myRef.current.focus();
    }
  }, [searchStatus]);

  return (
    <Form onSubmit={submitHandler} inline>
      <Button
        variant="secondary"
        type="submit"
        className="mr-sm-2 ml-sm-5 p-2 "
        onClick={
          keyword.length == 0
            ? selecting
            : () => displaySearch((search) => search)
        }
      >
        <i className="fas fa-search fa-lg"></i>
      </Button>
      {!searchStatus ? (
        <a.div style={contentPropsNo}>
          <Form.Control className="sm " disabled size="sm"></Form.Control>
        </a.div>
      ) : (
        <a.div style={contentProps}>
          <Form.Control
            ref={myRef}
            type="text"
            name="q"
            className="sm pr-5"
            size="sm"
            placeholder="search for.."
            value={keyword || ""}
            onChange={(e) => setKeyword(e.target.value)}
            onBlur={
              keyword.length == 0
                ? () => displaySearch((search) => !search)
                : () => displaySearch((search) => search)
            }
          ></Form.Control>
        </a.div>
      )}
    </Form>
  );
}

export default SearchBox;
