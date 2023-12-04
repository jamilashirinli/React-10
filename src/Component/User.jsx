import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
const User = () => {
const [mySearch, setmySearch] = useState([])
    useEffect(() => {
    fetch('https://655f3ae5879575426b44e120.mockapi.io/Users')
            .then(res => res.json())
            .then(data => {
                setmySearch(data)
            })
    }, [])

    const [searchMyData, setSearchMyData] = useState("")

    const searchData = (e) => {
        setSearchMyData(e.target.value.toLowerCase())
    }


    return (
        <div>
            <input type='text'  onChange={searchData} />
            {
                mySearch.filter(e => e.name.toLowerCase().includes(searchMyData)).map((a, b) => (
                    <div key={b}>
                     <h4>{a.name}</h4>
                    </div>
                ))
            }
        </div>


    )

}

export default User