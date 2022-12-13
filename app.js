function getRequest() {
    const request = fetch('https://online-store-api.vercel.app:9002/products');

    request.then((response) => console.log(response.json()))
};

getRequest();
