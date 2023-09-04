import React from "react";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import { Button, Checkbox, Slider } from "@mui/material";
const Card = () => {
  return (
    <div className="w-[30%]  bg-slate-400 flex flex-col gap-5 p-5 rounded-lg ">
      <div className="flex justify-between">
        <h1>PS3&SVBIA</h1>
        <FileCopyOutlinedIcon />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <h1>Character Length</h1>
          <h1>4</h1>
        </div>
        <div>
          <Slider
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </div>
      </div>

      <div>
        <div className="pl-2 flex w-full  items-center">
          <Checkbox
            sx={{
              // color: pink[800],
              "&.Mui-checked": {
                //   color: pink[600],
              },
            }}
          />
          <p>Include Uppercase Letters</p>
        </div>
        <div className="pl-2 flex w-full  items-center">
          <Checkbox
            sx={{
              // color: pink[800],
              "&.Mui-checked": {
                //   color: pink[600],
              },
            }}
          />
          <p>Include Lowercase Letters</p>
        </div>
        <div className="pl-2 flex w-full  items-center">
          <Checkbox
            sx={{
              // color: pink[800],
              "&.Mui-checked": {
                //   color: pink[600],
              },
            }}
          />
          <p>Include Numbers</p>
        </div>
        <div className="pl-2 flex w-full  items-center">
          <Checkbox
            sx={{
              // color: pink[800],
              "&.Mui-checked": {
                //   color: pink[600],
              },
            }}
          />
          <p>Include Symbols</p>
        </div>
      </div>

      <div className="flex justify-between">
        <h1>Strength</h1>
        <p>Poor</p>
      </div>
      <Button variant="contained">Generate</Button>
    </div>
  );
};

export default Card;
