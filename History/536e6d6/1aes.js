import { Link } from 'react-router-dom'

import axios from "axios"
import notes from "../../data/notes"
import React, { useEffect, useState } from 'react'
import MainScreen from '../../MainScreen/MainScreen'
import { Button } from 'bootstrap'
import { Accordion, AccordionCollapse, Badge, Card } from "react-bootstrap"

const MyNotes = () => {

    const [notes, setNotes] = useState([])
    const fetchNotes = async () => {
        let data = await fetch("http://localhost:5000/api/notes")
        data = await data.json()
        setNotes(data)
    };

    // console.log(notes);

    useEffect(() => {
        try {
            fetchNotes()
        } catch (error) {
            console.log(error);

        }
    }, [])

    const handleDelete = async (_id) => {
        try {

            let deletedNote = await fetch('http://localhost:5000/api/notes', {
                method: 'delete',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    _id
                })
            })

            fetchNotes()
        } catch (error) {
            console.log(error);

        }

    };

    const createNewNote = async () => {
        try {
            const title = prompt("title")
            const description = prompt("description")


            let newNote = await fetch('http://localhost:5000/api/notes', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title,
                    description
                })
            })

            console.log(newNote);

            fetchNotes()

        } catch (error) {
            console.log(error);

        }

    };

    const handleEdit = async (_id) => {
        const description = prompt("Enter the edited text over here")

        // try {
        //     if (description) {
        //         console.log("no");
        //         let editNotes = await fetch('http://localhost:5000/api/notes', {
        //             method: 'patch',
        //             headers: { 'Content-Type': 'application/json' },
        //             body: JSON.stringify({
        //                 _id,
        //                 description
        //             })
        //         })



        //         await fetchNotes()
        //     }
        // } catch (error) {
        //     console.log(error);

        // }
        let newNote = await fetch('http://localhost:5000/api/notes', {
            method: 'patch',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title,
                description
            })
        })




    };
    return (
        <>
            <MainScreen title="this is me inside the vim">


                {/* <Link to="createnote"> */}
                <button size="lg" className="btn btn-primary mb-3" onClick={createNewNote}>Create a new Note</button>
                {/* </Link> */}


                {
                    notes.map((note) => {
                        return (
                            <>
                                <Accordion>

                                    <Card key={note._id} className="mb-3">
                                        <Card.Header className="d-flex align-items-center justify-content-between">
                                            <span className="text-black text-decoration-none align-self-center fs-5">
                                                <Accordion.Item eventKey='0'>
                                                    <Accordion.Header>
                                                        {note.title}
                                                    </Accordion.Header>
                                                </Accordion.Item>
                                            </span>
                                            <div>
                                                <div onClick={() => handleEdit(note._id)} className="btn text-decoration-none btn-primary">
                                                    {/* <Link className="text-white text-decoration-none" to={`note/${note._id}`}>Edit</Link> */}
                                                    Edit
                                                </div>
                                                <div className="btn btn-danger mx-2">
                                                    <Link className="text-white text-decoration-none" onClick={() => handleDelete(note._id)}>
                                                        Delete
                                                    </Link>
                                                </div>

                                            </div>
                                        </Card.Header>

                                        <AccordionCollapse eventKey='0'>
                                            <Card.Body>
                                                <h4>
                                                    <Badge className="bg-success" >
                                                        Category -
                                                    </Badge>
                                                </h4>
                                                <blockquote className="blockquote mb-0">
                                                    <p>{note.description}</p>
                                                    <footer className="blockquote-footer">created on Date</footer>
                                                </blockquote>
                                            </Card.Body>
                                        </AccordionCollapse>

                                    </Card>
                                </Accordion>
                            </>
                        )

                    })
                }




            </MainScreen>
        </>
    )
}

export default MyNotes