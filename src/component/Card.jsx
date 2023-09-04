import React, { useState } from "react";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import { Button, Checkbox, Slider } from "@mui/material";

const Card = () => {
  const [sliderValue, setSliderValue] = useState(50);
  const arr = ["", "", "", ""];
  const mapLevels = [1, 2, 3, 4];

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const getColorForStrength = (level) => {
    const redValue = Math.min(255, Math.floor(sliderValue * 2.55));
    const greenValue = 255 - redValue;

    return `rgb(${redValue}, ${greenValue}, 0)`;
  };

  return (
    <div className="w-[30%]  bg-[#352F44] flex flex-col gap-5 p-5 rounded-lg text-[#B9B4C7] font-semibold ">
      <div className="flex justify-between text-[#fff]">
        <h1 className=" font-bold text-lg">PS3&SVBIA</h1>
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
            sx={{
              color: "#176B87",
              "& .MuiSlider-valueLabel": {
                color: "#176B87",
              },
            }}
          />
        </div>
      </div>

      <div>
        <div className="pl-2 flex w-full  items-center">
          <Checkbox
            sx={{
              color: "#176B87",
              "&.Mui-checked": {
                color: "#176B87",
              },
            }}
          />
          <p>Include Uppercase Letters</p>
        </div>
        <div className="pl-2 flex w-full  items-center">
          <Checkbox
            sx={{
              color: "#176B87",
              "&.Mui-checked": {
                color: "#176B87",
              },
            }}
          />
          <p>Include Lowercase Letters</p>
        </div>
        <div className="pl-2 flex w-full  items-center">
          <Checkbox
            sx={{
              color: "#176B87",
              "&.Mui-checked": {
                color: "#176B87",
              },
            }}
          />
          <p>Include Numbers</p>
        </div>
        <div className="pl-2 flex w-full  items-center">
          <Checkbox
            sx={{
              color: "#176B87",
              "&.Mui-checked": {
                color: "#176B87",
              },
            }}
          />
          <p>Include Symbols</p>
        </div>
      </div>

      <div className="flex justify-between bg-[#272829] p-5 rounded-lg ">
        <h1>Strength</h1>

        <div>
          <p style={{ color: getColorForStrength(4) }}>Poor</p>
          <div className="flex w-full  gap-1">
            {mapLevels.map((level) => (
              <div
                key={level}
                className="w-[6px] h-[3px]"
                style={{ backgroundColor: getColorForStrength(level) }}
              ></div>
            ))}
          </div>
        </div>
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
