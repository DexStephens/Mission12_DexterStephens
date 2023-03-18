import { Team } from './data/teams';

interface cardProps {
    team: Team
}

const Card = (props: cardProps) => {
    return (
        <div className="card m-3">
            <div className="card-body">
                <h4 className="card-title">{props.team.school}</h4>
                <p className='card-text'><b>Mascot: </b>{props.team.name}</p>
                <p className="card-text"><b>Location: </b>{props.team.city}, {props.team.state}</p>
            </div>
        </div>
    )
}

export default Card;