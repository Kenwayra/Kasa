import { Link } from 'react-router-dom'
import './Home.css'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Cards/Card'
import logements from '../../data/logements.json'

function Home() {

    console.log("Logements:", logements);
    console.log("Number of logements:", logements.length);

    return (
        <>
        <Banner title={<p>Chez vous, partout et ailleurs</p>}/>
        <main className='cards-container'>
            {logements.map(logement => (
                <Card
                key={logement.id}
                id={logement.id}
                title={logement.title}
                cover={logement.cover}
                />
            ))}
        </main>
        </>
    )
}

export default Home