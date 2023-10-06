document.addEventListener("DOMContentLoaded", function () {
    const inputText = document.getElementById("inputText");
    const outputText = document.getElementById("outputText");
    const decodeButton = document.getElementById("decodeButton");
    const encodeButton = document.getElementById("encodeButton");

    // Borra los campos de entrada y salida al cargar la página
    inputText.value = "";
    outputText.value = "";

    decodeButton.addEventListener("click", function () {
        const morseCode = inputText.value.trim();
        const decodedMessage = decodeMorse(morseCode);
        outputText.value = decodedMessage;
    });

    encodeButton.addEventListener("click", function () {
        const text = inputText.value.trim().toLowerCase();
        const morseCode = textToMorse(text);
        outputText.value = morseCode;
    });

    function decodeMorse(morseCode) {
        const morseTable = {
            ".-": "a", "-...": "b", "-.-.": "c", "-..": "d", ".": "e",
            "..-.": "f", "--.": "g", "....": "h", "..": "i", ".---": "j",
            "-.-": "k", ".-..": "l", "--": "m", "-.": "n", "---": "o",
            ".--.": "p", "--.-": "q", ".-.": "r", "...": "s", "-": "t",
            "..-": "u", "...-": "v", ".--": "w", "-..-": "x", "-.--": "y",
            "--..": "z", "/": " "
        };

        const words = morseCode.split(" / ");
        let decodedMessage = "";

        for (const word of words) {
            const letters = word.split(" ");
            for (const letter of letters) {
                if (letter in morseTable) {
                    decodedMessage += morseTable[letter];
                } else if (letter === "") {
                    decodedMessage += " ";
                }
            }
            decodedMessage += " ";
        }

        return decodedMessage.trim();
    }

    function textToMorse(text) {
        const morseTable = {
            "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".",
            "f": "..-.", "g": "--.", "h": "....", "i": "..", "j": ".---",
            "k": "-.-", "l": ".-..", "m": "--", "n": "-.", "o": "---",
            "p": ".--.", "q": "--.-", "r": ".-.", "s": "...", "t": "-",
            "u": "..-", "v": "...-", "w": ".--", "x": "-..-", "y": "-.--",
            "z": "--..", " ": "/"
        };

        const words = text.split(" ");
        let morseCode = "";

        for (const word of words) {
            for (const char of word) {
                if (char in morseTable) {
                    morseCode += morseTable[char] + " ";
                }
            }
            morseCode += "/ ";
        }

        return morseCode.trim();
    }
});
