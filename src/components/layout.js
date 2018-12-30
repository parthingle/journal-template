import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import StickyFooter from 'react-sticky-footer';

import { rhythm } from "../utils/typography"


export default ({ children }) => (
  <div
    css={css`
      margin: 0 auto;
      max-width: 700px;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};
    `}
  >
    <Link to={`/`}>
      <h3
        css={css`
          margin-bottom: ${rhythm(2)};
          display: inline-block;
          font-style: normal;
        `}
      >
        Home
      </h3
      >
    </Link>
    <Link
      to={`/login`}
      css={css`
        float: right;
      `}
    >
      Login
    </Link>
    <Link
      to={`/create`}
      css={css`
        float: right;
        margin-right: 1rem;
      `}
    >
      Create Entry
    </Link>
    <Link
        to={`/post-history`}
        css={css`
        float: right;
        margin-right: 1rem;
      `}>
        Post History
    </Link>
    <Link
    to={`/about/`}
    css={css`
      float: right;
      margin-right: 1rem;  
    `}>
        About
    </Link>
    
    {children}

    <StickyFooter>
      <Link 
        to={`/file-stats`}
        css={css`
          float: right;
          margin-top: 3rem;`}>
        File Stats
      </Link>
    </StickyFooter>
  </div>
)