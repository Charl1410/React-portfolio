import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./styles.css"

const createCard = () => {
  const cardInfo = [
    {
      image: "https://www.freecodecamp.org/news/content/images/2021/04/BG.png",
      link: "https://code-blog.herokuapp.com/",
      gitHub: "https://github.com/Charl1410/coding-blog",
      title: "MVC tech blog",
      text: "Full stack blog made with SQL express and handlebars.js",
    },
    {
      image: "https://enviame.io/wp-content/uploads/2022/08/ecommerce-chile-2022.jpg",
      link: "",
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
      link: "https://note-taker-express.herokuapp.com/notes",
      gitHub: "https://github.com/Charl1410/note-taking-application",
      title: "Note taking application",
      text: "back end application using express to create routes in an e-commerce product tracker ",
    },
    {
      image: "https://d3n817fwly711g.cloudfront.net/uploads/2014/07/Basic-org-chart-1-1024x738.png",
      link: "",
      gitHub: "https://github.com/Charl1410/team-profile-gen",
      title: "Team profile generator",
      text: "Front end application that generates HTML cards for indivuals entered through inquirer",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/2471/2471610.png",
      link:"https://charl1410.github.io/week-3-passwordGenerator/",
      gitHub: "https://github.com/Charl1410/Password-Generator",
      title: "Password Generator",
      text: "Application that generates random passwords",
    },
    {
      image: "https://img.freepik.com/premium-vector/quiz-logo-poll-questionnaire-icon-symbol_101884-1076.jpg?w=2000",
      link: "https://charl1410.github.io/Quiz/",
      gitHub: "https://github.com/Charl1410/Quiz",
      title: "Quiz",
      text: "JavaScript quiz!",
    },
    {
      image: "https://www.creativefabrica.com/wp-content/uploads/2021/03/31/weather-icon-illustration03-Graphics-10205167-1.jpg",
      link: "https://charl1410.github.io/weather-dashboard/",
      gitHub: "https://github.com/Charl1410/weather-dashboard",
      title: "Weather Dashboard",
      text: "Front end application that generates HTML cards for indivuals entered through inquirer",
    }


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
        <Button href={card.link} className="card-button" variant="primary">Deployed App</Button>

      </Card.Body>
    </Card>
  );
}
//maps through each element in the array and generated the html content for the cards
return <div className="grid">{cardInfo.map(RenderCard)}</div>;

}

export default createCard;