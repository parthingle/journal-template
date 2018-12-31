import React from "react"
import Layout from "../components/layout";
import SimpleMDE from 'react-simplemde-editor';
import "simplemde/dist/simplemde.min.css";
import Button from "../components/button"
import DateTime from 'react-datetime';
import "../stylesheets/datetime.css"

export default () => {
    return (
        <Layout>
            <div>
                Create new post here
            </div>
            
            <DateTime />
            
            <br/>
            <div>
                <SimpleMDE
                />
            </div>
            <Button val="Post">Post</Button>
        </Layout>
    )
}
