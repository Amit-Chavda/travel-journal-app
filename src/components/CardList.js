import DataAdapter from "../adpters/DataAdapter";
import Card from "./Card";

export default function CardList() {

    let cards = DataAdapter.map(item => {
        return <Card item={item} key={item.id}/>
    });

    return (
        <>
            {cards}
        </>
    )
}