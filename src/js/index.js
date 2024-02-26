import React from 'react'
import {createRoot} from 'react-dom/client'
import Layout from './layout.js'


const root = createRoot(document.querySelector("#app"))


root.render(<Layout/>)