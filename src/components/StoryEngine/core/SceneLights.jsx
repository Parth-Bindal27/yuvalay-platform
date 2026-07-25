export default function SceneLights() {

    return (

        <>

            <ambientLight intensity={0.2} />

            <pointLight
                position={[0,0,5]}
                intensity={20}
                color="#18ff8c"
            />

            <pointLight
                position={[8,4,4]}
                intensity={10}
                color="#22ff99"
            />

            <pointLight
                position={[-8,-4,-4]}
                intensity={8}
                color="#18ff8c"
            />

        </>

    );

}