import _ from 'lodash';
import { ProjectServiceClient } from './project_grpc_web_pb.js';
import { Project } from './project_pb.js';


var pService = new ProjectServiceClient('http://localhost:9211');
var request = new Project();
request.setName("here is the project name");

pService.create(request, {}, (err, resp) => {
    console.log("err", err);
    console.log(resp);
});

pService.getAll(null, {}, (err, resp) => {
    console.log("err", err);
    console.log(resp);
});
// function component() {
//     const element = document.createElement('div');

//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     return element;
// }

// document.body.appendChild(component());`