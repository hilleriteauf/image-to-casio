// import { useState } from "react";
// import { invoke } from "@tauri-apps/api/tauri";
import { useState } from "react";
import styles from "./ImagePicker.module.css";
import { open } from "@tauri-apps/api/dialog";
import { convertFileSrc } from "@tauri-apps/api/tauri";

type Props = {
  onFileLoaded: (file: string) => void;
};

/**
 * Component that allows the user to pick an image file from their system.
 */
function ImagePicker({onFileLoaded}: Props) {
  let [imagePath, setImagePath] = useState<string>("");

  async function loadFile() {
    // Opening system file picker dialog
    const result = await open({ directory: false, multiple: false });
    if (result && !Array.isArray(result) && result !== "") {
      // Converting file path to a format that can be used by the browser
      setImagePath(convertFileSrc(result));
      // Sending the file path to parent component
      onFileLoaded(result);
    }
  }

  return (
    <div className={styles.container}>
      { imagePath.length > 0 ? <img className={styles.image} src={imagePath} alt="logo" /> : null }
      <button onClick={loadFile}>Load File</button>
    </div>
  );
}

export default ImagePicker;
