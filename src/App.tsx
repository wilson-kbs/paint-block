import React, { useState } from 'react'
import './App.css'

function makeCases(size: number): string[][] {
  let grid = Array(size)

  for (let i = 0; i < size; i++) {
    grid[i] = Array(size)
    for (let j = 0; j < size; j++) {
      grid[i][j] = "blue"
    }
  }
  return grid
}

const Colors = ["red", "pink", "orange", "yellow", "purple", "green", "blue", "brown", "black", "white"]

function App() {
  const [grid, setGrid] = useState<string[][]>(makeCases(30))
  const [selectedColor, setSelectedColor] = useState("black")

  const drawBlock = (row: number, col: number) => {
    setGrid((grid) => {
      grid[row][col] = selectedColor
      return [...grid]
    })
  }

  const handelMouseSelect = (e: React.MouseEvent<HTMLDivElement>, row: number, col: number) => {
    if (e.type !== "onMouseOver" && e.buttons !== 1) return
    drawBlock(row, col)
  }

  return (
    <div className="App">
      <div className="flex flex-col gap">
        <div className="flex my-2 justify-center">
          {Colors.map((color, i) => (
            <div
              key={i}
              className={`cursor-pointer mx-1 ${selectedColor == color ? "border-2 border-white" : ""}`}
              style={{height: 20, width: 20, backgroundColor: color}}
              onClick={() => setSelectedColor(color)}
            ></div>
          ))}
        </div>
        <div>
          {grid.map((els, i) =>(
            <div
              className="flex"
              key={i}>
              {els.map((color, j) => (
                <div
                  key={j}
                  style={{backgroundColor: color, height: "20px", width: "20px"}}
                  onMouseDown={(e) => handelMouseSelect(e ,i, j)}
                  onMouseOver={(e) => handelMouseSelect(e ,i, j)}
                ></div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
