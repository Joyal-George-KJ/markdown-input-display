"use strict";
// defaultStyles.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultStyles = void 0;
exports.defaultStyles = {
    wrapper: {
        width: '100vw',
        height: 'fit-content',
        padding: '1rem',
    },
    editor: {
        position: 'relative',
        border: '4px solid #d4d4d4', // border-neutral-300
    },
    toolbar: {
        position: 'absolute',
        top: 0,
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: 'white',
        padding: '0.25rem 0.5rem',
        boxSizing: 'border-box',
    },
    toolbarButtons: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.25rem',
    },
    toolbarBtn: {
        padding: '0.25rem',
        borderRadius: '0.25rem',
        cursor: 'pointer',
        background: 'transparent',
        transition: 'background 0.2s',
    },
    toolbarBtnHover: {
        backgroundColor: '#e5e5e5', // hover:bg-neutral-200
    },
    input: {
        width: '100%',
        padding: '1rem',
        paddingTop: '3.5rem',
        borderRadius: '0.375rem',
        resize: 'none',
        outline: 'none',
        color: '#171717', // text-neutral-800
        boxSizing: 'border-box',
    },
    preview: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 50,
        width: '100%',
        height: '100vh',
        backgroundColor: 'white',
        overflow: 'auto',
        padding: '1rem',
        boxSizing: 'border-box',
    },
    closeBtn: {
        position: 'absolute',
        top: '0.5rem',
        right: '0.5rem',
        fontSize: '1.25rem',
        fontWeight: 'bold',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
    },
    output: {
        color: '#171717', // text-neutral-900
        maxWidth: 'none',
        fontFamily: 'sans-serif',
        lineHeight: 1.5,
    },
};
