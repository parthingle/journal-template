import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>Last Build: {data.site.buildTime}</h1> 
    <p>
      This is a template of a blog made using React and Gatsby made for educational purposes.
    </p>
    <h3>About the author</h3> 
    <p>I'm a fourth year student at UCLA trying to learn Web Dev. Here are some made up facts about me:</p>
    
  </Layout>
)

export const query = graphql`
  query {
    site {
        buildTime
    }
  }
`