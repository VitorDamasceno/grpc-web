import React from 'react';
import logo from './logo.svg';

import './App.css';

import { ProjectServiceClient } from './proto/project_grpc_web_pb.js';
import { Project, Empty } from './proto/project_pb.js';


var pService = new ProjectServiceClient('http://localhost:9211');
var request = new Project();
var empty = new Empty();

request.setName("second project name");
request.setDescription("second project description");

pService.create(request, {}, (err, resp) => {
  console.log("create err", err);
  console.log(resp);
});

// pService.getAll(empty, {}, (err, resp) => {
//   console.log("get all err", err);
//   console.log(resp);
// });

class ProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    pService.getAll(empty, {}, (err, resp) => {
      this.setState({ items: resp.getItemsList()});
    });
  }

  render() {

    const {items} = this.state
    const listItems = items.map((p) => {
      return <li key={p.getId()}>{p.getName()}: {p.getDescription()}</li>
    });

    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default ProjectList;
