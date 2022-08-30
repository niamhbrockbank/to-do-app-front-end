interface FilterSectionProps{
  searchTerm : string,
  setSearchTerm : React.Dispatch<React.SetStateAction<string>>
}

export default function FilterSection({searchTerm, setSearchTerm} : FilterSectionProps): JSX.Element {
  
  function handleSearchChange(e : React.ChangeEvent<HTMLInputElement>): void{
    setSearchTerm(e.target.value)
  }

  return (
    <nav id="filter_section">
      <input 
        id= 'search_bar' 
        type="text" 
        placeholder='Search for tasks here...' 
        value={searchTerm} 
        onChange={(e) => handleSearchChange(e)}/>
      <button className="filter_button">this filter does not do much</button>
    </nav>
  );
}
