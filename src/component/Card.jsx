import React, { useState } from "react";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import { Button, Checkbox, Slider } from "@mui/material";

const Card = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  return (
    <div className="w-[30%]  bg-[#352F44] flex flex-col gap-5 p-5 rounded-lg text-[#B9B4C7] font-semibold ">
      <div className="flex justify-between text-[#fff]">
        <h1>PS3&SVBIA</h1>
        <div className=" cursor-pointer">
          {" "}
          <FileCopyOutlinedIcon />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <h1>Character Length</h1>
          <h1>{sliderValue}</h1>
        </div>
        <div>
          <Slider
            value={sliderValue}
            onChange={handleSliderChange}
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

      <div className="flex justify-between bg-[#272829] p-5 rounded-lg ">
        <h1>Strength</h1>
        <p>Poor</p>
      </div>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#176B87", height: "3rem" }}
      >
        Generate
      </Button>
    </div>
  );
};

export default Card;
