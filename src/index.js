import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app.jsx";
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import ImageFileInput from "./componets/image_file_input/image_file_input";
import CardRepository from "./service/card_repository";

const authService = new AuthService();
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();
// 함수를 통해 컴포넌트를 전달하면 다음에 props를 추가할떄도 여기서 한번만 전달 하면된다
const FileInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      cardRepository={cardRepository}
    />{" "}
    {/* componet props 일떄는 대문자로 시작 */}
  </React.StrictMode>,
  document.getElementById("root")
);
