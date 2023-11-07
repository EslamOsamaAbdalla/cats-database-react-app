import"./ItemsContainer.css"
import Item from './Item/Item'
function ItemsContainer({catRundom}) {
  return (
    <div id='ItemsContainer'>
        <div id='ItemCounter'>
          {catRundom ? (catRundom.map((i)=>{
            return <Item key={i.id} goodImg={i.url}/>
          })) : "no item"}
        </div>
    </div>
  )
}
export default ItemsContainer