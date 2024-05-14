import { useEffect, useState } from 'react';

export function useTypewriter(textArray: string[], typingSpeed: number = 150, erasingSpeed: number = 100, delayBetweenTexts: number = 1000) {
    const [typedText, setTypedText] = useState('');
    const [arrayIndex, setArrayIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [ typingDelay, setTypingDelay] = useState(typingSpeed);

    useEffect(() => {
        let typingTimeout;

        if (isDeleting) {
            // Erase letters
            typingTimeout = setTimeout(() => {
                setTypedText((currentText) => currentText.slice(0, -1));
                setTypingDelay(erasingSpeed);
            }, erasingSpeed);
        } else {
            // Type letters
            typingTimeout = setTimeout(() => {
                setTypedText(textArray[arrayIndex].substring(0, typedText.length + 1));
                setTypingDelay(typingSpeed);
            }, typingSpeed);
        }

        if (!isDeleting && typedText === textArray[arrayIndex]) {
            // Switch to deleting after a delay when the full text is typed
            setTimeout(() => setIsDeleting(true), delayBetweenTexts);
        } else if (isDeleting && typedText === '') {
            // Switch to typing the next text after deleting
            setIsDeleting(false);
            setArrayIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        }

        return () => clearTimeout(typingTimeout);
    }, [typedText, textArray, arrayIndex, isDeleting, typingSpeed, erasingSpeed, delayBetweenTexts]);

    return typedText;
}