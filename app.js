function getRequest() {
    const request = fetch('');

    request.then((response) => console.log(response.json()))
};

getRequest();
