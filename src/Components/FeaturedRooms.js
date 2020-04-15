import React, { Component } from 'react';
import { RoomContext } from '../Context';
import Title from './Title';
import Room from './Room';
import Loading from './Loading';

class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        let Data = this.context;
         let singleRoom = Data.featuredRooms.map(room => {
             return <Room key={room.id} individualRoom = {room} />
         })
        return (
            <section className="featured-rooms">
                <Title title="featured-rooms" />
                <div className="featured-rooms-center">
                    {Data.loading ? <Loading /> : singleRoom}
               </div>
            </section>
        )
    }
}
export default FeaturedRooms;
