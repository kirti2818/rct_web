// import { useEffect } from "react"

var imagesArray = [
    "https://n.nordstrommedia.com/id/34d44a0c-0835-4d45-9fa2-8c8b131b5442.jpeg?h=700&w=1608",
    "https://n.nordstrommedia.com/id/efc7e80c-3f38-473d-be1f-42e35f1d5704.jpeg?h=700&w=1608",
    "https://n.nordstrommedia.com/id/cdf225c1-f1fd-47f9-9e7d-17809d70bc64.jpeg?h=700&w=1608",
    "https://n.nordstrommedia.com/id/076485bb-76cc-4b71-86aa-8f054468d1b5.jpeg?h=700&w=1608",
    "https://n.nordstrommedia.com/id/de0cd5ea-91d4-4b03-97b5-d0bac3211a11.jpeg?h=700&w=1608"
  ]

  export const handleslideshow=()=>{
    var image = document.getElementById("imag")
    var index = 1;
      setInterval(()=>{
       if(index === imagesArray.length){
        index = 0
       }
      //  else{
        image.setAttribute("src",imagesArray[index])
        index++
      //  }

      },3000)
    }

  function SlideShow(){

    return(
       <div id = "mainDiv">
        <img id = "imag" src = "https://n.nordstrommedia.com/id/34d44a0c-0835-4d45-9fa2-8c8b131b5442.jpeg?h=700&w=1608" alt = "error"/>
       </div>
    )
  }
  export default SlideShow;