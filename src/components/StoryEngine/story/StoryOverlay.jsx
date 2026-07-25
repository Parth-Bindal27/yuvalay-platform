import "./StoryOverlay.css";

export default function StoryOverlay({ scene }) {

    if (!scene) return null;

    return (

        <div className="story-scene-overlay">

            <div className="story-scene-box">

                <span className="story-scene-chapter">

                    {scene.chapter}

                </span>

                <h1 className="story-scene-title">

                    {scene.title.split("\n").map((line,index)=>(

                        <span key={index}>

                            {line}

                            <br/>

                        </span>

                    ))}

                </h1>

                <p className="story-scene-description">

                    {scene.description}

                </p>


            </div>

        </div>

    );

}