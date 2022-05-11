import React from 'react';
import {Tree} from './components'
import './App.css';

var treeData = [
  {
    title: 'parent 0',
    key: '0-0',
    children: [
      {
        title: 'leaf 0-0',
        key: '0-0-0',
        children: [
          {
            title: 'leaf 1-0',
            key: '0-1-0-0',
          },
          {
            title: 'leaf 1-1',
            key: '0-1-1-1',
            isLeaf: true,
          },
        ]
      },
      {
        title: 'leaf 0-1',
        key: '0-0-1',
        isLeaf: true,
      },
    ],
  },
  {
    title: 'parent 1',
    key: '0-1',
    children: [
      {
        title: 'leaf 1-0',
        key: '0-1-0',
      },
      {
        title: 'leaf 1-1',
        key: '0-1-1',
        isLeaf: true,
      },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tree treeData={treeData}/>
      </header>
    </div>
  );
}

export default App;
