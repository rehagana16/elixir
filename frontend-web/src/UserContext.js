import {createContext, useState} from "react"

const UserContext = createContext();

export function UserProvider({children}) {
    const [user, setUser] = useState(null);

    const getUser = async () => {
              const response = await fetch('http://localhost:8080/api/user', {
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
              })
      
              const data = await response.json()
              if(data.Error) {
                setUser(null)
              } else {
                setUser(data)
              }
            }

    return(
        <UserContext.Provider value={{user,getUser}}>
            {children }
        </UserContext.Provider>
    )
}

export default UserContext;
