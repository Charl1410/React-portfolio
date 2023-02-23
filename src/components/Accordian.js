import Accordion from 'react-bootstrap/Accordion';

function Accordian() {
  return (
    <Accordion className="accordian">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="accordian-header">My Front End proficiencies</Accordion.Header>
        <Accordion.Body className="center">
        
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className="accordian-header">My Back End proficiencies</Accordion.Header>
        <Accordion.Body className="center">
        <ul >
            <li>Express</li>
            <li>MySql & Sequelize</li>
            <li>MongoDB</li>
            <li>Node.js</li>
            <li>GraphQL</li>
            <li></li>
          </ul>

        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header >Tools I Use</Accordion.Header>
        <Accordion.Body className="center">
        <ul>
            <li >GitHub</li>
            <li>VS Code</li>
            <li>Postman</li>



            
            <li></li>
          </ul>

        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
  );
}

export default Accordian;