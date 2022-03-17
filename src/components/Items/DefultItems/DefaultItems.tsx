import { useGetItemsQuery } from "../../../store/apis/itemsApi";
import ItemsList from "../ItemsList";


function DefaultItems() {


    const {data:items}=useGetItemsQuery({page:0,limit:9})

    return ( 
        <div>
            {items && <ItemsList items={items}/>}
        </div>
     );
}

export default DefaultItems;