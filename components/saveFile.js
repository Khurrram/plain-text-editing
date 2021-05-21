//this function is being used to send the updated file to the backend which eventually saves to db, then it rerenders to main page via getFiles and setFiles function

export function saveFile( file, getFiles, setFiles ) {
    if (file){
      file.text()
        .then(text => {
          fetch("http://localhost:3001/api/saveFile", {
              method: "POST",
              headers : {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({text: text, name: file.name, type: file.type, dateModified: new Date()})
            })
              .then(res => getFiles(setFiles))
              .catch(error => console.log(error));
        });
    }
  }
