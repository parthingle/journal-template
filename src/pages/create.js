import React from "react"
import Layout from "../components/layout";
import SimpleMDE from 'react-simplemde-editor';
import "simplemde/dist/simplemde.min.css";
import Button from "../components/button"
export default () => {
    return (
        <Layout>
            <div>
                Create new post here
            </div>
            <br/>
            <div>
                <SimpleMDE
                />
            </div>
            <Button val="Post">Post</Button>
        </Layout>
    )
}
