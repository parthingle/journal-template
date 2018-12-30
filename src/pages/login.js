import React from "react"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import Input from "../components/input-box"
export default () =>
<Layout>
    <div>
    <form 
    css={css`
        padding-top: 3rem;
        padding-left: 25%
        `}>
        <br/>
        <Input type="text" name="username" placeholder="Username" />
        <br/>
        <Input type="password" name="password" placeholder="Password"/>
        <br/>
        <Input type="submit" value="Login"/>

    </form>
    <br/>
    <br/>
    
    </div>
</Layout>