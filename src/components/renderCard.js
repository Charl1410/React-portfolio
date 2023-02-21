import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const createCard = () => {
  const cardInfo = [
    {
      image: "https://www.freecodecamp.org/news/content/images/2021/04/BG.png",
      title: "MVC tech blog",
      text: "Full stack blog made with SQL express and handlebars.js",
    },
    {
      image: "https://enviame.io/wp-content/uploads/2022/08/ecommerce-chile-2022.jpg",
      title: "e-commerce back end",
      text: "bac end application using express to create routes in an e-commerce product tracker ",
    }

  ]


 function RenderCard(card, index) {
  return (
    <Card style={{ width: '18rem' }} key={index}>
      <Card.Img variant="top" src={card.image} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>
         {card.text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
return <div className="grid">{cardInfo.map(RenderCard)}</div>;

}

export default createCard;