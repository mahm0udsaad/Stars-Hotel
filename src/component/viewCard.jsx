const Card = ({image ,title ,description}) => {
    return ( 
        <div className="block lg:flex mb-8 border-b pb-4">
            <div className="w-full lg:w-1/2 lg:pr-6">
                <img src={image} alt={title} className="h-full w-full rounded-md shadow-md" />
            </div>
            <div className="w-full my-5 lg:my-0 lg:w-1/2 title">
                <h2 className="border-b pb-4 text-2xl font-semibold mb-2">{title}</h2>
                <p className="border-b pb-4 mb-10">{description}</p>
            </div>
            </div>
);
}
 
export default Card;