import ImagePicker from "./components/ImagePicker/ImagePicker";

/**
 * Main component of the application.
 */
function App() {
  return (
    <ImagePicker onFileLoaded={(path) => console.log("Loaded file: ", path)} />
  );
}

export default App;
