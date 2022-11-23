Promise.all([
    fetch("https://images-api.nasa.gov/search?q=saturn%&media_type=image").then(
      (value) => value.json()
    ),
    
  ])
    .then((value) => {
    console.log(value)
      
      })
    .catch((err) => {});