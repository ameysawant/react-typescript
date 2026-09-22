type CardProps = {
  title: string;
  text?: string; //optional
  price: number;
  children: React.ReactNode;
};

// interface CardProps {
//       title: string;
//   text: string;
//   price: number;
// }

const Card = ({ title, text, price, children }: CardProps) => {
  return (
    <>
      <div>
        <h6>{title}</h6>
        <p>{text}</p>
        <p>{price}</p>
        <button>{children}</button>
      </div>
    </>
  );
};

export default Card;
