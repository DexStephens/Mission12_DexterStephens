import { Team, teams } from "./data/teams";
import Card from "./card";

const cardList = () => {
    const allTeams: Team[] = teams;
    return (
        <div className="row">
            {allTeams.map(x =>
                <>
                    <div className="col-sm-4">
                        <Card team={x} />
                    </div>
                </>
            )}
        </div>
    )
}

export default cardList;