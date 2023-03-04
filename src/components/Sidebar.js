import SidebarItem from "./SidebarItem"
import items from "../data/sidebar.json"


 function Sidebar(){
    return (

      <div className="sidebar pt-3">
     <div className="pt-5">
     { items.map((item, index) => <SidebarItem key={index} item={item} />) }
     </div>
    </div>
    
    )
}
export default Sidebar