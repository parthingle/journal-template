import React from "react"
import Layout from "../components/layout";
import SimpleMDE from 'react-simplemde-editor';
import "simplemde/dist/simplemde.min.css";
import Button from "../components/button"
import DateTime from 'react-datetime';
import "../stylesheets/datetime.css"

var mde;


function sub() {
    console.log("submitted!")
    console.log(mde)
}
function handleChange(value) {
    mde = value;
}
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
                onChange={handleChange}
                options={{
                    autofocus: false,
                    spellChecker: true,
                    
                  }}
                placeholder="Type here..."
                />
            </div>
            <Button val="Post" onClick={sub}>Post</Button>
        </Layout>
    )
}
