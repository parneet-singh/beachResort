import React from 'react';
import RoomsFilter from './RoomFilter';
import RoomsList from './RoomList';
import { withRoomConsumer } from '../Context';
import Loading from '../Components/Loading';

const RoomContainer = ({ context }) => {
    const { loading, sortedRooms, rooms } = context;
    if (loading) {
        return <Loading />
    }
    return (
        <div>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </div>
    )
}
export default withRoomConsumer(RoomContainer)


// import React from 'react';
// import RoomsFilter from './RoomFilter';
// import RoomsList from './RoomList';
// import { RoomConsumer } from '../Context';
// import Loading from '../Components/Loading';



// const RoomsContainer = () => {
//     return (
//         <RoomConsumer>
//             {
//                 value => {
//                     const {loading , sortedRooms, Rooms} = value
//                     if(loading)
//                     {
//                         return <Loading />
//                     }
//                     return (
//                         <div>
//                         Hello from rooms container
//                         <RoomsFilter rooms = {Rooms}/>
//                         <RoomsList rooms = {sortedRooms}/>
//                     </div>
//                     )
//                 }         
//             }
//         </RoomConsumer>
//     )
// }
// export default RoomsContainer;
