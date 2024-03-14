import React, {  useState, useEffect } from 'react';
import {
    Card,
    CardBody,
    CardImg,
    CardImgOverlay,
    CardTitle
} from 'reactstrap';
import DishDetails from './DishdetailComponent';

export default function MenuComponent(props) {

    let [selectedDish,setselectedDish] = useState(null)
 
   const onDishSelect=(dish)=> {
         setselectedDish(dish);
        // console.log(dish);
        
    }

    // useEffect(() => {
    //     console.log(selectedDish);
    // }, [selectedDish]);

    
  return (
    <div className="container">
            <div className="row">
            {props.dishes.map((dish) => {
                return (
                    <div className="col-12 col-md-2 m-1">
                        <Card key={dish.id} onClick={() => onDishSelect(dish)}>

                            <CardImg width="150px" height="150px" src={dish.image} alt={dish.name} />
                            
                            <div>{dish.price}</div>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardBody>

                        </Card>
                    </div>
                );
            })}
            </div>

            <DishDetails dish={selectedDish} />
    </div>
  )
}
