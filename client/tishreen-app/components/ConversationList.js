import styles from '../styles/conversationList.module.css'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import DmCard from './DmCard'
import friends from '../assets/icons/friends.svg'
import avatar1 from '../assets/avatar-1.webp'
import avatar2 from '../assets/avatar-2.png'
import avatar3 from '../assets/avatar-3.webp'
import avatar4 from '../assets/avatar-4.webp'

const dummyDms =[

    {
        id:1,
        name: 'general',
        avatar: avatar1
    },
    {
        id:2,
        name: 'medo',
        avatar: avatar2
    }, {
        id:3,
        name: 'AboHabib',
        avatar: avatar3
    }, {
        id:4,
        name: 'buildspace',
        avatar: avatar4
    },
    

]

const ConversationList = () =>{
    const [dms, setDms] = useState(dummyDms)

return(
    <div className={styles.conversations}>
      <div className={styles.conversationListTop}>
        <input type='search' placeholder='Find or start a conversation' />
      </div>
      <div className={styles.conversationsContainer}>
        <div className={styles.elementsContainer}>
            <div className={styles.svgContainer}>
            <Image
              height={25}
              width={25}
              src={friends}
              className={styles.svg}
              alt='friends'
            />
            </div>
            <p>Friends</p>
        </div>
        <div className={styles.dmTitle}>DIRECT MESSAGES</div>
        {dms.map((dm, index) => (
          <DmCard
            key={index}
            name={dm.name}
            id={dm.id}
            avatar={
              dm.avatar ||
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OCSMFIW5fZ3vSN6yGpD-w-6SsL2_ZPA_sw&usqp=CAU'
            }
            status='online'
          />
        ))}
      </div>
    </div>


)


}


export default ConversationList