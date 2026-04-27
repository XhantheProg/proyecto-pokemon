import "./card.css";

export const Card = (props) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-600"
      key={props.id} // → Si lo usas en un map, el key va aquí (o mejor, en el map)
    >
      <div className="h-40 flex items-center justify-center mb-4">
        <img
          src={props.sprites?.front_default}
          alt={props.name}
          className="h-full object-contain"
        />
      </div>
      <h3 className="text-sm font-semibold line-clamp-2 mb-2 text-center">
        {props.name} 
      </h3>
      {/* <p className="text-lg font-bold text-green-600">{props.price}</p> */}
      
    </div>
  );
};
