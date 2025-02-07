"use client"
import { useEffect, useState } from "react";

export function useGetDelay() {
    
    const [visible, setVisible] = useState(false)


    const IsVisible = visible ? 'visible' : 'hidden'
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setVisible(true);
        
      }, 2);
      return () => clearTimeout(timer);
    })

    return { IsVisible}
}