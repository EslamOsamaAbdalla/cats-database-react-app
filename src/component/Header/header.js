import "./header.css"
function Header({catKind, apiSearch}) {
  const searchFunction = (search)=>{
    apiSearch(search)
  }
  return (
    <nav>
        <h1>CATS DB</h1>
        <ul>
            <li><input type='search'
              onChange={(e)=>{searchFunction(e.target.value)}}
              placeholder="Examples: abys - aege - abob - acur - asho - awir - amau - amis - bali"
              /></li>
            <li className='drpdwn-container'>
              <a href=''> category</a>
              <div className='drpdwn-child'>
                <ul>
                  {catKind ? catKind.map((i)=>{
                      return <li key={i.id}> {i.name}</li>
                    }): "no category"}
                </ul>
              </div>
            </li>
        </ul>
    </nav>
  )
}
export default Header