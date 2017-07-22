class Request {
    constructor(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}

let myData = new Request("GET", "http://google.co.uk", "HTTP/1.1", "");

console.log(myData);

/*
 console.log(myData.method);
 console.log(myData.uri);
 console.log(myData.version);
 console.log(myData.message);
 console.log(myData.response);
 console.log(myData.fulfilled);*/
