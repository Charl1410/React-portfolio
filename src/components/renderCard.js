import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const createCard = () => {
  const cardInfo = [
    {
      image: "https://www.freecodecamp.org/news/content/images/2021/04/BG.png",
      title: "MVC tech blog",
      text: "Full stack blog made with SQL express and handlebars.js",
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