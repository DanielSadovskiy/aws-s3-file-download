import React, { useEffect } from "react";
import axios from "axios";
import FileSaver from "file-saver";

export const Home = () => {
  useEffect(() => {
    axios
      .get(
        // "https://images.unsplash.com/photo-1573496528621-017a88f62f4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        "http://localhost:8080/api/testimage.jpg",
        {
          responseType: "arraybuffer",
          headers: {
            Accept: "application/octet-stream"
          }
        }
      )
      .then(response => {
        // response.data is an empty object
        console.log(response);
        const blob = new Blob([response.data]);
        console.log(blob);
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `sample.jpg`);
        // 3. Append to html page
        document.body.appendChild(link);
        // 4. Force download
        link.click();
        // 5. Clean up and remove the link
        link.parentNode.removeChild(link);
        // FileSaver.saveAs(blob, Math.random());
      });
  }, []);
  return <h2>Home page</h2>;
};
