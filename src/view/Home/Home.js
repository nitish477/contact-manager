import "./Home.css"
import Card from '../../component/Card/Card'
import {PhoneBook} from '../../component/PhoneBook/PhoneBook'
import { useEffect, useState } from "react"

function Home(){
       
 const [contact , setContact]=useState(PhoneBook) 
 const [search,setSearch]=useState('')

useEffect(()=>{
    const fillterContact=PhoneBook.filter((contacts)=>{
        const name=contacts.name.toLowerCase();
        const number=contacts.number.toString();

        const query=search.toLowerCase();
        return (name.includes(query)|| number.includes(query))

    })
    setContact(fillterContact)
},[search])
    



      return(
        <>
          
           <h1 className="heading">Contact Details</h1>
         
           <div className="contanier">
          


           <div className="sub">
           <input type="text" placeholder="Search" className="search" value={search} onChange={(e)=>{
             setSearch(e.target.value)
           }} />
           <div className="contact-holder">
              {
                contact.map((contactdetails,index)=>{
                     const {name,number}=contactdetails
                     return <Card name={name} number={number} key={index}/>
                })
              
              }
                
              </div>
              {contact.length===0 ? <h3>No Contact Found</h3> : null}
           </div>
           </div>

        </>
      )


}


export default Home;