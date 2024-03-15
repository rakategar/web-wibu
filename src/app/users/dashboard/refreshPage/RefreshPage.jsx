"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const RefreshPage = () => {
    const router = useRouter();
    useEffect(() => {
        const refreshOnce = () => {
            router.refresh();
        };

        refreshOnce();

        // Cleanup function to ensure that useEffect runs only once
        return () => {
            // No cleanup needed
        };
    }, []); // Empty dependency array ensures that useEffect runs only once
} 
export default RefreshPage
