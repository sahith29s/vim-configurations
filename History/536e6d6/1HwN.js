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
        fetchNotes()
    }, [])

    const handleDelete = () => {

    };

    const createNewNote = () => {
        const title = prompt("title")
        const description = prompt("description")
        

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
                                                <div className="btn text-decoration-none btn-primary">
                                                    <Link className="text-white text-decoration-none" to={`note/${note._id}`}>Edit</Link>
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