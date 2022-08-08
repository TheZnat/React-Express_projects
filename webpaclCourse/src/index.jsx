import Post from "./Post"
// import * as $ from 'jquery'
import './styles/styles.css'
// import json from './assets/json.json'
// import xml from './assets/data.xml'
const post = new Post('Webpack Post Title')
console.log('Post to String: ', post.toString())
import './babel'

import React from "react";
import {render} from "react-dom";

// $('pre').html(post.toString())

// console.log('JSON: ', json)
// console.log('XML: ', xml)

const App = () =>(
    <li><p>Чтобы настроить React</p></li>
)

render(<App />, document.getElementById('app') )