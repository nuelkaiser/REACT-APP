const SearchBox = ( {SearchChange, Searchfield} ) => {
    return ( 
        <div className='pa 2'>
            <input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='Search for Robot Friend' onChange={ SearchChange }/>
        </div>
    );
}
 
export default SearchBox;