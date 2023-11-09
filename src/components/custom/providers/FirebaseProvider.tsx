'use client'

import app from "@/lib/firebase.lib";
import { getAnalytics } from "firebase/analytics";
import { useEffect } from "react"

export default function FirebaseProvider(){
    useEffect(() => {
        getAnalytics(app);
    }, [])
    return null
}