// import fetch from "node-fetch";
import https from "https";

export const getRequest = url => getRequestByHttps(url);

// //FETCH NOT SUPPORTED BY SAFARI!!!!!!
// const getRequestByFetch = url =>
//   fetch(url)
//     .then(response => {
//       return response.json();
//     })
//     .catch(error => {
//       console.log(error);
//     });

const getRequestByHttps = url =>
  new Promise((resolve, reject) => {
    https.get(url, res => {
      res.setEncoding("utf8");
      let body = "";
      res.on("data", data => {
        body += data;
      });
      // TODO: Handle errors
      res.on("end", () => {
        resolve({
          links: res.headers.link,
          issues:JSON.parse(body)
        });
      });
    });
  });
