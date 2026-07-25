import "./StoryEngine.css";

import StoryCanvas from "./StoryCanvas";
import StoryManager from "./story/StoryManager";

import { ParticleProvider } from "./core/ParticleController";

export default function StoryEngine() {

    return (

        <ParticleProvider>

            <section className="story-engine">

                <StoryCanvas />

                <StoryManager />

            </section>

        </ParticleProvider>

    );

}