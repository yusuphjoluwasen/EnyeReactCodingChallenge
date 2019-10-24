import React from "react";
import {red} from "@material-ui/core/colors";

export const FormComponent = ({onSubmit, register}) => {


  return(
      <div>
          <form onSubmit={onSubmit}>
              <input
                  type="text"
                  placeholder="FIRST NAME"
                  name="first"
                  style={{backgroundColor:red}}
                  ref={register({required: true, maxLength: 80})}
              />
              <br/>
              <input
                  type="text"
                  placeholder="LAST NAME"
                  name="last"
                  ref={register({required: true, maxLength: 80})}/>
              <input
                  type="date"
                  placeholder="BIRTHDAY"
                  name="birthday"
                  ref={register({required: true, maxLength: 80})} />
              <input
                  type="text"
                  placeholder="AGE"
                  name="age"
                  ref={register({required: true, maxLength: 80})} />
              <input
                  type="text"
                  placeholder="HOBBY"
                  name="hobby"
                  ref={register({required: true, maxLength: 80})} />
              <input type="submit" value="Submit"/>
          </form>
      </div>
  )
};

