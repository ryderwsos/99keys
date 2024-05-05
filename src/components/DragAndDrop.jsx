//using react-drag-drop-files
import { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import './DragAndDrop.css'

const fileTypes = ["JPG", "PNG"];

function DragAndDrop() {
  const [file, setFile] = useState(null);

  useEffect(()=>{
    return (console.log(file));
  },[file])


  const handleChange = async(file) => {
    const reader = new FileReader();
    reader.addEventListener("load", ()=>{
      file.data = reader.result;
      setFile(file);
    })
    reader.readAsDataURL(file);
  };

  return (
    <div className="drop-main">
      {(file != null) ?
        <div className="image-holder">
          <img src={file.data} key={file}/>
          {console.log(file.name)}
        </div>
         : <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
      }
    </div>
  );
}

export default DragAndDrop;