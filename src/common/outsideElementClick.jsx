import React,{ useEffect, useState } from "react";

export default function useOutsideAlerter(ref) {
    const[isClickedOutside,setIsClickedOuteside]=useState(false)
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
               setIsClickedOuteside(true)
            }
            else
                setIsClickedOuteside(false)
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
    return isClickedOutside
}