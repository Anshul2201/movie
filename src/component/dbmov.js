import React, { Component } from 'react';
import ArtistListing from './artistlisting';
const url="localhost:8900/page"

class Page extends Component{
    constructor(props){
        super(props)

        this.state={
            dbmov:''
        }
    }
    render(){
        return(
            <>
            <input
           className="stext"
            type="text"
            id="hsearch"
            placeholder="Search movies here"
            name="s"/>
            <React.Fragment>
                <h1>Page</h1>
                <ArtistListing datalist={this.state.dbmov}/>
            </React.Fragment>
            </>
        )
    }

    componentDidMount(){
        fetch(url,{
            Method:'GET'})
        .then((res) => res.json())
        .then((post) => {
            this.setState({dbmov:post})
        })
    }
}

export default Page
{/*import fdata from './movies/CONTENTLISTINGPAGE-PAGE1.json'
import sdata from './movies/CONTENTLISTINGPAGE-PAGE2.json'
import tdata from './movies/CONTENTLISTINGPAGE-PAGE3.json'
class Content extends Component {
    render() {
        return (
            <>
            <img src="images/nav_bar.png" className="nav" alt ="navbar"/>
           <div>  <img src="images/back.png" className="imag" alt ="back"/>
           <span className="title">{fdata.page.title}</span>
           <input
           className="stext"
            type="text"
            id="hsearch"
            placeholder="Search movies here"
            name="s"/>
            {fdata.map((val, key) => {
                return (
                    <div>
                        {Object.keys(fdata.page.content.name).map((item, i) => (
                        <li key={i}>
                        <span>Key name : {item}</span>
                        </li>
                         ))}
                        {/*<p>{val.page.content-items.content.name}</p>*/}
                        {/*rearWindow = fdata.page["content-items"].content.find(element = element.name === "Rear Window");
                    </div>
                );
            })}
            <img src="images/search.png" className="imag" alt ="search"/>
            
        </div>
        <div className="tmovie"><table>
            {fdata.page['content-items'].content.map((el)=>{
                return(
                    <>
                   <div className="tr1"><tr><td><img src={el.poster} /></td></tr>
            <tr><td className="mname">{el.name}</td></tr></div>  
                    </>
                )
            })}
      </table>
      </div>
               <div className="tmovie"><table>
            {sdata.page['content-items'].content.map((el)=>{
                return(
                    <>
                    <div className="tr2"><tr><td><img src={el.poster} /></td></tr>
            <tr><td className="mname">{el.name}</td></tr></div> 
                    </>
                )
            })}
      </table>
      </div>
 <div className="tmovie"><table>
            {tdata.page['content-items'].content.map((el)=>{
                return(
                    <>
                   <div className="tr3"><tr><td><img src={el.poster} /></td></tr>
            <tr><td className="mname">{el.name}</td></tr></div>  
                    </>
                )
            })}
      </table>
      </div>
        </>)
    }  
}

export default Content;
*/}