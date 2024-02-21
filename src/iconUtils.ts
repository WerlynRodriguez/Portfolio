import type { SimpleIcon  } from 'simple-icons';
import * as simpleIcons from 'simple-icons';

export const getIcon = (icon: string): SimpleIcon => {
    return (simpleIcons as any)['si' + icon] as SimpleIcon || 
    {
        hex: "000000",
        path: "",
        title: icon
    }
    
}