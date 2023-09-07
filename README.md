# What is this?

It is simple drag and drop component for react application

# Installation

`npm i kali-dnd` or `yarn add kali-dnd`

Then...

```
import React, { useEffect, useRef, useState } from 'react';
import dragAndDrop from 'kali-dnd';


function App() {

  let dropZone = useRef();
  const [divStyles, setDivStyles] = useState({ background: "lightgreen" })

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDivStyles({ background: "tomato" })
  }
  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation();
    setDivStyles({ background: "lightgreen" })
  }
  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDivStyles({ background: "lightgreen" })
  }

  useEffect(() => {
    dragAndDrop({ drop: dropZone, handleDragOver, handleDrop, handleDragEnter, handleDragLeave })
  }, [])

  return (
    <div ref={dropZone} style={{ width: '800px', height: '500px', ...divStyles }} >

    </div>
  )
}

export default App
```

## Instructions

1. Install the package using `npm install kali-dnd` or `yarn add kali-dnd`.
<!-- 2. Import it into your project as shown above in the example code snippet and pass all of its props to the component you want draggable. -->
2. Import it into your project and use as shown in example above.
3. You can pass any of these props to customize the behaviour of dnd:
4. dropZone ref is mandatory to initialize the div element
<!-- * **handleDragStart** - a function that will be called when dragging starts on an element with draggable attribute; receives event object as argument -->

- **handleDragEnter** - function that will be called when dragging starts inside a droppable area;
- **handleDragOver** - function that will be called when user drags over a droppable area;
- **handleDrop** - function that will be called on dropping an element onto another one;
- **handleDragLeave** - function that will be called when leaving a droppable area while dragging is active.
