import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: 'CarsPageLayout metadata'
}
type Props = {children:React.ReactNode}
const CarsPageLayout = ({children}:Props)=>{
    return(
        <>
            {children}
        </>
    )
}
export default CarsPageLayout;