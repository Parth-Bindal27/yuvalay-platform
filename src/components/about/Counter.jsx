import { useEffect, useState } from "react";

export default function Counter({ end, suffix }) {

    const [count,setCount]=useState(0);

    useEffect(()=>{

        let start=0;

        const duration=1800;

        const increment=end/(duration/16);

        const timer=setInterval(()=>{

            start+=increment;

            if(start>=end){

                start=end;

                clearInterval(timer);

            }

            setCount(Math.floor(start));

        },16);

        return()=>clearInterval(timer);

    },[end]);

    return(

        <>
            {count.toLocaleString()}
            {suffix}
        </>

    );

}