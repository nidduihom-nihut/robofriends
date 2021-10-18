import React from "react";
import Card from "./Cards";


const CardList = ({ robots }) => {
    return (
        <div>
            {robots.map((user, i) => {
                return (
                    <Card key={i} name={robots[i].name} email={robots[i].email} img='https://robohash.org/hostname:172.16.50.5' />
                );
            })
            }

            {robots.map((user, i, people) => {
                return(
                    console.log(i)
                );
            })}


        </div>

    );
}

export default CardList;







// return <Card name={robots[i].name} email={robots[i].email} img={robots[i].img}/>