import type { SimpleIcon  } from 'simple-icons';
import * as simpleIcons from 'simple-icons';

type TSimpleIcon = {
    hex: string,
    path: string,
    title: string
}

export const getIcon = (iconName: string): TSimpleIcon => {
    const icon = (simpleIcons as any)['si' + iconName] as SimpleIcon | undefined;

    return {
        hex: icon?.hex || "",
        path: icon?.path || "",
        title: icon?.title || iconName
    }
}