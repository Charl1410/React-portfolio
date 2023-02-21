import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./styles.css"

const createCard = () => {
  const cardInfo = [
    {
      image: "https://www.freecodecamp.org/news/content/images/2021/04/BG.png",
      gitHub: "https://github.com/Charl1410/coding-blog",
      title: "MVC tech blog",
      text: "Full stack blog made with SQL express and handlebars.js",
    },
    {
      image: "https://enviame.io/wp-content/uploads/2022/08/ecommerce-chile-2022.jpg",
      gitHub: "https://github.com/Charl1410/e-commerce-back-end",
      title: "e-commerce back end",
      text: "back end application using express to create routes in an e-commerce product tracker ",
    },
    {
      image: "https://www.pageuppeople.com/wp-content/uploads/2019/01/Top-60-Employee-Engagement-image43-1200x720.png",
      gitHub: "https://github.com/Charl1410/Employee-tracker",
      title: "Employee tracker",
      text: "Back end application using inquirer and MySQL to track employees in departments",
    },
    {
      image: "https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png",
      gitHub: "https://github.com/Charl1410/note-taking-application",
      title: "Note taking application",
      text: "back end application using express to create routes in an e-commerce product tracker ",
    },
    {
      image: "https://d3n817fwly711g.cloudfront.net/uploads/2014/07/Basic-org-chart-1-1024x738.png",
      gitHub: "https://github.com/Charl1410/team-profile-gen",
      title: "Team profile generator",
      text: "Front end application that generates HTML cards for indivuals entered through inquirer",
    },


  ]


 function RenderCard(card, index) {
  return (
    <Card key={index}>
      <Card.Img variant="top" src={card.image} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>
         {card.text}
        </Card.Text>
        <Button href={card.gitHub} className="card-button" variant="primary">Visit Repo</Button>
      </Card.Body>
    </Card>
  );
}
return <div className="grid">{cardInfo.map(RenderCard)}</div>;

}

export default createCard;