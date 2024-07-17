import './Identitas.css'
import {Button, Dropdown, Badge, Stack} from 'react-bootstrap'

const Ident = () => {
 return(
    <div className="identitas">
        <h3>Identitas</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolorem repellendus quam corrupti? Aut quos reiciendis assumenda eius totam reprehenderit, suscipit sapiente sint ut molestiae cumque veritatis sequi optio, ullam commodi accusantium ab consequuntur officia inventore deleniti. Sapiente, maxime inventore dolorem dolore vitae facilis numquam quis illo, atque, molestias ut!a</p>

        <Button type="button" variant="primary">Button React</Button>
        {/* Dropdown */}

        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        {/* Basge */}
        <Stack direction="horizontal" gap={2}>
            <Badge bg="primary">Primary</Badge>
            <Badge bg="secondary">Secondary</Badge>
            <Badge bg="success">Success</Badge>
            <Badge bg="danger">Danger</Badge>
            <Badge bg="warning" text="dark">
            Warning
            </Badge>
            <Badge bg="info">Info</Badge>
            <Badge bg="light" text="dark">
            Light
            </Badge>
            <Badge bg="dark">Dark</Badge>
        </Stack>

    </div>
 )
}

export default Ident;