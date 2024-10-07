import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const MoveY = ({ character, comp_id }) => {
  const [steps, setSteps] = useState(0);
  const handleClick = () => {
    const el = document.getElementById(`${character.active}-div`);
    var top = el.offsetTop;
    el.style.position = "relative";
    el.style.top = top + steps + "px";
  };

  return (
    <Paper elevation={3}>
      <div
        id={comp_id}
        className={`text-center rounded bg--700 text-white p-2 my-2 text-sm cursor-pointer mx-auto`}
        onClick={() => handleClick()}
      >
        Move Y{" "}
        <input
          type="number"
          className="text-black text-center w-16 mx-2"
          value={steps}
          onChange={(e) => setSteps(parseInt(e.target.value))}
        />{" "}
        steps
      </div>
    </Paper>
  );
};

const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(MoveY);
