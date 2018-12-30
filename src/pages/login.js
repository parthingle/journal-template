import React from "react"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import Login from "../components/login-form"

export default () =>
<Layout>
    <div>
    Authentication allows you to create new posts and read <em>Hidden Posts</em> <br/>
    <form 
    css={css`
        padding-top: 3rem;
        padding-left: 25%
        `}>
        Username: <br/>
        <input type="text" name="username"/><br/>
        Password: <br/>
        <input type="password" name="password"/><br/>
        <br/>
        <input type="submit" value="Login"/>

    </form>
    <br/>
    <br/>
    <Login/>
    </div>
</Layout>