import { SxProps, Theme } from '@mui/material';

/**
 * Paper style with theme-aware background
 * Used for content cards and containers
 */
export const paperStyle: SxProps<Theme> = {
    marginTop: '10px',
    width: '80%',
    textAlign: 'center',
    padding: '20px',
    minHeight: '20vh',
    border: (theme) => `1px solid ${theme.palette.primary.main}33`, // 20% opacity
    boxShadow: (theme) => `0 0 20px ${theme.palette.primary.main}22`, // Subtle glow
};

/**
 * Form container style
 * Used for form sections with vertical layout
 */
export const formStyle: SxProps<Theme> = {
    margin: '10px',
    width: '80%',
    textAlign: 'center',
    padding: '20px',
    minHeight: '20vh',
    display: 'flex',
    flexDirection: 'column',
    border: (theme) => `1px solid ${theme.palette.primary.main}33`,
    boxShadow: (theme) => `0 0 20px ${theme.palette.primary.main}22`,
};

/**
 * TextField style with theme colors
 * Used for form inputs
 */
export const formTextFieldStyle: SxProps<Theme> = {
    margin: '5px',
    '& .MuiFilledInput-root': {
        backgroundColor: (theme) => theme.palette.background.paper,
        '&:hover': {
            backgroundColor: (theme) => theme.palette.background.paper,
        },
        '&.Mui-focused': {
            backgroundColor: (theme) => theme.palette.background.paper,
        },
    },
    '& .MuiInputLabel-root': {
        color: (theme) => theme.palette.text.secondary,
    },
};

/**
 * Drawer/Navigation style
 * Used for drawer and navigation components
 */
export const drawerStyle: SxProps<Theme> = {
    width: 250,
    height: '100%',
    backgroundColor: (theme) => theme.palette.background.default,
    color: (theme) => theme.palette.text.primary,
};

/**
 * Link container style with gradient background
 * Used for navigation link groups
 */
export const linkContainerStyle: SxProps<Theme> = {
    background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.main}40, ${theme.palette.secondary.main}40)`,
    padding: '10px 20px',
    borderRadius: '12px',
    border: (theme) => `1px solid ${theme.palette.primary.main}60`,
    backdropFilter: 'blur(10px)',
};