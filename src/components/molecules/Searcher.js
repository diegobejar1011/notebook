import React, { useState} from "react";

import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button"; 

export function Searcher(Props) {

  const [searchValue, setSearchValue] = useState('');
  
  const handleButtonClick = () => {
    Props.onSearch(searchValue);
  };
  return (
      <div className="container">
        <Input name="title" method={(e) => setSearchValue(e.target.value)} />
        <Button
          name={<i class="fas fa-search"></i>}
          method={handleButtonClick}
        ></Button>
      </div>
  );
}
