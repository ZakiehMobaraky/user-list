import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({users,deleteUser}) => {
    
    return users.map(user=>(
        
        <tr key={user.age}>
            <td>{user.age}</td>
            <td>{user.name}</td>
            <td>{user.lastName}</td>
            <td className='delete-btn' onClick={()=>deleteUser(user.age)}>
                <Icon icon={trash}/>
            </td>           
        </tr>            
    
))
}