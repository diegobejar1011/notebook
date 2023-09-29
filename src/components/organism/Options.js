import "../../assets/css/stylesnew.css";
import {IconButton} from '../molecules/IconButton';

export function Options(Props) {

  const categories = ["Personal", "Trabajo", "Académico"];


  const handleCategory = (name)=>{
    Props.method(name);
  }

  return (
    <div class="icon">
      <IconButton method={()=>handleCategory(categories[0])} clase="fa-solid fa-person" name="account"/>
      <IconButton method={()=>handleCategory(categories[1])} clase="fa-solid fa-briefcase" name="home" />
      <IconButton method={()=>handleCategory(categories[2])} clase="fa-solid fa-school" name="settings" />
    </div>
  );
}
