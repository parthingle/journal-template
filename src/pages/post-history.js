import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"


export default ({ data }) => {
    
    return (
      <Layout>
        <div>
          <h1>Post History</h1>
          <table>
            <thead>
              <tr>
                <th>Post Title</th>
                <th>Time To Read</th>
                <th>Published</th>
              </tr>
            </thead>
            <tbody>
              {data.allMarkdownRemark.edges.map(({ node }, index) => (
                <tr key={index}>
                  <td>{node.frontmatter.title}</td>
                  <td>{node.timeToRead}</td>
                  <td>{node.frontmatter.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    )
  }
  
  export const query = graphql`
    query {
      allFile {
        edges {
          node {
            relativePath
            prettySize
            extension
            birthTime(fromNow: true)
          }
        }
      }
      allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }){
          edges {
              node {
                timeToRead
                frontmatter {
                    title
                    date(formatString: "DD MMMM, YYYY")
                }
              }
          }
      }
    }
  `