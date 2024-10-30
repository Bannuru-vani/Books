import axios from "axios";
import "./table.css"
import React,{useState,useEffect} from "react";
function Table() {
    const [data,setData] = useState([]);
    const itemsPerPage = 10;
    const[page,setPage] = useState(1)
    const totalPages = Math.ceil(data.length/ itemsPerPage)
    const startIndex = (page -1 ) * itemsPerPage;
    const EndIndex = startIndex + itemsPerPage
    const currentPagedata = data.slice(startIndex,EndIndex)

    console.log(totalPages,currentPagedata)
    const gotoPage = (pageNum) => {
        if(pageNum >= 1 && pageNum <= totalPages){
setPage(pageNum)
        }

    }
    const url = "https://jsonplaceholder.typicode.com/posts"
    const fetchData = async() => {
await axios.get(url).then((res) => {

console.log(res.data)
setData(res.data)
}).catch((err) =>{
    console.log(err)
})

    }
    useEffect(() =>{
      fetchData()
    

    },[])
    return(
        <div className="table-container">
            <h1 className="header">Table</h1>
    <table>
        <thead>
            <tr>
            <th>SL.NO</th>
            <th>Title</th>
            <th>Body</th>
            <th>UserId</th>
            </tr>
           
        </thead>
          <tbody >
            {
                currentPagedata.map((item,index) => (
                  <tr key={item.id}>
                 
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                    <td>{item.userId}</td>
                   </tr>
                ))
            }
             </tbody>
        
    </table>
    <div className="pagination">
    <button className= "button-styless" disabled={page ===1 } onClick= {() => {gotoPage(page -1 )}}>Previous</button>
<span>{page} of {totalPages}</span>
<button  className= "button-styless" disabled={page === totalPages} onClick= {() => {gotoPage(page +1 )}}>Next</button>
    </div>

        </div>
    )

}
export default Table