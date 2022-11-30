import {Card, Form, Button} from "react-bootstrap";
import {useState} from "react";

const Search = (props)=>{
    const [search, setSearch] = useState({
        title:'',
        author:'',
        line:''
    }) //props liftinimas

    const handleChange = (e) =>{
        setSearch(e.target.title)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        props.onSearch(search) //liftinimas/ pakolinimas
    }
    return(
        <Card>
            <Card.Header className="container my-10">Search by</Card.Header>
            <Card.Body>
                <Form onSubmit={submitHandler}>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Title" name="title" value={search.title} onChange={handleChange}/>
                        <Form.Control type="text" placeholder="Author" name="author" value={search.author} onChange={handleChange}/>
                        <Form.Control type="text" placeholder="Word in line" name="line" value={search.line} onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Button type="submit" variant="primary" className="my-2">Search</Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    )
}
export default Search