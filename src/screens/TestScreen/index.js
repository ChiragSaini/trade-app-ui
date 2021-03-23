import React from 'react'
import BasicForm from "../../components/BasicForm";

const TestScreen = () => {
    const fields = [
        {
            label: "Email",
            name: "email",
            validate: (e) => {
                console.log("Something happened to email")
            }
        },
        {
            label: "Name",
            name: "name",
            validate: (e) => {
                console.log("Something happened to name")
            }
        }
    ]
    const debug = true;
    return (
        <div>
            <BasicForm fields={fields} debug={debug} />
        </div>
    )
}

export default TestScreen
