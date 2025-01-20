export function DropDown(props ) {

    function handleParentDropDownSelect(event){
     console.log(event.target.value)
      props.parentDropDownSelect(event.target.value);
    }

    if(props.isParent) {
        return  <select id="parentselect" onChange={handleParentDropDownSelect}>
        {props.countries.map((country,key) => (
          <option value={country[0]}>{country[0]}</option>
        ))}
      </select>
    }
    return <select>
        {props.cities.map((x,ind )=> <option value={ind}>{x}</option>)}
    </select>
    
  }
  
