import './ProjectCard.css'

//props: title, github link, live link, description
export default function ProjectCard(props) {
    return(
        <div className="card">
            <div className="item">
                <h3>{props.title}</h3>
            </div>
            <div className="item" id="links">
                <a target="_blank" rel="noreferrer" href={props.github}>👾Github</a>
                <a target="_blank" rel="noreferrer" href={props.live}>🚀Live</a>
            </div>
            <div className="item" id="desc">
                <p>{props.description}</p>
            </div>
        </div>
    )
}