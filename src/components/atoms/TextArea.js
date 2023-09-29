import "../../assets/css/stylesnew.css";

export function TextArea(Props) {
  return (
    <textarea className="search__input" id="area" onChange={Props.method} placeholder={Props.holder}>
    </textarea>
  );
}
