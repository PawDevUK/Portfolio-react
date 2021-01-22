import { useState, useEffect } from 'react'

export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return width;
}


// export function ScreenWidth() {
//   let width
//   function checkSize(){
//       width = window.innerWidth
//   }
//   window.addEventListener('resize', checkSize())
//   return width
// }