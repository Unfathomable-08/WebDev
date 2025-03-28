import Map from '../components/Map';
import NearbyResturants from '../components/NearbyResturants';

const Location = () => {
    return (
        <div className='mt-24'>
            <NearbyResturants />
            <Map />
        </div>
    )
}

export default Location;